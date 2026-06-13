import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Shop Owner, Bareilly',
    avatar: 'RS',
    color: 'from-emerald-400 to-teal-600',
    rating: 5,
    text: 'Indian Flex Printing did an amazing job on our shop wallpaper and LED board. The quality is outstanding and the colors are so vibrant. Highly recommended to anyone in Bareilly!',
  },
  {
    name: 'Priya Verma',
    role: 'Wedding Planner',
    avatar: 'PV',
    color: 'from-pink-400 to-rose-600',
    rating: 5,
    text: 'Got our wedding cards printed here and they were absolutely beautiful! The design suggestions from Mushtahid bhai were spot on. Delivery was fast too. 5 stars!',
  },
  {
    name: 'Mohd Arshad',
    role: 'Restaurant Owner',
    avatar: 'MA',
    color: 'from-orange-400 to-red-600',
    rating: 5,
    text: 'We needed urgent flex banners for our restaurant opening. They delivered in just 12 hours with excellent quality. Very professional service and very affordable pricing.',
  },
  {
    name: 'Kavita Gupta',
    role: 'Interior Designer',
    avatar: 'KG',
    color: 'from-purple-400 to-violet-600',
    rating: 5,
    text: 'The room wallpapers we ordered for our client project came out perfectly. Colors matched exactly as shown in the preview. Will definitely order again for future projects.',
  },
  {
    name: 'Sanjay Agarwal',
    role: 'Business Owner',
    avatar: 'SA',
    color: 'from-blue-400 to-indigo-600',
    rating: 5,
    text: 'Ordered visiting cards, bill books, and standees for our business. Everything was perfect quality at a great price. This is now our go-to printing shop in Bareilly.',
  },
  {
    name: 'Nadia Begum',
    role: 'Boutique Owner',
    avatar: 'NB',
    color: 'from-teal-400 to-emerald-600',
    rating: 5,
    text: 'The printed bags for my boutique look absolutely stunning. Customers keep asking where I got them from! The quality is premium and the service is very personal and attentive.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 4000)
    return () => clearInterval(t)
  }, [autoplay])

  const prev = () => { setAutoplay(false); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setAutoplay(false); setCurrent(c => (c + 1) % testimonials.length) }

  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Client Reviews</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            What Our <span className="text-emerald-600">Customers Say</span>
          </h2>
        </motion.div>

        {/* Main testimonial card */}
        <div className="max-w-3xl mx-auto mb-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-emerald-50 dark:from-gray-900 dark:to-emerald-900/20 rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-gray-800 shadow-xl relative"
            >
              <FaQuoteLeft className="text-emerald-200 dark:text-emerald-800 text-5xl absolute top-6 left-8" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-8 relative z-10">
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {testimonials[current].avatar}
                </div>
                <div>
                  <div className="font-display font-bold text-gray-900 dark:text-white">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation & Dots */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
          >
            <FiChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setAutoplay(false); setCurrent(i) }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-emerald-600'
                    : 'w-2 bg-gray-300 dark:bg-gray-700 hover:bg-emerald-400'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-emerald-600 hover:text-white flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              onClick={() => { setAutoplay(false); setCurrent(i) }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                i === current
                  ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30'
                  : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 hover:border-emerald-300 dark:hover:border-emerald-700'
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">{t.name}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
              <div className="flex">
                {[...Array(t.rating)].map((_, j) => (
                  <FaStar key={j} className="text-yellow-400 text-[10px]" />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
