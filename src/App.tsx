import './App.css'
import Header from './partials/Header'
import Footer from './partials/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Roster from './sections/Roster'
import Gameplay from './sections/Gameplay'
import CallToAction from './sections/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main className="space-y-24">
        <Hero />
        <About />
        <Roster />
        <Gameplay />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
