import { useState } from 'react';
import gallery from "../data/gallery.js"

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
    <div className="max-w-screen mx-auto py-20 px-[10vw]">
      <div className="mb-12">
        <p className="text-text text-sm tracking-widest uppercase mb-4">Work</p>
        <h1 className="text-4xl font-light text-text">Gallery</h1>
      </div>

      <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        {gallery.map((piece) => (
          <div key={piece.id}>
            <div className="bg-bg w-full overflow-hidden cursor-pointer group aspect-square" onClick={() => setSelected(piece)}>
              <div className="w-full h-full flex items-center justify-center text-text-muted text-sm group-hover:bg-bg-dark transition-colors duration-200">
                <img src={piece.link} alt={piece.title} className="w-full h-full object-contain"></img>
              </div>
            </div>
            <p className="text-text text-sm mt-2 text-center">{piece.title}</p>
          </div>
        ))}
      </div>
      {selected && (
        <div className="fixed inset-0 bg-bg-dark/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-bg-light p-6 rounded-lg max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selected.link} alt={selected.title} className=""></img>
            <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>
            <p className="text-text mb-4">{selected.description}</p>
            <button className="px-4 py-2 bg-primary text-white rounded hover:bg-bg-dark transition-colors duration-200 cursor-pointer" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
