import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Clock } from 'lucide-react'

export default function CountdownTimer() {
  const [spotsLeft, setSpotsLeft] = useState(12)
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev
        
        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }
        
        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    // Simula redução de vagas ocasionalmente
    const spotsTimer = setInterval(() => {
      if (Math.random() < 0.1 && spotsLeft > 3) { // 10% chance a cada 30s
        setSpotsLeft(prev => prev - 1)
      }
    }, 30000)

    return () => clearInterval(spotsTimer)
  }, [spotsLeft])

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
            Oferta Limitada - Turma de Julho
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contador de Vagas */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-border/50"
            >
              <div className="flex items-center justify-center mb-4">
                <Users className="text-primary mr-2" size={24} />
                <span className="text-lg font-medium text-foreground">Vagas Restantes</span>
              </div>
              <motion.div
                key={spotsLeft}
                initial={{ scale: 1.2, color: '#ef4444' }}
                animate={{ scale: 1, color: spotsLeft <= 5 ? '#ef4444' : '#B8956A' }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold"
              >
                {spotsLeft}
              </motion.div>
              <p className="text-sm text-muted-foreground mt-2">
                de 50 vagas iniciais
              </p>
            </motion.div>

            {/* Contador de Tempo */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-border/50"
            >
              <div className="flex items-center justify-center mb-4">
                <Clock className="text-primary mr-2" size={24} />
                <span className="text-lg font-medium text-foreground">Tempo Restante</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.days}</div>
                  <div className="text-xs text-muted-foreground">dias</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.hours}</div>
                  <div className="text-xs text-muted-foreground">horas</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.minutes}</div>
                  <div className="text-xs text-muted-foreground">min</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{timeLeft.seconds}</div>
                  <div className="text-xs text-muted-foreground">seg</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                para o encerramento das inscrições
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-4">
              {spotsLeft <= 5 ? (
                <span className="text-destructive font-medium">
                  ⚠️ Últimas vagas! Garante já a sua antes que esgote.
                </span>
              ) : (
                "Não perca a oportunidade de transformar seu guarda-roupa."
            )}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Garantir Minha Vaga Agora
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

