import { useState } from 'react';
import { Helmet } from 'react-helmet-async'
import gallery from "../data/gallery.js"

function GalleryCard({ piece, onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div>
      <div
        className="bg-bg w-full overflow-hidden cursor-pointer group aspect-square"
        onClick={onClick}
      >
        <div className="w-full h-full flex items-center justify-center relative">
          {!loaded && (
            <div className="absolute inset-0 bg-bg-dark animate-pulse" />
          )}
          <img
            src={piece.link}
            alt={piece.alt}
            onLoad={() => setLoaded(true)}
            className={`w-full h-full object-contain group-hover:opacity-90 transition-opacity duration-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
      <p className="text-text text-sm mt-2 text-center">{piece.title}</p>
    </div>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <Helmet>
        <title>Gallery — Lada Sritongbai</title>
        <meta name="description" content="Illustrations by Lada Sritongbai — narrative illustration, character design, and personal work." />
        <meta property="og:title" content="Gallery — Lada Sritongbai" />
        <meta property="og:description" content="Illustrations by Lada Sritongbai — narrative illustration, character design, and personal work." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className='bg-bg-light px-6'>
        <div className="max-w-screen mx-auto py-20 px-[10vw] bg-bg rounded-4xl">
          <div className="mb-12">
            <p className="text-text text-sm tracking-widest uppercase mb-4">Work</p>
            <h1 className="text-4xl font-light text-text">Gallery</h1>
          </div>
          <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
            {gallery.map((piece) => (
              <GalleryCard key={piece.id} piece={piece} onClick={() => setSelected(piece)} />
            ))}
          </div>
          {selected && (
            <div className="fixed inset-0 bg-bg-dark/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
              <div className="bg-bg-light p-6 rounded-lg max-w-4xl w-auto" onClick={(e) => e.stopPropagation()}>
                <img src={selected.link} alt={selected.alt} className="max-h-[80vh] max-w-[80vw]"></img>
                <h2 className="text-2xl font-semibold mb-4">{selected.title}</h2>
                <p className="text-text mb-4">{selected.description}</p>
                <button className="px-4 py-2 bg-primary text-white rounded hover:bg-bg-dark transition-colors duration-200 cursor-pointer" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
