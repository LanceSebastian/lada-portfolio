const pieces = [
  { id: 1, title: 'Piece 1', size: 'tall' },
  { id: 2, title: 'Piece 2', size: 'wide' },
  { id: 3, title: 'Piece 3', size: 'square' },
  { id: 4, title: 'Piece 4', size: 'tall' },
  { id: 5, title: 'Piece 5', size: 'square' },
  { id: 6, title: 'Piece 6', size: 'wide' },
]

const sizeClass = {
  tall: 'aspect-3/4',
  wide: 'aspect-4/3',
  square: 'aspect-square',
}

export default function Gallery() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">Work</p>
        <h1 className="text-4xl font-light text-stone-900">Gallery</h1>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {pieces.map(({ id, title, size }) => (
          <div key={id} className="break-inside-avoid group cursor-pointer">
            <div className={`${sizeClass[size]} bg-stone-100 w-full overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm group-hover:bg-stone-200 transition-colors duration-200">
                {title}
              </div>
            </div>
            <p className="text-stone-500 text-sm mt-2">{title}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
