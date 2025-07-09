import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'

const modules = [
  {
    id: 1,
    title: "Minimalismo Inteligente",
    description: "Como usar peças que você já tem. Exercício: 'Revire seu guarda-roupa e encontre 5 combinações novas'. Regra das 3 peças-chave.",
    icon: "✨"
  },
  {
    id: 2,
    title: "Ciência das Cores",
    description: "Círculo cromático aplicado com vídeo interativo. Cores por estação: outono/inverno (tons quentes e opacos); primavera/verão (leveza e contrastes suaves).",
    icon: "🎨"
  },
  {
    id: 3,
    title: "Tecidos que Importam",
    description: "Tecidos naturais x sintéticos. Problematizar poliéster. Exaltar algodão orgânico, linho, lã, cashmere, seda. Guia rápido por ocasião.",
    icon: "🧵"
  },
  {
    id: 4,
    title: "Combinações Prontas",
    description: "Galeria de 20 looks desmontáveis com tags filtráveis por cor, tecido, estação. Adaptação por clima: layerizar no frio ou simplificar no calor.",
    icon: "👔"
  },
  {
    id: 5,
    title: "Estilo Pessoal sem Complicação",
    description: "Teste: 'Seu estilo minimalista é japonês, escandinavo ou italiano?'. Como incorporar 1 peça de tendência por ano sem perder a essência.",
    icon: "🎯"
  }
]

export default function Modules() {
  return (
    <section id="modulos" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Módulos do Curso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método revolucionário dividido em 5 módulos práticos para transformar 
            sua relação com o guarda-roupa.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{module.icon}</div>
                  <CardTitle className="text-xl font-medium text-foreground">
                    Módulo {module.id}: {module.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

