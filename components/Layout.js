// components/Layout.js
import Footer from './Footer'
import CookieBanner from './CookieBanner'

export default function Layout({ children, showFooter = true, showCookies = true }) {
  return (
    <>
      <main className="pt-24 scroll-pt-32 min-h-screen bg-surface-base text-text-primary bg-gradient-to-br from-surface-soft via-surface-soft to-surface-base">

        {children}
      </main>
      {showFooter && <Footer />}
      {showCookies && <CookieBanner />}
    </>
  )
}
