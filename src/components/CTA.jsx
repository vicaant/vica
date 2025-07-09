import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
                Pronto para Transformar seu Estilo?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Junte-se a centenas de pessoas que já descobriram como se vestir com elegância 
                usando apenas o que já possuem. Acesso vitalício + mentorias mensais em grupo.
              </p>
              
              <div className="space-y-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-12 py-4">
                  Quero meu guarda-roupa inteligente
                </Button>
                
                <div className="text-sm text-muted-foreground">
                  <p>✓ Acesso vitalício ao curso completo</p>
                  <p>✓ Mentorias em grupo mensais</p>
                  <p>✓ E-book "Guia Definitivo de Tecidos" (bônus)</p>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  "Poliéster parece barato, mas seu custo real é o planeta (e seu conforto)."
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

