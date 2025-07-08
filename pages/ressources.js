// pages/ressources.js
import Head from 'next/head'

export default function Ressources() {
  return (
    <>
      <Head>
        <title>Ressources – Empreinte Plus</title>
        <meta name="description" content="Guides pratiques, articles et exemples d'analyse carbone automatisée via la comptabilité." />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-28 px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-8">Ressources</h1>

          <article className="mb-12 border-b border-gray-700 pb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Comment automatiser votre bilan carbone à partir de votre comptabilité
            </h2>
            <p className="text-gray-400 mb-4">23 juin 2025 · Empreinte Plus</p>
            <p className="text-gray-200 mb-4">
              Découvrez comment transformer vos journaux comptables en analyse carbone traçable et conforme, sans expertise technique.
            </p>
            <a
              href="/article-bilan-carbone-comptabilite"
              className="text-green-400 hover:underline font-semibold"
            >
              Lire l’article →
            </a>
          </article>
        </div>
      </div>
    </>
  )
}
