import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <div className="bg-bg-light px-6">
      <div className="bg-bg rounded-4xl">
        <Hero />
        <About />
        <Contact />
    </div>
    </div>
  )
}
