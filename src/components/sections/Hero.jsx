import { Link } from 'react-router-dom'
import dots from '../../data/dots'
import dotsMobile from '../../data/dots-mobile'

function DotLayer({ data }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {data.map(dot => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-primary/20 animate-bob"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  return (
    <div className="max-h-300 h-[75vh] md:h-screen flex flex-col items-center justify-center gap-6">
      <div className="max-h-300 h-screen w-full relative rounded-t-4xl">
        <div className="md:hidden"><DotLayer data={dotsMobile} /></div>
        <div className="hidden md:block"><DotLayer data={dots} /></div>

        <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/images/hero.png" alt="Lada Sritongbai — Illustrator" className="w-full min-w-100" />
          <div className="flex justify-center gap-8">
            <Link to="/gallery" className="bg-stone-900 text-white text-sm px-6 py-3 tracking-wide hover:bg-stone-700 transition-colors duration-200">
              View Gallery
            </Link>
            <Link to="/contact" className="text-stone-900 text-sm px-6 py-3 tracking-wide border border-stone-300 hover:border-stone-900 transition-colors duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
