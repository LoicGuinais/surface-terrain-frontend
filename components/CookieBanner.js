// components/CookieBanner.js
import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
    else if (consent === 'accepted') loadAnalytics()

    const handleOpen = () => setVisible(true)
    window.addEventListener('open-cookie-banner', handleOpen)

    return () => window.removeEventListener('open-cookie-banner', handleOpen)
  }, [])

  const loadAnalytics = () => {
    if (window.gtag) return
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=G-REBGWCM1G6`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-REBGWCM1G6', { anonymize_ip: true });
    `
    document.head.appendChild(script2)
  }

  const accept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    loadAnalytics()
    setVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie_consent', 'rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white text-sm px-4 py-3 flex flex-col sm:flex-row items-center justify-between z-50 shadow-lg">
      <p className="mb-2 sm:mb-0">
        🍪 Ce site utilise des cookies à des fins de mesure d’audience (Google Analytics).
        <a
          href="/politique-confidentialite"
          target="_blank"
          className="underline ml-1 text-green-400 hover:text-green-300"
        >
          Politique de confidentialité
        </a>
      </p>
      <div className="flex space-x-2">
        <button onClick={accept} className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded transition">Ok</button>
        <button onClick={reject} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1 rounded transition">Refuser</button>
      </div>
    </div>
  )
}
