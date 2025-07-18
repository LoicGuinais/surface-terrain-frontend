// pages/fonctionalite.js
import Head from 'next/head'

export default function Fonctionnalite() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Fonctionnalités de Surface-Terrain.fr",
    "description": "Explorez les fonctionnalités de Surface-Terrain.fr, l’outil en ligne gratuit pour trouver une parcelle cadastrale par surface et commune.",
    "url": "https://surface-terrain.fr/fonctionalite"
  }

  return (
    <>
      <Head>
        <title>Fonctionnalités – Surface-Terrain.fr | Trouver une parcelle cadastrale par surface</title>
        <meta
          name="description"
          content="Découvrez les fonctionnalités de Surface-Terrain.fr : outil en ligne libre pour rechercher une parcelle cadastrale par surface et commune en France."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="flex flex-col items-center justify-start px-4 py-16 text-left max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Fonctionnalités de Surface-Terrain.fr
        </h1>

        <p className="mb-6">
          Surface-Terrain.fr est un outil en ligne gratuit qui permet de <strong>trouver une parcelle cadastrale par surface et commune</strong>. Il s’appuie sur les données ouvertes du{" "}
          <a
            href="https://cadastre.data.gouv.fr/datasets/cadastre-etalab"
            className="underline text-link hover:text-link-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            cadastre Etalab
          </a>
          , et propose une interface simple, rapide et sans publicité.
        </p>

        <ul className="list-disc list-inside space-y-3 mb-8">
          <li>Recherche de parcelles par <strong>surface estimée</strong> (en m²)</li>
          <li>Filtrage par <strong>code postal ou commune</strong></li>
          <li>Visualisation de la parcelle sur une <strong>carte interactive</strong></li>
          <li>Aucun compte requis, utilisation libre et immédiate</li>
          <li>Données fiables issues du <strong>cadastre officiel français</strong></li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 mt-10">À qui s’adresse l’outil ?</h2>
        <ul className="list-disc list-inside space-y-2 mb-8">
          <li>Aux particuliers cherchant une <strong>parcelle cadastrale à partir de sa surface</strong></li>
          <li>Aux acheteurs ou vendeurs souhaitant <strong>vérifier la surface d’un terrain</strong></li>
          <li>Aux agents immobiliers, notaires, urbanistes ou géomètres</li>
        </ul>

        <p className="text-lg font-medium mt-8">
          ➤ Essayez Surface-Terrain.fr dès maintenant : un outil rapide, fiable et gratuit.
        </p>
      </div>
    </>
  )
}
