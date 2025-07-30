// pages/contact.js
import Head from 'next/head'

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact – Surface-Terrain.fr",
    "description": "Page de contact de Surface-Terrain.fr. Envoyez-nous vos questions, suggestions ou demandes de partenariat.",
    "url": "https://surface-terrain.fr/contact"
  }

  return (
    <>
      <Head>
        <title>Contact – Surface-Terrain.fr</title>
        <meta
          name="description"
          content="Contactez l’équipe de Surface-Terrain.fr pour toute question, suggestion ou demande d'information. Réponse rapide assurée."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="flex flex-col items-center justify-start px-4 py-16 text-left max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contactez-nous</h1>

        <p className="mb-6">
          Une question, une suggestion ou un bug à signaler ? N’hésitez pas à nous écrire. Nous vous répondrons dans les plus brefs délais.
        </p>

        <ul className="mb-8 space-y-4">
          <li>
            <strong>Email :</strong>{' '}
            <a
              href="mailto:contact@surface-terrain.fr"
              className="text-link hover:text-link-hover underline"
            >
              surface-terrain@outlook.com
            </a>
          </li>
          <li>
            <strong>GitHub :</strong>{' '}
            <a
              href="https://github.com/LoicGuinais"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link hover:text-link-hover underline"
            >
              github.com/surface-terrain
            </a>
          </li>
        </ul>

        <p className="text-lg font-medium">
          Merci pour votre intérêt pour Surface-Terrain.fr !
        </p>
      </div>
    </>
  )
}
