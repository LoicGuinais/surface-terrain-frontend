// pages/index.js
import Head from 'next/head'
import { useEffect } from 'react'


export default function Home() {
  return (
    <>
      <Head>
        <title>Surface-Terrain.fr — Trouver la surface d’un terrain</title>
        <meta name="description" content="Trouvez rapidement la surface d’un terrain ou d’une parcelle cadastrale par commune. Données publiques, gratuites et fiables." />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Trouvez la surface d’un terrain par commune
        </h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Surface-Terrain.fr vous permet de retrouver rapidement la surface d’une parcelle cadastrale à partir de son lieu. Service gratuit, basé sur les données du cadastre.
        </p>
        <form className="w-full max-w-sm">
          <input
            type="email"
            placeholder="Entrez votre e-mail"
            className="w-full px-4 py-3 rounded-xl text-black mb-4"
          />
          <button type="submit" className="bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Être prévenu du lancement
          </button>
        </form>
      </main>
    </>
  )
}
