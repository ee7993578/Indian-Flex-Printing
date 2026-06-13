import React from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MdLocalPrintshop } from 'react-icons/md'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Flex Printing',
  'Shop Wallpaper',
  'Room Wallpaper',
  'LED Light Boards',
  'Shop Banners',
  'Visiting Cards',
  'Wedding Cards',
  'Standees & Bags',
]

const handleNav = (href) => {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-gray-950 dark:bg-black text-gray-400 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-900/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <MdLocalPrintshop className="text-white text-xl" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">
                  INDIAN FLEX
                </div>
                <div className="text-[10px] tracking-widest text-emerald-500 uppercase font-semibold">
                  PRINTING
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-gray-500">
              Bareilly's trusted premium printing and advertising solution provider since 2018.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebook size={16} />, href: '#', label: 'Facebook' },
                { icon: <FaInstagram size={16} />, href: '#', label: 'Instagram' },
                { icon: <FaWhatsapp size={16} />, href: 'https://wa.me/917534800412', label: 'WhatsApp' },
                { icon: <FaYoutube size={16} />, href: '#', label: 'YouTube' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-emerald-600 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors group"
                  >
                    <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#services')}
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-emerald-400 transition-colors group"
                  >
                    <FiArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-white text-base mb-5">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-emerald-900/40 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FiMapPin className="text-emerald-500" size={14} />
                </div>
                <p className="text-sm text-gray-500">
                  Jadaupur, Bareilly,<br />Uttar Pradesh, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiPhone className="text-emerald-500" size={14} />
                </div>
                <a href="tel:+917534800412" className="text-sm text-gray-500 hover:text-emerald-400 transition-colors">
                  +91 7534800412
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-emerald-500" size={14} />
                </div>
                <a
                  href="https://wa.me/917534800412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-emerald-400 transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/917534800412"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition-all w-full justify-center"
            >
              <FaWhatsapp size={18} />
              Get Free Quote
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
            <p>© {new Date().getFullYear()} Indian Flex Printing. All rights reserved.</p>
            <p>
              Owned by{' '}
              <span className="text-emerald-500 font-semibold">Mohd Mushtahid</span>
              {' · '}
              Jadaupur, Bareilly, UP
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
