import React from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiAward, FiUsers, FiCheck } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const highlights = [
  'High Quality Premium Printing',
  'Latest Digital Printing Technology',
  'Fast Turnaround Time',
  'Competitive & Affordable Pricing',
  'Professional & Experienced Team',
  'End-to-End Branding Solutions',
]

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div {...fadeUp} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            About <span className="text-emerald-600">Indian Flex Printing</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A trusted printing and advertising solution provider serving businesses and 
            individuals with high-quality printing, branding and promotional materials.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image & Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
              <img
                src="https://images.unsplash.com/photo-1562516710-2d60eb924bc4?w=700&q=80"
                alt="Printing Workshop"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white font-display">
                  <div className="text-2xl font-black">INDIAN FLEX PRINTING</div>
                  <div className="text-emerald-300 text-sm">Since 2018 · Bareilly, UP</div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-5 -right-5 bg-emerald-600 text-white rounded-2xl p-4 shadow-xl"
            >
              <FiAward size={24} />
              <div className="text-xs font-bold mt-1">Top Rated</div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-10 -left-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-800 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-700 flex items-center justify-center text-white text-xl font-bold shadow-md flex-shrink-0">
                  MM
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-gray-900 dark:text-white text-sm">
                      Mohd Mushtahid
                    </span>
                    <MdVerified className="text-emerald-500" />
                  </div>
                  <div className="text-xs text-emerald-600 font-semibold">Founder & Owner</div>
                  <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <FiMapPin size={10} /> Jadaupur, Bareilly
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 lg:mt-0"
          >
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
                Your Local Printing & Advertising Expert
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                At Indian Flex Printing, we bring your vision to life with vibrant, high-quality 
                prints. From small visiting cards to massive flex banners, LED boards, shop 
                wallpapers, and complete branding packages — we've got everything you need 
                to make your brand stand out in Bareilly and beyond.
              </p>

              {/* Highlights */}
              <ul className="grid grid-cols-1 gap-3 mb-8">
                {highlights.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm"
                  >
                    <div className="w-5 h-5 bg-emerald-100 dark:bg-emerald-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck className="text-emerald-600 dark:text-emerald-400" size={12} />
                    </div>
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center">
                    <FiPhone className="text-emerald-600 dark:text-emerald-400" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Call Us</div>
                    <a href="tel:+917534800412" className="font-semibold text-gray-900 dark:text-white hover:text-emerald-600 transition-colors">
                      +91 7534800412
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 text-sm">
                  <div className="w-9 h-9 bg-emerald-100 dark:bg-emerald-900/40 rounded-xl flex items-center justify-center">
                    <FiMapPin className="text-emerald-600 dark:text-emerald-400" size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Address</div>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Jadaupur, Bareilly, Uttar Pradesh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
