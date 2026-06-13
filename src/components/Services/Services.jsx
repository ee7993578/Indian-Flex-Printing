import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const services = [
  {
    title: 'Flex Printing',
    desc: 'Large-format vibrant flex banners with UV-resistant inks for indoor & outdoor use.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Shop Wallpaper',
    desc: 'Transform your shop with stunning custom wallpaper designs that attract customers.',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=75',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Room Wallpaper',
    desc: 'Beautiful high-resolution wallpapers for home & office décor that last for years.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=75',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    title: 'LED Light Boards',
    desc: 'Eye-catching illuminated signboards that make your business visible day and night.',
    img: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&q=75',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Shop Banners',
    desc: 'Premium quality banners to promote your shop, offers, and special events.',
    img: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&q=75',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Standees',
    desc: 'Professional roll-up standees for exhibitions, events and retail promotions.',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&q=75',
    color: 'from-purple-500 to-violet-600',
  },
  {
    title: 'Wedding Cards',
    desc: 'Elegant custom wedding invitations and cards with premium finishes.',
    img: 'https://images.unsplash.com/photo-1524824267900-2b6ed4de1f3e?w=500&q=75',
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Visiting Cards',
    desc: 'Professional business cards that leave a lasting first impression on clients.',
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=75',
    color: 'from-emerald-600 to-green-700',
  },
  {
    title: 'Hand Bag Printing',
    desc: 'Custom printed bags for gifting, retail, and promotional campaigns.',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=75',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Bill Book Printing',
    desc: 'Professional invoice and bill books with your branding, serial numbers.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&q=75',
    color: 'from-slate-500 to-gray-600',
  },
  {
    title: 'Advertising Materials',
    desc: 'Complete advertising and promotional materials for your marketing needs.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=75',
    color: 'from-red-500 to-pink-600',
  },
  {
    title: 'Digital Printing',
    desc: 'High-resolution digital printing on all media types with vivid colors.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=75',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Large Format Printing',
    desc: 'Massive format printing for hoardings, building wraps, and billboards.',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=75',
    color: 'from-teal-600 to-emerald-700',
  },
]

const cardVariant = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50 dark:bg-emerald-900/10 rounded-full blur-3xl opacity-50" />
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
          <span className="section-subtitle">What We Offer</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Complete printing and advertising solutions tailored for businesses, shops, events, and individuals.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              {...cardVariant}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-emerald-500/10 border border-gray-100 dark:border-gray-800 card-hover"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-50 group-hover:opacity-60 transition-opacity`} />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-base mb-1.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3">
                  {service.desc}
                </p>
                <a
                  href="https://wa.me/917534800412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 text-sm font-semibold hover:gap-2.5 transition-all"
                >
                  Get Quote <FiArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Don't see what you need? We offer custom printing solutions too!
          </p>
          <a
            href="https://wa.me/917534800412"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Chat With Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
