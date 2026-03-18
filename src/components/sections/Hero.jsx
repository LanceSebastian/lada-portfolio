import { Link } from 'react-router-dom'
import dots from '../../data/dots'
import dotsMobile from '../../data/dots-mobile'

function DotLayer({ data }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-t-4xl">
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
    <div className="max-h-300 h-[85vh] md:h-[90vh] flex flex-col items-center justify-center gap-6">
      <div className="max-h-300 h-screen w-full relative rounded-t-4xl">
        <div className="md:hidden"><DotLayer data={dotsMobile} /></div>
        <div className="hidden md:block"><DotLayer data={dots} /></div>

        <div className="absolute flex flex-col top-[25vh] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src="/images/hero.png" alt="Lada Sritongbai — Illustrator" fetchPriority='high' className="w-full min-w-80 md:min-w-100" />
        </div>
        {/* Stats — bottom right */}
        <div className="absolute bottom-0 md:bottom-10 right-0 p-8 flex flex-col items-end gap-4">
          
          <div className="text-right">
            <p className="text-4xl md:text-6xl font-light text-text">4</p>
            <p className="text-text-muted text-xs tracking-widest uppercase">Years Illustrating</p>
          </div>
          <div className="text-right">
            <p className="text-4xl md:text-6xl font-light text-text">50+</p>
            <p className="text-text-muted text-xs tracking-widest uppercase">Published Works</p>
          </div>
        </div>

        {/* Scroll indicator — bottom center */}
        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-text-muted animate-bounce">
          <p className="text-xs tracking-widest uppercase">Scroll</p>
          <i className="fa-solid fa-chevron-down text-xs"></i>
        </div>

        <div className="absolute bottom-0 md:bottom-10 left-0 p-8">
          <p className="text-text-muted text-xs md:text-sm tracking-widest uppercase ">Illustrator · Somerset, UK</p>
            <h1 className="text-4xl md:text-8xl font-light text-text mb-4">Lada <br/>Sritongbai</h1>
            <p className="text-stone-500 w-65 md:w-150 text-sm md:text-lg tracking-widest ">
              Narrative Illustration, Character Design, and Artisan Cards. Work that lives in the digital and material world.
            </p>
        </div>
      </div>
    </div>
  )
}
