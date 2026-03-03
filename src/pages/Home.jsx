import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen/50 flex flex-col items-center px-6 mb-24">
      <div className="max-w-2xl w-full justify-center mt-48 p-12">
        <p className="text-center text-sm/0 tracking-widest uppercase mb-4 text-gray-500">
          Freelance Illustrator
        </p>
        <h1 className="font-display text-center text-8xl font-light text-stone-900 leading-tight mb-6">
          Lada Sritongbai
        </h1>
        <div className="">
          <img src="assets/images/sloth.png" alt="placeholder" className="w-full max-w-md mx-auto" />
        </div>
        <div className="flex justify-center gap-6">
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
    </div>
  )
}
