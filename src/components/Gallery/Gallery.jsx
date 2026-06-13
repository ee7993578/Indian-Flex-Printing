import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'

const categories = [
  {
    name: 'Flex Printing',
    preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80',
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&q=80',
    ],
  },
  {
    name: 'Shop Wallpaper',
    preview: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
      'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80',
    ],
  },
  {
    name: 'Room Wallpaper',
    preview: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
      'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?w=800&q=80',
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=800&q=80',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    ],
  },
  {
    name: 'LED Boards',
    preview: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80',
      'https://images.unsplash.com/photo-1576526165098-2ede2aa93f80?w=800&q=80',
      'https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?w=800&q=80',
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=800&q=80',
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
      'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80',
      'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80',
      'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=800&q=80',
    ],
  },
  {
    name: 'Wedding Cards',
    preview: 'https://images.unsplash.com/photo-1524824267900-2b6ed4de1f3e?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1524824267900-2b6ed4de1f3e?w=800&q=80',
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80',
      'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80',
      'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',
      'https://images.unsplash.com/photo-1486178218744-c07b3b57b806?w=800&q=80',
    ],
  },
  {
    name: 'Visiting Cards',
    preview: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
      'https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?w=800&q=80',
      'https://images.unsplash.com/photo-1568952433726-3896e3881c65?w=800&q=80',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
      'https://images.unsplash.com/photo-1601972599748-abb6c5d6cf79?w=800&q=80',
      'https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&q=80',
      'https://images.unsplash.com/photo-1542744095-291d1f67b221?w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
    ],
  },
  {
    name: 'Hand Bags',
    preview: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1559563458-527698bf5295?w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80',
      'https://images.unsplash.com/photo-1594938298603-c8148c4b4dd9?w=800&q=80',
      'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80',
    ],
  },
  {
    name: 'Bill Books',
    preview: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
      'https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80',
      'https://images.unsplash.com/photo-1598520106830-8c45c2035460?w=800&q=80',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80',
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
      'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80',
      'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&q=80',
    ],
  },
  {
    name: 'Standees',
    preview: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80',
      'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80',
      'https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&q=80',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80',
      'https://images.unsplash.com/photo-1522158637959-30ab8018e6d3?w=800&q=80',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80',
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80',
    ],
  },
  {
    name: 'Shop Branding',
    preview: 'https://images.unsplash.com/photo-1562116819-31890958bc7d?w=600&q=75',
    images: [
      'https://images.unsplash.com/photo-1562116819-31890958bc7d?w=800&q=80',
      'https://images.unsplash.com/photo-1613174494987-bdb6b52a1a9e?w=800&q=80',
      'https://images.unsplash.com/photo-1568812163766-52a93382a11a?w=800&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
      'https://images.unsplash.com/photo-1481437156560-3205f6a55735?w=800&q=80',
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=800&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=800&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    ],
  },
]

export default function Gallery() {
  const [activeModal, setActiveModal] = useState(null) // category index
  const [activeImg, setActiveImg] = useState(0)

  const openModal = (catIdx) => {
    setActiveModal(catIdx)
    setActiveImg(0)
    document.body.style.overflow = 'hidden'
  }
  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = ''
  }
  const prevImg = () => setActiveImg(i => (i - 1 + categories[activeModal].images.length) % categories[activeModal].images.length)
  const nextImg = () => setActiveImg(i => (i + 1) % categories[activeModal].images.length)

  return (
    <section id="gallery" className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">Our Work</span>
          <h2 className="section-title text-gray-900 dark:text-white mt-2">
            Workshop <span className="text-emerald-600">Gallery</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Browse our portfolio of premium printing work across multiple categories.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.07 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-emerald-500/10 card-hover"
              onClick={() => openModal(i)}
            >
              <div className="aspect-square">
                <img
                  src={cat.preview}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-colors duration-300 flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-white font-display font-semibold text-sm">{cat.name}</div>
                <div className="text-emerald-300 text-xs mt-0.5">View More →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Lightbox */}
      <AnimatePresence>
        {activeModal !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
            onClick={closeModal}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10" onClick={e => e.stopPropagation()}>
              <div className="text-white font-display font-bold text-lg">
                {categories[activeModal].name}
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Main Image */}
            <div
              className="flex-1 relative flex items-center justify-center p-4"
              onClick={e => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  src={categories[activeModal].images[activeImg]}
                  alt=""
                  className="max-h-[60vh] max-w-full object-contain rounded-xl shadow-2xl"
                />
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={prevImg}
                className="absolute left-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                onClick={nextImg}
                className="absolute right-4 w-10 h-10 rounded-xl bg-white/10 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
              >
                <FiChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="px-4 pb-4 overflow-x-auto" onClick={e => e.stopPropagation()}>
              <div className="flex gap-2 min-w-max mx-auto justify-center">
                {categories[activeModal].images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImg === i
                        ? 'border-emerald-500 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
