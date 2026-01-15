# Environment Variables Setup Guide

## For Bolo-Metapresence Project

Bolo uses **MetaPresence backend API** to generate LiveKit tokens - no separate server needed!

Create a `.env` file in the `bolo-metapresence` root directory:

```env
# MetaPresence Backend API URL
# This is the URL to your MetaPresence backend server
# For production: https://api.metapresence.my
# For local development: http://localhost:YOUR_BACKEND_PORT
VITE_METAPRESENCE_API_URL=https://api.metapresence.my
```

## Environment Variables

### Client-Side (Frontend)

- **`VITE_METAPRESENCE_API_URL`** - URL to your MetaPresence backend API
  - Must start with `VITE_` prefix for Vite to expose it to the browser
  - This is safe to expose as it's just a URL to your backend
  - Default: `https://api.metapresence.my`

## How It Works

1. User clicks call button in bolo project
2. Bolo frontend calls: `${VITE_METAPRESENCE_API_URL}/demo/start-call`
3. MetaPresence backend (server-side) uses LiveKit credentials to generate a token
4. MetaPresence returns the token and WebSocket URL to bolo
5. Bolo frontend connects directly to LiveKit using the token
6. **Bolo delivery service persona (DEMO002) is automatically selected** - no user choice needed

## Why This Approach?

✅ **No Separate Server Needed** - Perfect for Netlify static hosting
✅ **Uses Existing Infrastructure** - Leverages MetaPresence backend
✅ **Secure** - LiveKit credentials stay on the backend
✅ **Simple Deployment** - Just build and deploy static files
✅ **No Server Maintenance** - No Express server to manage

## Netlify Deployment

### Build Settings

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

### Environment Variables (in Netlify Dashboard)

Add this environment variable:

- **Key**: `VITE_METAPRESENCE_API_URL`
- **Value**: Your MetaPresence backend API URL (e.g., `https://api.metapresence.my`)

### That's It!

No server configuration needed - just static files. Netlify will:

1. Run `npm run build` to create static files
2. Serve them from the `dist` directory
3. Your frontend will call MetaPresence backend API for LiveKit tokens

## MetaPresence Backend Requirements

Your MetaPresence backend should have:

- `/api/demo/start-call` endpoint (POST)
- LiveKit credentials configured (`LIVEKIT_API_KEY`, `LIVEKIT_API_SECRET`, `LIVEKIT_URL`)
- CORS enabled for your Bolo domain

The endpoint should accept:

```json
{
  "agent_type": "standard",
  "voice_name": "female-1",
  "language": "en",
  "persona_id": "DEMO002",
  "custom_greeting": "Hello! I'm Bolo, your delivery service assistant..."
}
```

And return:

```json
{
  "success": true,
  "data": {
    "token": "eyJ...",
    "url": "wss://your-livekit-server.com",
    "room": "demo_conv_...",
    "metadata": { ... }
  }
}
```
