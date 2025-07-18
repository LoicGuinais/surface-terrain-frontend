// pages/index.js
import Head from 'next/head'
import { useState } from 'react'
import { fetchParcelles } from '../lib/api'
import dynamic from 'next/dynamic'

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Surface-Terrain.fr",
    "url": "https://surface-terrain.fr",
    "description": "Outil en ligne gratuit pour rechercher une parcelle cadastrale par surface et commune, basé sur les données ouvertes du cadastre Etalab.",
    "applicationCategory": "GeospatialApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "creator": {
      "@type": "Organization",
      "name": "Surface-Terrain"
    }
  }

  const [codePostal, setCodePostal] = useState('')
  const [minSize, setMinSize] = useState('')
  const [maxSize, setMaxSize] = useState('')
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setResults([])

    const cleanedPostalCode = codePostal.trim().padStart(5, '0')
    const minVal = parseInt(minSize) || 0
    const maxVal = parseInt(maxSize) || 1000

    try {
      const data = await fetchParcelles(cleanedPostalCode, minVal, maxVal, 10)
      setResults(data.features || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const MapParcels = dynamic(() => import('../components/MapParcels'), {
    ssr: false,
  })

  return (
    <>
      <Head>
        <title>Surface-Terrain.fr — Trouver une parcelle cadastrale par surface et commune</title>
        <meta
          name="description"
          content="Recherchez gratuitement une parcelle cadastrale en France en renseignant sa surface et sa commune. Outil libre et sans inscription, basé sur les données du cadastre Etalab."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="flex flex-col items-center justify-center px-4 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Trouvez la surface d’un terrain par commune
        </h1>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Code postal (ex: 75001)"
            value={codePostal}
            onChange={(e) => setCodePostal(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-black text-right mb-4"
            required
          />
          <input
            type="number"
            placeholder="Surface min (m²)"
            value={minSize}
            onChange={(e) => setMinSize(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-black text-right mb-4"
          />
          <input
            type="number"
            placeholder="Surface max (m²)"
            value={maxSize}
            onChange={(e) => setMaxSize(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-black text-right mb-4"
          />
          <button
            type="submit"
            className="bg-text-primary text-surface-base font-semibold px-6 py-3 rounded-xl hover:bg-text-secondary transition"
          >
            Rechercher les parcelles
          </button>
        </form>

        {loading && (
          <div className="mt-8 flex items-center gap-2 text-text-primary text-lg">
            <div className="h-5 w-5 border-2 border-text-primary border-t-transparent rounded-full animate-spin"></div>
            Chargement des données cadastrales...
          </div>
        )}

        <div className="mt-10 w-full max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">Carte des parcelles</h2>
          <MapParcels parcels={results} />
        </div>
      </div>
    </>
  )
}
