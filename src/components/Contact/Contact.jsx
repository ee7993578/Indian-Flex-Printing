import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiSend, FiUser, FiMessageSquare, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const initForm = { name: '', mobile: '', requirement: '', message: '' }
const requirementOptions = [
  'Flex Printing',
  'Shop Wallpaper',
  'Room Wallpaper',
  'LED Board',
  'Shop Banner',
  'Standee',
  'Wedding Card',
  'Visiting Card',
  'Hand Bag Printing',
  'Bill Book',
  'Advertising Material',
  'Other',
]

export default function Contact() {
  const [form, setForm] = useState(initForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit mobile number'
    if (!form.requirement) e.requirement = 'Please select a requirement'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(er => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    const msg = `Hello! I'm ${form.name}. Mobile: ${form.mobile}. Requirement: ${form.requirement}. Message: ${form.message}`
    window.open(`https://wa.me/917534800412?text=${encodeURIComponent(msg)}`, '_blank')
    setSubmitted(true)
    setForm(initForm)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Contact <span className="text-emerald-600">Us</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Send us an inquiry and we'll get back to you within hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Owner Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-2xl p-6 text-white shadow-xl shadow-emerald-500/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-xl font-bold">
                  MM
                </div>
                <div>
                  <div className="font-display font-bold text-lg">Mohd Mushtahid</div>
                  <div className="text-emerald-200 text-sm">Founder & Owner</div>
                </div>
              </div>
              <div className="text-emerald-100 text-sm leading-relaxed">
                Available Mon–Sat, 9 AM to 8 PM for all your printing and advertising needs.
              </div>
            </div>

            {/* Contact items */}
            {[
              {
                icon: <FiPhone size={20} />,
                label: 'Call / WhatsApp',
                value: '+91 7534800412',
                href: 'tel:+917534800412',
                color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400',
              },
              {
                icon: <FaWhatsapp size={20} />,
                label: 'WhatsApp',
                value: 'Chat with us now',
                href: 'https://wa.me/917534800412',
                color: 'bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400',
              },
              {
                icon: <FiMapPin size={20} />,
                label: 'Address',
                value: 'Jadaupur, Bareilly, Uttar Pradesh, India',
                color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 flex items-start gap-4 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-semibold text-gray-900 dark:text-white text-sm">{item.value}</div>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 md:p-8 border border-gray-100 dark:border-gray-800 shadow-xl">
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-6">
                Send an Inquiry
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-6 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 flex items-center gap-3 text-emerald-700 dark:text-emerald-400"
                >
                  <FiCheckCircle size={20} />
                  <span className="font-medium">Message sent via WhatsApp! We'll respond shortly.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        errors.name
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-gray-200 dark:border-gray-700 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="tel"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        errors.mobile
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-gray-200 dark:border-gray-700 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                {/* Requirement */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Requirement *
                  </label>
                  <select
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                      errors.requirement
                        ? 'border-red-400 dark:border-red-600'
                        : 'border-gray-200 dark:border-gray-700 focus:border-emerald-500'
                    }`}
                  >
                    <option value="">Select your requirement</option>
                    {requirementOptions.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.requirement && <p className="text-red-500 text-xs mt-1">{errors.requirement}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Message *
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3.5 top-3.5 text-gray-400" size={16} />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, size, quantity, etc."
                      rows={4}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none transition-all ${
                        errors.message
                          ? 'border-red-400 dark:border-red-600'
                          : 'border-gray-200 dark:border-gray-700 focus:border-emerald-500'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary justify-center text-base py-3.5"
                >
                  <FiSend size={18} />
                  Send Inquiry via WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800"
        >
          <div className="bg-white dark:bg-gray-900 p-4 flex items-center gap-3 border-b border-gray-100 dark:border-gray-800">
            <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg flex items-center justify-center">
              <FiMapPin className="text-emerald-600 dark:text-emerald-400" size={16} />
            </div>
            <span className="font-semibold text-gray-900 dark:text-white text-sm">
              Jadaupur, Bareilly, Uttar Pradesh — Find Us on Map
            </span>
          </div>
          <iframe
            title="Indian Flex Printing Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.063218498124!2d79.42270507506286!3d28.36473989739714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a009c28f1f3fb9%3A0x2b7a76ea38f79aba!2sJadaupur%2C%20Bareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1709000000000!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  )
}
