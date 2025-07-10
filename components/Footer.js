export default function Footer() {
  return (
    <footer className="pt-10 pb-6 text-center text-sm text-gray-400 space-y-2 bg-black border-t border-gray-800">
      <p>
        <button
          onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
          className="underline hover:text-green-400"
        >
          Gérer mes cookies
        </button>{' '}
        ·
        <a href="/politique-confidentialite" className="underline hover:text-green-400 ml-1">
          Politique de confidentialité
        </a>{' '}
        ·
        <a href="/conditions-utilisation" className="underline hover:text-green-400 ml-1">
          Conditions d'utilisation
        </a>
      </p>
      <p>
        © 2025 Surface Terrain · Contact :{' '}
        <a href="mailto:contact@surface-terrain.fr" className="underline hover:text-green-400">
          contact@surface-terrain.fr
        </a>
      </p>
      <p>
        <a
          href="https://github.com/LoicGuinais/surface-terrain-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-gray-100 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
            alt="GitHub"
            className="w-4 h-4 invert"
          />
          Code source sur GitHub
        </a>
      </p>
    </footer>
  )
}
