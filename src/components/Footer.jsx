function Footer() {
  return (
    <footer className="bg-slate-950 text-white/70 py-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="/test" className="hover:text-white/95">System status</a>
          <a href="#gallery" className="hover:text-white/95">Gallery</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
