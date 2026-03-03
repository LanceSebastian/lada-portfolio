import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-stone-200">
      <nav className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link to="/" className="font-display text-text font-semibold tracking-wide text-2xl">
          Lada Sritongbai
        </Link>
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
      </nav>
    </header>
  )
}
