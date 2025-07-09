import { Button } from '@/components/ui/button.jsx'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-light text-foreground">
              Estilo Essencial
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </a>
            <a href="#modulos" className="text-muted-foreground hover:text-foreground transition-colors">
              Módulos
            </a>
            <a href="#depoimentos" className="text-muted-foreground hover:text-foreground transition-colors">
              Depoimentos
            </a>
          </nav>
          
          <Button className="bg-primary hover:bg-primary/90">
            Inscrever-se
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

