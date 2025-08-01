import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ onLogoClick }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  const links = [
    { href: '/', label: 'Accueil' },
    { href: '/fonctionnalites', label: 'Fonctionnalités' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="w-full bg-surface-base/60 backdrop-blur backdrop-saturate-150 text-text-primary fixed top-0 left-0 z-50 border-b border-surface-border">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        {/* Logo and title with reset handler */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold"
          onClick={(e) => {
            e.preventDefault()
            onLogoClick?.()
            router.push('/')
          }}
        >
          <img src="/logo.png" alt="Logo" className="h-6 w-6 object-contain" />
          Surface-Terrain.fr
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-brand ${
                router.asPath === href ? 'text-brand' : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-text-primary focus:outline-none"
          aria-label="Ouvrir le menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-surface-base px-4 pb-4 border-t border-surface-border">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-brand"
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
