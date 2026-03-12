import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lada Sritongbai — Illustrator</title>
        <meta name="description" content="Portfolio of Lada Sritongbai, an artist and illustrator specialising in narrative illustration and character design." />
        <meta property="og:title" content="Lada Sritongbai — Illustrator" />
        <meta property="og:description" content="Portfolio of Lada Sritongbai, an artist and illustrator specialising in narrative illustration and character design." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero.png" />
      </Helmet>
      <div className="bg-bg-light px-6">
        <div className="bg-bg rounded-4xl">
          <Hero />
          <About />
          <Contact />
        </div>
      </div>
    </>
  )
}
