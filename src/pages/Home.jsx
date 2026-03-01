import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full">
        <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">
          Art & Illustration
        </p>
        <h1 className="text-6xl font-light text-stone-900 leading-tight mb-6">
          Lada<br />Sritongbai
        </h1>
        <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md">
          Creating thoughtful illustrations that tell stories through line, color, and form.
        </p>
        <div className="flex gap-6">
          <Link
            to="/gallery"
            className="bg-stone-900 text-white text-sm px-6 py-3 tracking-wide hover:bg-stone-700 transition-colors duration-200"
          >
            View Gallery
          </Link>
          <Link
            to="/contact"
            className="text-stone-900 text-sm px-6 py-3 tracking-wide border border-stone-300 hover:border-stone-900 transition-colors duration-200"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
}
