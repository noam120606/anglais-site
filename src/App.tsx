import Header from './partials/Header'
import Footer from './partials/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Roster from './sections/Roster'
import Gameplay from './sections/Gameplay'
import Trailer from './sections/Trailer'
import Spinoff from './sections/Spinoff'
import Reviews from './sections/Reviews'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <Header />
      <main className="space-y-24">
        <Hero />
        <About />
        <Roster />
        <Trailer />
        <Gameplay />
        <Spinoff />
        <Reviews />
      </main>
      <Footer />
    </div>
  )
}

export default App
