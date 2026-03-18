import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact'}
]

const social = [
  { to: 'https://www.instagram.com/sritongbaiarts/', icon: 'fa-brands fa-instagram', label: 'Instagram'},
]

export default function Nav() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-stone-200">
      <nav className=" max-w-screen mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-3 items-center justify-between">
        <ul className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-md tracking-wide transition-all duration-200 hover:scale-100  ${
                  pathname === to
                    ? 'text-text font-bold'
                    : 'text-text-muted hover:text-text'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/" className="font-display text-text font-semibold tracking-wide text-2xl text-left md:text-center md:text-4xl">
          Lada Sritongbai
        </Link>

        <ul className="hidden md:flex gap-8 justify-end">
          {social.map(({ to, icon, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-3xl tracking-wide transition-colors duration-200 ${
                  pathname === to
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                <i className={icon} aria-label={label}></i>
              </Link>
            </li>
          ))}
        </ul>
        
        <button className="flex justify-end md:hidden" onClick={() => setOpen(!open)}>
          {!open && (<i className='fa-solid fa-bars text-3xl'></i>)}
          {open && (<i className='fa-solid fa-xmark text-3xl'></i>)}
        </button>

      {/* Mobile menu — full height, slides in from right */}

      {open && (
        <div className="fixed inset-0 top-30 bg-bg-light z-40 flex flex-col items-center justify-center gap-8 animate-[slideIn_0.3s_ease-out]">
          {links.map(({ to, label }) => (
            <Link key={to} to={to} onClick={() => setOpen(false)}
              className="text-3xl text-text-muted hover:text-text tracking-wide transition-colors duration-200">
              {label}
            </Link>
          ))}
          {social.map(({ to, icon }) => (
            <a key={to} href={to} target="_blank" rel="noopener noreferrer"
              className="text-3xl text-text-muted hover:text-text transition-colors duration-200">
              <i className={icon}></i>
            </a>
          ))}
        </div>
      )}
      </nav>
    </header>
  )
}
