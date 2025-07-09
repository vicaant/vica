import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const images = [
  {
    id: 1,
    src: '/src/assets/look_minimalista_outono.png',
    alt: 'Look minimalista de outono',
    title: 'Outono Elegante',
    description: 'Cashmere bege + calça verde-oliva + tênis branco'
  },
  {
    id: 2,
    src: '/src/assets/look_minimalista_inverno.png',
    alt: 'Look minimalista de inverno',
    title: 'Inverno Sofisticado',
    description: 'Casaco cinza + gola alta creme + calça alfaiataria'
  },
  {
    id: 3,
    src: '/src/assets/look_minimalista_primavera.png',
    alt: 'Look minimalista de primavera',
    title: 'Primavera Fresca',
    description: 'Camisa linho branco + calça bege + loafers nude'
  },
  {
    id: 4,
    src: '/src/assets/galeria_tecidos_naturais.png',
    alt: 'Galeria de tecidos naturais',
    title: 'Tecidos Naturais',
    description: 'Algodão orgânico, linho, lã, cashmere e seda'
  },
  {
    id: 5,
    src: '/src/assets/galeria_cores_outono.png',
    alt: 'Paleta de cores de outono',
    title: 'Cores de Outono',
    description: 'Areia, terracota, verde-oliva e cinza-ardósia'
  },
  {
    id: 6,
    src: '/src/assets/galeria_combinacoes_prontas.png',
    alt: 'Combinações prontas',
    title: 'Combinações Prontas',
    description: 'Peças essenciais para looks versáteis'
  }
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Galeria de Inspiração
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore looks reais e combinações que demonstram a elegância do minimalismo inteligente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/20 flex items-end p-6 transition-opacity duration-300"
                >
                  <div className="text-white">
                    <h3 className="text-lg font-medium mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.description}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/20 rounded-full text-white hover:bg-black/40 transition-colors"
                >
                  <X size={20} />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-medium text-foreground mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

