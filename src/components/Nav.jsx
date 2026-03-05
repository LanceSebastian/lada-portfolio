import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

const social = [
  { to: 'https://www.instagram.com/sritongbaiarts/', icon: 'fa-brands fa-instagram'},
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-bg-light border-stone-200">
      <nav className=" max-w-screen mx-auto px-6 py-8 grid grid-cols-3 items-center justify-between">
        <ul className="flex gap-8">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-md tracking-wide transition-colors duration-200 ${
                  pathname === to
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/" className="font-display text-text font-semibold tracking-wide text-4xl text-center">
          Lada Sritongbai
        </Link>
        <ul className="flex gap-8 justify-end">
          {social.map(({ to, icon }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-3xl tracking-wide transition-colors duration-200 ${
                  pathname === to
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-400 hover:text-stone-900'
                }`}
              >
                <i className={icon}></i>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
