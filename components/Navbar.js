import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/ressources', label: 'Ressources' },
    { href: '/chat', label: 'IA' },
    { href: '/login', label: 'Connexion' },
  ]

  return (
<header className="w-full bg-black/60 backdrop-blur backdrop-saturate-150 text-white fixed top-0 left-0 z-50 border-b border-gray-800">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo and title */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.png" alt="Logo" className="h-6 w-6 object-contain" />
          Empreinte Plus
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium">


          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-green-400 ${
                router.pathname === href ? 'text-green-400' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger button (only visible on small screens) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-white focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black px-4 pb-4 border-t border-gray-800">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-green-400"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
