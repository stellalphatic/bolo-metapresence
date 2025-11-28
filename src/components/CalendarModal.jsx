"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Phone, Mail } from "lucide-react"

export default function CalendarModal({ isOpen, onClose }) {
  const [step, setStep] = useState("form") // form, calendar
  const [formData, setFormData] = useState({ email: "", phone: "", name: "", restaurant: "" })
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const getDaysArray = () => {
    const daysInMonth = getDaysInMonth(currentDate)
    const firstDay = getFirstDayOfMonth(currentDate)
    const days = []

    for (let i = 0; i < firstDay; i++) {
      days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))
    }

    return days
  }

  const isDateInPast = (date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isDateSelected = (date) => {
    if (!selectedDate || !date) return false
    return (
      date.getFullYear() === selectedDate.getFullYear() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getDate() === selectedDate.getDate()
    )
  }

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (formData.email && formData.phone && formData.name) {
      setStep("calendar")
    }
  }

  const handleConfirm = async () => {
    if (selectedDate && selectedTime) {
      setIsSubmitting(true)

      // Format date and time
      const dateStr = selectedDate.toLocaleDateString()
      const meetingDateTime = `${dateStr} at ${selectedTime}`

      // Prepare Calendly URL with pre-filled data
      const calendlyUrl = `https://calendly.com/your-username/demo?name=${encodeURIComponent(formData.name)}&email=${encodeURIComponent(formData.email)}&phone_number=${encodeURIComponent(formData.phone)}`

      // Open Calendly in a new window for final confirmation
      window.open(calendlyUrl, "calendly", "width=900,height=700")

      console.log("Booking details:", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        restaurant: formData.restaurant,
        dateTime: meetingDateTime,
      })

      // Close modal
      setTimeout(() => {
        setIsSubmitting(false)
        handleClose()
      }, 1000)
    }
  }

  const handleClose = () => {
    setStep("form")
    setFormData({ email: "", phone: "", name: "", restaurant: "" })
    setSelectedDate(null)
    setSelectedTime(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <motion.div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
    >
      <motion.div
        className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-black">Schedule a Demo</h2>
          <button onClick={handleClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={24} className="text-black" />
          </button>
        </div>

        <div className="p-6">
          {step === "form" ? (
            <motion.form
              onSubmit={handleFormSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <label className="block text-sm font-semibold text-black mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">Restaurant Name *</label>
                <input
                  type="text"
                  value={formData.restaurant}
                  onChange={(e) => setFormData({ ...formData, restaurant: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black placeholder-gray-400"
                  placeholder="Your restaurant name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Mail size={16} />
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black placeholder-gray-400"
                  placeholder="your.email@restaurant.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2 flex items-center gap-2">
                  <Phone size={16} />
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-600 focus:outline-none text-black placeholder-gray-400"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all duration-300"
              >
                Continue to Calendar
              </button>

              <p className="text-xs text-gray-500 text-center">We'll use this info to set up your demo meeting</p>
            </motion.form>
          ) : (
            <motion.div className="space-y-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-black">Select a Date</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                      className="p-2 hover:bg-gray-100 rounded-full text-black"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <span className="font-semibold min-w-32 text-center text-black">
                      {currentDate.toLocaleString("default", { month: "long", year: "numeric" })}
                    </span>
                    <button
                      onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                      className="p-2 hover:bg-gray-100 rounded-full text-black"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center font-semibold text-sm text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-2">
                  {getDaysArray().map((date, idx) => (
                    <button
                      key={idx}
                      onClick={() => !isDateInPast(date) && setSelectedDate(date)}
                      disabled={isDateInPast(date) || !date}
                      className={`
                        aspect-square rounded-lg font-semibold transition-all text-black
                        ${!date ? "invisible" : ""}
                        ${isDateInPast(date) ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
                        ${isDateSelected(date) ? "bg-blue-600 text-white shadow-lg" : "hover:bg-gray-100"}
                      `}
                    >
                      {date?.getDate()}
                    </button>
                  ))}
                </div>
              </div>

              {selectedDate && (
                <motion.div className="space-y-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h3 className="font-semibold text-black">Select a Time</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          py-2 rounded-lg font-medium transition-all text-sm
                          ${
                            selectedTime === time
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 text-black hover:bg-gray-200"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {selectedDate && selectedTime && (
                <motion.div
                  className="pt-4 border-t border-gray-200 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-black font-semibold">Meeting scheduled for:</p>
                    <p className="text-blue-600 font-bold">
                      {selectedDate.toLocaleDateString()} at {selectedTime}
                    </p>
                  </div>
                  <button
                    onClick={handleConfirm}
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold bg-black text-white hover:bg-gray-900 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Redirecting..." : "Confirm & Open Calendly"}
                  </button>
                </motion.div>
              )}

              <button
                onClick={() => setStep("form")}
                className="w-full py-2 text-gray-600 hover:text-black transition-colors font-medium text-sm"
              >
                ← Back to Info
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
