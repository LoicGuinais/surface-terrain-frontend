// components/Footer.js
export default function Footer() {
  return (
  <footer className="pt-10 text-center text-sm text-gray-400 space-y-2 bg-black border-t border-gray-800">


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
        © 2025 Empreinte Plus · Contact :{' '}
        <a href="mailto:contact@empreinteplus.com" className="underline hover:text-green-400">
          contact@empreinteplus.com
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/company/empreinteplus/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-blue-400 transition"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg"
            alt="LinkedIn"
            className="w-4 h-4 invert"
          />
          Suivez-nous sur LinkedIn
        </a>
      </p>
    </footer>
  )
}
