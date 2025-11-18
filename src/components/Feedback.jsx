import { useEffect, useState } from 'react'

function Feedback() {
  const [items, setItems] = useState([])
  const [form, setForm] = useState({ name: '', message: '', rating: 5, instagram: '' })
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const fetchFeedback = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/feedback?only_approved=true&limit=12`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      // ignore
    }
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          message: form.message,
          rating: form.rating ? Number(form.rating) : undefined,
          instagram: form.instagram || undefined,
          approved: true,
        }),
      })
      if (!res.ok) throw new Error('Failed')
      setForm({ name: '', message: '', rating: 5, instagram: '' })
      await fetchFeedback()
    } catch (e) {
      // minimal error handling UI could be added
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-semibold">Feedback</h2>
          <p className="text-white/60">What people say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {items.map((f) => (
            <div key={f.id} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{f.name}</span>
                {f.rating && (
                  <span className="text-yellow-300">
                    {'★'.repeat(f.rating)}
                  </span>
                )}
              </div>
              <p className="text-white/80 text-sm">{f.message}</p>
              {f.instagram && (
                <a href={f.instagram.startsWith('http') ? f.instagram : `https://instagram.com/${f.instagram}`} target="_blank" rel="noreferrer" className="text-pink-300 text-sm inline-block mt-3">{f.instagram}</a>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold mb-4">Leave feedback</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required placeholder="Your name" className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/30" />
            <input value={form.instagram} onChange={(e)=>setForm({...form, instagram:e.target.value})} placeholder="Instagram (handle or URL)" className="bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/30" />
            <textarea value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} required placeholder="Your message" rows={4} className="md:col-span-2 bg-white/10 border border-white/10 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-white/30" />
            <div className="flex items-center gap-3">
              <label className="text-white/80 text-sm">Rating</label>
              <select value={form.rating} onChange={(e)=>setForm({...form, rating:e.target.value})} className="bg-white/10 border border-white/10 rounded px-2 py-1">
                {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
            <div className="md:col-span-2">
              <button disabled={loading} className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 disabled:opacity-60 text-white px-4 py-2 rounded-lg transition-colors">
                {loading ? 'Sending...' : 'Submit feedback'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Feedback
