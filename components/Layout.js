// components/Layout.js
import Footer from './Footer'
import CookieBanner from './CookieBanner'

export default function Layout({ children, showFooter = true, showCookies = true }) {
  return (
    <>
      <main className="min-h-screen bg-black text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {children}
      </main>
      {showFooter && <Footer />}
      {showCookies && <CookieBanner />}
    </>
  )
}

