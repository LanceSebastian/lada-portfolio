import { Link } from 'react-router-dom'

export default function Home() {
  const cols = 8
  const rows = 6

  const dots = Array.from({ length: cols * rows }, (_, i) => ({
    id: i,
    x: (i % cols) * (100 / cols) + Math.random() * 8,
    y: Math.floor(i / cols) * (100 / rows) + Math.random() * 8,
    delay: Math.random() * 12,
    size: Math.random() * 100 + 2,
  }))

  return (
    <div 
      className="h-full flex flex-col items-center justify-center px-6 gap-6 bg-bg-light overflow-hidden"
    >
      <div 
        id="hero"
        className="h-full w-full relative bg-bg rounded-t-4xl"
      >
        <div className="absolute inset-0 overflow-hidden">
          {dots.map(dot => (
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

        <div className="absolute flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain" >
          <img src="/images/hero.png" alt="hero" className="w-full"/>
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
