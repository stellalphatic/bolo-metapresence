"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { Room, RoomEvent } from "livekit-client";

// Bolo Delivery Service Persona (pre-selected)
const BOLO_PERSONA = {
  id: "bolo-delivery",
  name: "Bolo - Delivery Service",
  demoId: "DEMO002",
  greeting:
    "Hello! I'm Bolo, your delivery service assistant. How can I assist you with your order?",
  description: "Track orders and manage deliveries",
};

export default function CallModal({ isOpen, onClose }) {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerMuted, setIsSpeakerMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [error, setError] = useState("");
  const [messages, setMessages] = useState([]);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);

  const roomRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Call duration timer
  useEffect(() => {
    let interval;
    if (isConnected) {
      interval = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isConnected]);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      endCall();
    }
  }, [isOpen]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const startCall = async () => {
    try {
      setIsConnecting(true);
      setError("");
      setMessages([]);

      // Request microphone permission
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
          },
        });
      } catch {
        throw new Error(
          "Microphone access denied. Please allow microphone access to continue."
        );
      }

      console.log("🎯 [BOLO] Starting call...");

      // Use MetaPresence backend API
      const apiBaseUrl =
        import.meta.env.VITE_METAPRESENCE_API_URL || "https://api.metapresence.my";
      
      // Log environment variable for debugging
      console.log("🔍 [BOLO] Environment check:", {
        hasEnvVar: !!import.meta.env.VITE_METAPRESENCE_API_URL,
        apiBaseUrl: apiBaseUrl,
        allEnvVars: Object.keys(import.meta.env).filter(k => k.startsWith('VITE_'))
      });
      
      // Correct path: /api/demo/start-call (not /demo/start-call)
      const apiUrl = `${apiBaseUrl.replace(/\/$/, "")}/api/demo/start-call`;

      console.log("📡 [BOLO] API URL:", apiUrl);
      console.log("📤 [BOLO] Request payload:", {
        agent_type: "standard",
        voice_name: "female-1",
        language: "en",
        persona_id: BOLO_PERSONA.demoId,
        persona_name: BOLO_PERSONA.name,
      });

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agent_type: "standard",
          voice_name: "female-1",
          language: "en",
          persona_id: BOLO_PERSONA.demoId,
          custom_greeting: BOLO_PERSONA.greeting,
        }),
      });

      console.log(
        "📥 [BOLO] Response status:",
        response.status,
        response.statusText
      );

      if (!response.ok) {
        const errorText = await response.text();
        let errorData;
        try {
          errorData = JSON.parse(errorText);
        } catch {
          errorData = { message: errorText || `HTTP ${response.status}: ${response.statusText}` };
        }
        
        console.error("❌ [BOLO] API Error:", {
          status: response.status,
          statusText: response.statusText,
          url: apiUrl,
          error: errorData,
          responseText: errorText.substring(0, 200)
        });
        
        // Provide more helpful error messages
        let errorMessage = errorData.message || `Failed to start call: ${response.status} ${response.statusText}`;
        
        if (response.status === 404) {
          errorMessage = `Route not found. Please check:\n1. MetaPresence backend is running\n2. API URL is correct: ${apiBaseUrl}\n3. Route exists: /demo/start-call\n\nCurrent URL: ${apiUrl}`;
        } else if (response.status === 0 || response.status === 500) {
          errorMessage = `Cannot reach backend server. Please check:\n1. MetaPresence backend is running\n2. API URL is correct: ${apiBaseUrl}\n3. CORS is enabled for your domain\n\nCurrent URL: ${apiUrl}`;
        }
        
        throw new Error(errorMessage);
      }

      const responseData = await response.json();
      console.log("✅ [BOLO] API Response received:", {
        success: responseData.success,
        hasData: !!responseData.data,
        hasToken: !!responseData.data?.token,
        hasUrl: !!responseData.data?.url,
      });

      const { data } = responseData;

      if (!data || !data.token || !data.url) {
        console.error("❌ [BOLO] Invalid response structure");
        throw new Error("Invalid response from server. Missing token or URL.");
      }

      // Validate token format
      if (!data.token.startsWith("eyJ")) {
        console.error("❌ [BOLO] Invalid token format");
        throw new Error("Invalid token format received from server.");
      }

      // Validate URL format
      if (!data.url.startsWith("wss://") && !data.url.startsWith("ws://")) {
        console.error("❌ [BOLO] Invalid URL format");
        throw new Error("Invalid WebSocket URL format received from server.");
      }

      console.log("✅ [BOLO] Token and URL validated");

      // Create LiveKit room
      const room = new Room({
        adaptiveStream: true,
        dynacast: true,
        publishDefaults: {
          audioPreset: {
            maxBitrate: 32000,
          },
          dtx: true,
          red: true,
        },
      });

      roomRef.current = room;

      // Handle connection events
      room.on(RoomEvent.Connected, () => {
        console.log("✅ [BOLO] RoomEvent.Connected");
        setIsConnected(true);
        setIsConnecting(false);
        setError("");
        setMessages([
          {
            sender: "assistant",
            text: data.metadata?.custom_greeting || BOLO_PERSONA.greeting,
            timestamp: new Date(),
            isFinal: true,
          },
        ]);
      });

      room.on(RoomEvent.Disconnected, (reason) => {
        console.log("❌ [BOLO] RoomEvent.Disconnected:", reason);
        setIsConnected(false);
        setMessages([]);
        if (reason) {
          setError(`Connection lost: ${reason}`);
        }
      });

      room.on(RoomEvent.Reconnecting, () => {
        console.log("🔄 [BOLO] RoomEvent.Reconnecting...");
        setError("Reconnecting...");
      });

      room.on(RoomEvent.Reconnected, () => {
        console.log("✅ [BOLO] RoomEvent.Reconnected");
        setError("");
      });

      // Handle audio tracks
      room.on(RoomEvent.TrackSubscribed, (track) => {
        if (track.kind === "audio") {
          console.log("🔊 Audio track subscribed");
          const audioElement = track.attach();
          audioElement.autoplay = true;
          audioElement.muted = isSpeakerMuted;
          document.body.appendChild(audioElement);
        }
      });

      room.on(RoomEvent.TrackUnsubscribed, (track) => {
        console.log("🔇 Audio track unsubscribed");
        track.detach();
      });

      // Handle transcript messages
      room.on(RoomEvent.DataReceived, (payload) => {
        try {
          const msgData = JSON.parse(new TextDecoder().decode(payload));

          if (msgData.type === "transcript") {
            setMessages((prev) => {
              const lastMsg = prev[prev.length - 1];

              if (
                lastMsg &&
                lastMsg.sender === msgData.sender &&
                !lastMsg.isFinal
              ) {
                const updated = [...prev];
                updated[prev.length - 1] = {
                  ...lastMsg,
                  text: msgData.text,
                  isFinal: msgData.is_final || false,
                  timestamp: new Date(),
                };
                return updated;
              }

              if (msgData.text && msgData.text.trim().length > 0) {
                return [
                  ...prev,
                  {
                    sender: msgData.sender === "user" ? "user" : "assistant",
                    text: msgData.text,
                    isFinal: msgData.is_final || false,
                    timestamp: new Date(),
                  },
                ];
              }
              return prev;
            });
          } else if (msgData.type === "agent_speaking") {
            setIsAgentSpeaking(msgData.is_speaking || false);
          }
        } catch (e) {
          console.error("Data parse error:", e);
        }
      });

      // Connect to room
      console.log("🔌 [BOLO] Connecting to LiveKit room...");
      await room.connect(data.url, data.token, { autoSubscribe: true });
      console.log("✅ [BOLO] Room.connect() completed");

      // Enable microphone
      try {
        await room.localParticipant.setMicrophoneEnabled(true);
        console.log("🎤 [BOLO] Microphone enabled");
      } catch (micError) {
        console.error("⚠️ [BOLO] Failed to enable microphone:", micError);
      }
    } catch (err) {
      console.error("❌ [BOLO] Call error:", err);

      let errorMessage = "Failed to connect. Please try again.";

      if (err instanceof Error) {
        errorMessage = err.message;

        if (
          err.message.includes("Failed to fetch") ||
          err.message.includes("fetch")
        ) {
          errorMessage =
            "Network error: Could not reach server. Please check your internet connection.";
        } else if (err.message.includes("WebSocket")) {
          errorMessage =
            "WebSocket connection failed. Please verify the server URL is correct.";
        } else if (err.message.includes("token") || err.message.includes("Token")) {
          errorMessage =
            "Authentication failed. Please verify API credentials.";
        }
      }

      setError(errorMessage);
      setIsConnecting(false);
      setIsConnected(false);

      // Clean up on error
      if (roomRef.current) {
        try {
          await roomRef.current.disconnect();
        } catch (disconnectError) {
          console.error("❌ [BOLO] Error disconnecting:", disconnectError);
        }
        roomRef.current = null;
      }
    }
  };

  const endCall = async () => {
    if (roomRef.current) {
      try {
        await roomRef.current.disconnect();
        console.log("✅ [BOLO] Call ended");
      } catch (err) {
        console.error("❌ [BOLO] Error ending call:", err);
      }
      roomRef.current = null;
    }
    setIsConnected(false);
    setIsConnecting(false);
    setIsMuted(false);
    setIsSpeakerMuted(false);
    setCallDuration(0);
    setMessages([]);
    setError("");
    setIsAgentSpeaking(false);
  };

  const toggleMute = async () => {
    if (roomRef.current) {
      const newMuteState = !isMuted;
      await roomRef.current.localParticipant.setMicrophoneEnabled(newMuteState);
      setIsMuted(newMuteState);
    }
  };

  const toggleSpeaker = () => {
    setIsSpeakerMuted(!isSpeakerMuted);
    // Update all audio elements
    const audioElements = document.querySelectorAll("audio");
    audioElements.forEach((audio) => {
      audio.muted = !isSpeakerMuted;
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-sm"
        >
          {/* iPhone-style Mobile Widget */}
          <div className="rounded-[3rem] overflow-hidden relative h-[600px] sm:h-[700px] flex flex-col bg-white shadow-2xl">
            {/* Status Bar */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-12 flex items-center justify-between px-6 text-white text-sm font-medium">
              <span>10:41</span>
              <div className="flex items-center gap-1">
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
                <div className="w-1 h-1 bg-white rounded-full" />
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-gray-200/80 hover:bg-gray-300 backdrop-blur-sm flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>

            {/* Call Interface */}
            <div className="flex-1 flex flex-col overflow-hidden">
              <AnimatePresence mode="wait">
                {!isConnected && !isConnecting && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex-1 flex flex-col h-full"
                  >
                    {/* Header - Fixed */}
                    <div className="text-center py-4 px-4 flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto shadow-xl mb-2"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <Phone className="w-8 h-8 text-white" />
                      </motion.div>
                      <h2 className="text-lg font-bold mb-1 text-gray-900">
                        {BOLO_PERSONA.name}
                      </h2>
                      <p className="text-xs text-gray-600">
                        {BOLO_PERSONA.description}
                      </p>
                    </div>

                    {/* Start Call Button - Fixed at Bottom */}
                    <div className="flex-shrink-0 px-3 pt-2 pb-3 space-y-2 border-t border-gray-200">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={startCall}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4 text-white" />
                        <span className="text-white font-semibold text-sm">
                          Start Call
                        </span>
                      </motion.button>
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-[10px] text-center px-2"
                        >
                          {error}
                        </motion.p>
                      )}
                    </div>
                  </motion.div>
                )}

                {isConnecting && (
                  <motion.div
                    key="connecting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col items-center justify-center p-6"
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Phone className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2 className="text-xl font-bold mb-2 text-gray-900">
                      Connecting...
                    </h2>
                    <p className="text-sm text-gray-600">Please wait</p>
                  </motion.div>
                )}

                {isConnected && (
                  <motion.div
                    key="connected"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-1 flex flex-col bg-gradient-to-b from-orange-50 to-white"
                  >
                    {/* Call Header */}
                    <div className="px-4 pt-4 pb-2 flex-shrink-0">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-gray-900">
                          {BOLO_PERSONA.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {formatTime(callDuration)}
                        </p>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 min-h-0">
                      {messages.map((msg, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${
                            msg.sender === "user"
                              ? "justify-end"
                              : "justify-start"
                          }`}
                        >
                          <div
                            className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                              msg.sender === "user"
                                ? "bg-orange-500 text-white"
                                : "bg-white text-gray-900 shadow-sm"
                            }`}
                          >
                            <p className="text-sm">{msg.text}</p>
                          </div>
                        </motion.div>
                      ))}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Agent Speaking Indicator */}
                    {isAgentSpeaking && (
                      <div className="px-4 pb-2">
                        <div className="flex items-end justify-center gap-1 h-12">
                          {[3, 5, 4, 6, 5, 4, 5, 6, 4, 5].map(
                            (height, index) => (
                              <motion.div
                                key={index}
                                className="w-1.5 bg-gradient-to-t from-orange-600 to-orange-500 rounded-full"
                                style={{ height: `${height * 4}px` }}
                                animate={{
                                  height: [
                                    `${height * 4}px`,
                                    `${(height + 2) * 4}px`,
                                    `${height * 4}px`,
                                  ],
                                }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: index * 0.1,
                                  ease: "easeInOut",
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {/* Call Controls */}
                    <div className="flex-shrink-0 px-4 pb-4 pt-2 border-t border-gray-200">
                      <div className="flex items-center justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleMute}
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isMuted
                              ? "bg-red-500 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {isMuted ? (
                            <MicOff className="w-5 h-5" />
                          ) : (
                            <Mic className="w-5 h-5" />
                          )}
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={endCall}
                          className="w-14 h-14 rounded-full bg-red-500 text-white flex items-center justify-center"
                        >
                          <PhoneOff className="w-6 h-6" />
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={toggleSpeaker}
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isSpeakerMuted
                              ? "bg-gray-200 text-gray-700"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {isSpeakerMuted ? (
                            <VolumeX className="w-5 h-5" />
                          ) : (
                            <Volume2 className="w-5 h-5" />
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

