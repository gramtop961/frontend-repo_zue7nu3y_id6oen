import Spline from '@splinetool/react-spline'

function Hero({ name = 'My Portfolio', tagline = 'Photography • Creative • Technology', instagram }) {
  const instagramUrl = instagram ? (instagram.startsWith('http') ? instagram : `https://instagram.com/${instagram}`) : null

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex items-center">
        <div className="text-white">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs tracking-wider uppercase mb-6">Portfolio</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">{name}</h1>
          <p className="mt-4 text-lg sm:text-2xl text-white/80 max-w-2xl">{tagline}</p>

          <div className="mt-8 flex items-center gap-3">
            {instagramUrl && (
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-pink-500/90 hover:bg-pink-500 text-white px-4 py-2 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm9.25 2.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
                <span>Instagram</span>
              </a>
            )}
            <a href="#gallery" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur border border-white/15 text-white px-4 py-2 rounded-lg transition-colors">
              Explore work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
