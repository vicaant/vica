import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="mb-12">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight"
          >
            Desvende a Elegância que Já Vive em Você
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-muted-foreground mb-8 leading-relaxed"
          >
            Cansado de um guarda-roupa cheio, mas sem nada para vestir? Descubra como transformar suas peças existentes em looks hipnotizantes, dominando a arte de se vestir com propósito e sofisticação.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
            <CardContent className="p-8">
              {!isSubmitted ? (
                <>
                  <h2 className="text-2xl font-medium text-foreground mb-4">
                    Acesso VIP Exclusivo
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Seja um dos primeiros a ter acesso a este conhecimento transformador. Junte-se à nossa Lista VIP e receba acesso exclusivo 24 horas antes do lançamento oficial.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="Seu melhor e-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 text-lg"
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 transition-all duration-300"
                    >
                      Quero Acesso VIP!
                    </Button>
                  </form>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Restam poucas vagas para a turma de lançamento. Garanta seu lugar agora.
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <h2 className="text-2xl font-medium text-foreground mb-4">
                    Bem-vindo à Lista VIP! 🎉
                  </h2>
                  <p className="text-muted-foreground">
                    Obrigado por se inscrever! Você receberá acesso exclusivo 24 horas antes do lançamento oficial, além de conteúdos bônus e surpresas.
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            Inspirado na sofisticação de marcas como OSKLEN, NIKE (linha premium) e CARNA
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
