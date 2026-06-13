import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiAward, FiTruck, FiDollarSign, FiCpu, FiUsers, FiSmile } from 'react-icons/fi'

const reasons = [
  {
    icon: <FiAward size={28} />,
    title: 'Premium Quality',
    desc: 'We use only the finest materials and advanced printing technologies to ensure outstanding output every time.',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    icon: <FiTruck size={28} />,
    title: 'Fast Delivery',
    desc: 'Express printing and delivery services available. Most orders ready within 24–48 hours.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    icon: <FiDollarSign size={28} />,
    title: 'Affordable Pricing',
    desc: 'Competitive rates without compromising quality. Best value for money in Bareilly.',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: <FiCpu size={28} />,
    title: 'Latest Machines',
    desc: '512i industrial printing machines with 1440 DPI resolution for crystal-clear results.',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: <FiUsers size={28} />,
    title: 'Professional Team',
    desc: 'Experienced designers and printing experts who understand your vision and bring it to life.',
    color: 'from-orange-500 to-red-600',
  },
  {
    icon: <FiSmile size={28} />,
    title: 'Customer Satisfaction',
    desc: '300+ happy clients and 4.9★ rating. We go above and beyond to exceed your expectations.',
    color: 'from-pink-500 to-rose-600',
  },
]

const counters = [
  { value: 500, suffix: '+', label: 'Projects Completed' },
  { value: 300, suffix: '+', label: 'Happy Clients' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Orders Delivered' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Advantage</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Why Choose <span className="text-emerald-600">Us?</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We're not just a printing shop — we're your complete branding partner.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 card-hover"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-emerald-600 to-emerald-800 dark:from-emerald-700 dark:to-emerald-900 rounded-3xl p-8 md:p-12 shadow-2xl shadow-emerald-500/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {counters.map((c, i) => (
              <div key={i} className="text-center">
                <div className="font-display font-black text-4xl md:text-5xl text-white">
                  <Counter value={c.value} suffix={c.suffix} />
                </div>
                <div className="text-emerald-200 text-sm mt-2 font-medium">{c.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
