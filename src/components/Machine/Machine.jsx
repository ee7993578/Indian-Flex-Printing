import React from 'react'
import { motion } from 'framer-motion'
import { FiZap, FiMaximize2, FiClock, FiShield } from 'react-icons/fi'
import { MdPrint, MdHighQuality } from 'react-icons/md'

const specs = [
  {
    icon: <MdHighQuality size={22} />,
    title: 'High Quality Output',
    desc: 'Ultra-sharp 1440 DPI resolution for crystal-clear prints every time.',
    color: 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400',
  },
  {
    icon: <FiMaximize2 size={22} />,
    title: 'Large Format Output',
    desc: 'Print widths up to 5 feet for massive banners and hoardings.',
    color: 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400',
  },
  {
    icon: <FiClock size={22} />,
    title: 'Fast Production',
    desc: 'High-speed printing up to 50 sq.ft/hour without quality compromise.',
    color: 'bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400',
  },
  {
    icon: <FiShield size={22} />,
    title: 'Reliable Performance',
    desc: 'Industrial-grade build ensures consistent results across long print runs.',
    color: 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400',
  },
  {
    icon: <FiZap size={22} />,
    title: 'UV Resistant Inks',
    desc: 'Eco-solvent inks resist fading from sunlight for 3–5+ years outdoors.',
    color: 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400',
  },
  {
    icon: <MdPrint size={22} />,
    title: 'Multi-Media Support',
    desc: 'Compatible with flex, vinyl, canvas, paper, and backlit materials.',
    color: 'bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400',
  },
]

export default function Machine() {
  return (
    <section className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Equipment</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Professional <span className="text-emerald-600">Printing Machine</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            We use the industry-leading 512i Printing Machine for unmatched quality and output.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Machine Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/15 border border-emerald-100 dark:border-emerald-900/30">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&q=80"
                alt="512i Printing Machine"
                className="w-full h-80 md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/50 via-transparent to-transparent" />
            </div>

            {/* Machine badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-5 -right-5 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-5 border border-gray-100 dark:border-gray-800"
            >
              <div className="text-center">
                <div className="font-display font-black text-3xl text-emerald-600">512i</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">
                  Printing Machine
                </div>
              </div>
            </motion.div>

            {/* Bottom card */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/90 dark:bg-gray-900/90 backdrop-blur rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-gray-900 dark:text-white text-sm">
                    Industrial Grade Quality
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    1440 DPI · 5ft Width · Eco-Solvent
                  </div>
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                  <MdPrint className="text-white text-xl" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Specs Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6">
              <h3 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-3">
                Why Our Machines Deliver Better Results
              </h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Our 512i digital printing machine is equipped with advanced printheads that deliver 
                photographic-quality output on all major print media — flex, vinyl, canvas, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 border border-gray-100 dark:border-gray-800 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors group"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${spec.color}`}>
                    {spec.icon}
                  </div>
                  <div className="font-semibold text-gray-900 dark:text-white text-sm mb-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {spec.title}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {spec.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
