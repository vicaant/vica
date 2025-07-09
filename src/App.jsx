import Header from './components/Header'
import Hero from './components/Hero'
import Modules from './components/Modules'
import ImageGallery from './components/ImageGallery'
import InteractiveColorWheel from './components/InteractiveColorWheel'
import Testimonials from './components/Testimonials'
import CountdownTimer from './components/CountdownTimer'
import CTA from './components/CTA'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Modules />
        <ImageGallery />
        <InteractiveColorWheel />
        <Testimonials />
        <CountdownTimer />
        <CTA />
      </main>
      
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Estilo Essencial. Inspirado na sofisticação de OSKLEN, NIKE (linha premium) e CARNA.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
