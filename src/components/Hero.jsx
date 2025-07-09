import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-foreground mb-8 leading-tight">
            O Guarda-Roupa
            <br />
            <span className="text-primary">Inteligente</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
            Domine a arte de se vestir com elegância simples. Transforme suas peças existentes em looks hipnotizantes, 
            utilizando cores, tecidos naturais e proporções que se adaptam às estações.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
              Quero meu guarda-roupa inteligente
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Sem tempo? Comece pelo essencial
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground">
            "Você não precisa de mais roupas — precisa do olhar certo para usá-las."
          </p>
        </motion.div>
      </div>
    </section>
  )
}

