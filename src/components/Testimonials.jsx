import { Card, CardContent } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Ana Silva",
    role: "Executiva",
    content: "Finalmente entendi como usar as peças que já tinha no armário. Agora me visto com muito mais confiança e gastei zero comprando roupas novas.",
    image: "👩‍💼"
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "Designer",
    content: "O módulo sobre tecidos mudou completamente minha percepção. Agora só compro algodão orgânico e linho, e a diferença no conforto é incrível.",
    image: "👨‍🎨"
  },
  {
    id: 3,
    name: "Marina Costa",
    role: "Consultora",
    content: "As combinações prontas me salvaram! Tenho 10 looks que funcionam para qualquer ocasião, adaptados para cada estação do ano.",
    image: "👩‍💻"
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            Transformações Reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossos alunos transformaram seus guarda-roupas e descobriram 
            seu estilo pessoal sem comprar uma peça sequer.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/80 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6 text-center">{testimonial.image}</div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="text-center">
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-primary">Restam 12 vagas</span> para a turma de julho
          </p>
        </motion.div>
      </div>
    </section>
  )
}

