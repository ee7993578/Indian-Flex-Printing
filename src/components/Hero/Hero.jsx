import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPrint, FaStar } from 'react-icons/fa'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
}

const stats = [
  { value: '500+', label: 'Projects Done' },
  { value: '300+', label: 'Happy Clients' },
  { value: '5+', label: 'Years Experience' },
  { value: '1000+', label: 'Orders Delivered' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-white dark:bg-gray-950 hero-pattern flex items-center pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-100 dark:bg-emerald-900/20 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-100 dark:border-emerald-900/30 rounded-full opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-emerald-50 dark:border-emerald-900/20 rounded-full opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div>
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <MdVerified className="text-emerald-600" />
            <span>Bareilly's Trusted Printing Partner</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
              ))}
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight mb-4"
          >
            Transform Your{' '}
            <span className="gradient-text">Brand</span>
            <br />
            With Premium
            <br />
            <span className="text-emerald-600">Printing Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Professional Flex Printing, LED Boards, Wallpapers, Visiting Cards, Branding & 
            Advertising Solutions — all under one roof in Bareilly, UP.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="tel:+917534800412"
              className="btn-primary group text-base"
            >
              <FiPhone size={18} />
              Call Now
              <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/917534800412"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-0.5 text-base"
            >
              <FaWhatsapp size={20} />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-bold text-xl md:text-2xl text-emerald-600 dark:text-emerald-400">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <img
                src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=700&q=80"
                alt="Flex Printing Business"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                      <FaPrint className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-gray-900 dark:text-white text-sm">
                        Indian Flex Printing
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Jadaupur, Bareilly, UP
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="font-bold text-sm text-gray-800 dark:text-white">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-4 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-2xl font-display font-black text-emerald-600">512i</div>
              <div className="text-xs text-gray-500 font-medium">Printing Machine</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-4 -right-4 bg-emerald-600 text-white rounded-2xl shadow-xl p-4"
            >
              <div className="text-xl font-bold">24/7</div>
              <div className="text-xs opacity-90">Service Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:hidden rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=700&q=80"
            alt="Flex Printing"
            className="w-full h-56 object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 dark:text-gray-600">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-gray-300 dark:border-gray-700 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-emerald-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
