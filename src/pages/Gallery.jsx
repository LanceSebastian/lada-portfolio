import { useState } from 'react';
import gallery from "../data/gallery.js"


export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div className='bg-bg-light px-6'>
      <div className="max-w-screen mx-auto py-20 px-[10vw] bg-bg rounded-4xl">
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
            <div className="bg-bg-light p-6 rounded-lg max-w-4xl w-auto" onClick={(e) => e.stopPropagation()}>
              <img src={selected.link} alt={selected.title} className="max-h-[80vh] max-w-[80vw]"></img>
              <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>
              <p className="text-text mb-4">{selected.description}</p>
              <button className="px-4 py-2 bg-primary text-white rounded hover:bg-bg-dark transition-colors duration-200 cursor-pointer" onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
