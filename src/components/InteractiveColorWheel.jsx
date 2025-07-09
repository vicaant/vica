import { useState } from 'react'
import { motion } from 'framer-motion'

const colorCombinations = {
  complementary: {
    title: "Cores Complementares",
    description: "Cores opostas no círculo cromático que criam contraste elegante",
    examples: [
      { primary: "#8B7355", secondary: "#5A6B8B", name: "Verde-oliva + Azul-acinzentado" },
      { primary: "#B8956A", secondary: "#6A7FB8", name: "Camel + Azul-lavanda" }
    ]
  },
  analogous: {
    title: "Cores Análogas",
    description: "Cores vizinhas que criam harmonia natural e sofisticada",
    examples: [
      { primary: "#B8956A", secondary: "#A0845C", name: "Camel + Areia" },
      { primary: "#8B7355", secondary: "#7A8B55", name: "Verde-oliva + Verde-musgo" }
    ]
  },
  monochromatic: {
    title: "Monocromático",
    description: "Variações da mesma cor para um visual alongado e elegante",
    examples: [
      { primary: "#F5F1EB", secondary: "#B8956A", name: "Off-white + Camel" },
      { primary: "#E8E0D6", secondary: "#8B7355", name: "Bege + Verde-oliva" }
    ]
  }
}

export default function InteractiveColorWheel() {
  const [selectedCombination, setSelectedCombination] = useState('complementary')
  const [hoveredExample, setHoveredExample] = useState(null)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Círculo Cromático Interativo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore as relações entre cores e descubra combinações harmoniosas para seu guarda-roupa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Círculo Cromático Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-80 h-80 mx-auto relative">
              {/* Círculo base */}
              <div className="absolute inset-0 rounded-full bg-gradient-conic from-red-500 via-yellow-500 via-green-500 via-cyan-500 via-blue-500 via-purple-500 to-red-500 opacity-20"></div>
              
              {/* Pontos de cor interativos */}
              <div className="absolute inset-0">
                {colorCombinations[selectedCombination].examples.map((example, index) => (
                  <motion.div
                    key={index}
                    className="absolute w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer"
                    style={{ 
                      backgroundColor: example.primary,
                      top: index === 0 ? '20%' : '60%',
                      left: index === 0 ? '70%' : '20%'
                    }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setHoveredExample(index)}
                    onHoverEnd={() => setHoveredExample(null)}
                  />
                ))}
              </div>

              {/* Linhas conectoras */}
              {selectedCombination === 'complementary' && (
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full">
                    <line
                      x1="70%"
                      y1="28%"
                      x2="28%"
                      y2="68%"
                      stroke="#B8956A"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </motion.div>
              )}
            </div>

            {/* Legenda do hover */}
            {hoveredExample !== null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white rounded-lg p-3 shadow-lg border"
              >
                <p className="text-sm font-medium text-foreground">
                  {colorCombinations[selectedCombination].examples[hoveredExample].name}
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Controles e Informações */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Seletor de tipo de combinação */}
            <div className="mb-8">
              <h3 className="text-xl font-medium text-foreground mb-4">
                Tipos de Combinação
              </h3>
              <div className="space-y-2">
                {Object.entries(colorCombinations).map(([key, combination]) => (
                  <motion.button
                    key={key}
                    onClick={() => setSelectedCombination(key)}
                    className={`w-full text-left p-4 rounded-lg border transition-colors ${
                      selectedCombination === key
                        ? 'bg-primary/10 border-primary text-foreground'
                        : 'bg-white border-border hover:bg-muted/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="font-medium">{combination.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {combination.description}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Exemplos práticos */}
            <div>
              <h3 className="text-xl font-medium text-foreground mb-4">
                Exemplos Práticos
              </h3>
              <div className="space-y-3">
                {colorCombinations[selectedCombination].examples.map((example, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg border"
                  >
                    <div className="flex space-x-2">
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: example.primary }}
                      />
                      <div
                        className="w-6 h-6 rounded-full border border-gray-200"
                        style={{ backgroundColor: example.secondary }}
                      />
                    </div>
                    <span className="text-sm text-foreground">{example.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20"
            >
              <p className="text-sm text-muted-foreground">
                💡 <strong>Dica:</strong> Use essas combinações como base e adicione neutros 
                (branco, bege, cinza) para equilibrar o visual e criar elegância.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

