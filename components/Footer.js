export default function Footer() {
  return (
    <footer className="pt-10 pb-6 text-center text-sm text-text-secondary space-y-2 bg-surface-soft border-t border-surface-border">
      <p>
        <button
          onClick={() => window.dispatchEvent(new Event('open-cookie-banner'))}
          className="underline hover:text-brand"
        >
          Gérer mes cookies
        </button>{' '}
        ·
        <a href="/politique-confidentialite" className="underline hover:text-brand ml-1">
          Politique de confidentialité
        </a>{' '}
        ·
        <a href="/conditions-utilisation" className="underline hover:text-brand ml-1">
          Conditions d'utilisation
        </a>
      </p>
      <p>
        © 2025 Surface Terrain · Contact :{' '}
        <a href="mailto:contact@surface-terrain.fr" className="underline hover:text-brand">
          surface-terrain@outlook.com
        </a>
      </p>
      <p>
        <a
          href="https://github.com/LoicGuinais/surface-terrain-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-text-primary transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg"
            alt="GitHub"
            className="w-4 h-4 text-text-primary"
          />

          Code source sur GitHub
        </a>
      </p>
    </footer>
  )
}
