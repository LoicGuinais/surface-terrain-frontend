// components/Layout.js
import Head from 'next/head'
import Footer from './Footer'
import CookieBanner from './CookieBanner'

export default function Layout({ children, showFooter = true, showCookies = true }) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Surface-Terrain",
    "url": "https://surface-terrain.fr",
    "logo": "https://surface-terrain.fr/logo.png"
  }

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
      </Head>

      <main className="pt-24 scroll-pt-32 min-h-screen bg-surface-base text-text-primary bg-gradient-to-br from-surface-soft via-surface-soft to-surface-base">
        {children}
      </main>

      {showFooter && <Footer />}
      {showCookies && <CookieBanner />}
    </>
  )
}
