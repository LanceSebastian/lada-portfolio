import { useState } from 'react';
const pieces = [
  { id: 1,  title: 'Solitude',        description: 'Digital illustration, 2024' },
  { id: 2,  title: 'Morning Drift',   description: 'Procreate, 2024' },
  { id: 3,  title: 'Root & Branch',   description: 'Digital illustration, 2024' },
  { id: 4,  title: 'Soft Hours',      description: 'Procreate, 2023' },
  { id: 5,  title: 'The Waiting',     description: 'Digital illustration, 2023' },
  { id: 6,  title: 'Bloom',           description: 'Procreate, 2023' },
  { id: 7,  title: 'Ember',           description: 'Digital illustration, 2023' },
  { id: 8,  title: 'Still Life No.1', description: 'Procreate, 2023' },
  { id: 9,  title: 'Overgrown',       description: 'Digital illustration, 2022' },
  { id: 10, title: 'Tide',            description: 'Procreate, 2022' },
  { id: 11, title: 'Quiet Room',      description: 'Digital illustration, 2022' },
  { id: 12, title: 'Dusk Study',      description: 'Procreate, 2022' },
  { id: 13, title: 'Untitled No.3',   description: 'Digital illustration, 2022' },
  { id: 14, title: 'Passage',         description: 'Procreate, 2021' },
  { id: 15, title: 'Fragments',       description: 'Digital illustration, 2021' },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div className="max-w-screen mx-auto px-6 py-20 px-[10vw]">
      <div className="mb-12">
        <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">Work</p>
        <h1 className="text-4xl font-light text-stone-900">Gallery</h1>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        {pieces.map((piece) => (
          <div key={piece.id}>
            <div className="bg-stone-100 w-full overflow-hidden cursor-pointer group aspect-square" onClick={() => setSelected(piece)}>
              <div className="w-full h-full flex items-center justify-center text-stone-300 text-sm group-hover:bg-stone-200 transition-colors duration-200">
                {piece.title}
              </div>
            </div>
            <p className="text-stone-800 text-sm mt-2">{piece.title}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-white p-6 rounded-lg max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>
            <p className="text-stone-700 mb-4">{selected.description}</p>
            <button className="px-4 py-2 bg-stone-800 text-white rounded hover:bg-stone-700 transition-colors duration-200 cursor-pointer" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
