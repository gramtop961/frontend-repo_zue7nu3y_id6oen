import { useEffect, useState } from 'react'

function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/photos?limit=18`)
        const data = await res.json()
        setPhotos(data)
      } catch (e) {
        // graceful fallback: static placeholders
        setPhotos([
          { id: '1', title: 'Studio Portrait', image_url: 'https://images.unsplash.com/photo-1517263904808-5dc91e3e7044?q=80&w=1974&auto=format&fit=crop', featured: true },
          { id: '2', title: 'Night City', image_url: 'https://images.unsplash.com/photo-1519541703152-592c6c870849?q=80&w=2070&auto=format&fit=crop' },
          { id: '3', title: 'Minimal Chair', image_url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2080&auto=format&fit=crop' },
          { id: '4', title: 'Lens & Light', image_url: 'https://images.unsplash.com/photo-1502920917128-1aa500764b8a?q=80&w=2070&auto=format&fit=crop' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) {
    return (
      <section id="gallery" className="py-16 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
          <p className="text-white/60">Loading photos...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold">Gallery</h2>
          <p className="text-white/60">A selection of recent shots</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <figure key={p.id} className="group overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img src={p.image_url} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-4 flex items-center justify-between">
                <span className="font-medium">{p.title}</span>
                {p.featured && <span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">Featured</span>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
