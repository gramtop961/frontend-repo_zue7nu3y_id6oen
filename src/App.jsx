import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero name="My Portfolio" tagline="Camera • Photography • Creative • Technology" instagram="your_instagram_handle" />
      <Gallery />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
