export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Photo placeholder */}
        <div className=" aspect-3/4 w-full flex items-center justify-center text-sm">
          <img src="./assets/images/author.jpg" alt="placeholder" className="w-full bg-cover" />
        </div>

        {/* Bio */}
        <div>
          <p className="text-stone-400 text-sm tracking-widest uppercase mb-4">About</p>
          <h1 className="text-4xl font-light text-stone-900 mb-8">Lada Sritongbai</h1>
          <div className="space-y-4 text-stone-600 leading-relaxed">
            <p>
              Hi, I'm Lada. An artist and illustrator with a passion for creating work that
              resonates on a personal level. My practice spans editorial illustration, character
              design, and personal projects.
            </p>
            <p>
              I'm drawn to the quiet moments, the in-between spaces, and the stories that
              don't always get told. Through illustration, I try to give those moments a place
              to live.
            </p>
            <p>
              Currently available for freelance projects and collaborations.
            </p>
          </div>

          <div className="mt-12 space-y-3">
            <h2 className="text-xs tracking-widest uppercase text-stone-400">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['Narrative Illustration', 'Character Design', 'Digital Art', 'Procreate', 'Adobe Illustrator'].map(skill => (
                <span key={skill} className="text-sm text-stone-600 border border-stone-200 px-3 py-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
