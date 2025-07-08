import Head from 'next/head'

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité – Surface Terrain</title>
        <meta name="description" content="Notre politique de confidentialité pour la collecte et le traitement des données sur Surface Terrain." />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-28 px-6 pb-16">
        <div className="max-w-3xl mx-auto space-y-8 leading-relaxed text-gray-200">
          <h1 className="text-3xl font-bold text-green-400">Politique de confidentialité</h1>
          <p className="text-sm text-gray-400">Dernière mise à jour : 8 juillet 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-green-300 mb-2">1. Introduction</h2>
            <p>Surface Terrain respecte votre vie privée et s'engage à protéger les données personnelles des utilisateurs de son site.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-300 mb-2">2. Données collectées</h2>
            <p>Nous n’enregistrons aucune donnée personnelle à votre insu. Le site ne contient pas de formulaire, ni de fonctionnalité de création de compte.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-300 mb-2">3. Cookies et mesure d’audience</h2>
            <p>Nous utilisons Google Analytics pour recueillir des données anonymes sur la fréquentation du site (pages vues, temps passé, origine du trafic, etc.).</p>
            <p>L'adresse IP est <strong>anonymisée</strong> avant d'être envoyée à Google. Aucune donnée ne permet de vous identifier personnellement.</p>
            <p>Vous pouvez accepter ou refuser les cookies via le bandeau de consentement affiché lors de votre première visite.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-300 mb-2">4. Hébergement</h2>
            <p>Le site est hébergé sur l’infrastructure Vercel, une plateforme sécurisée conforme aux standards du secteur.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-300 mb-2">5. Contact</h2>
            <p>Pour toute question ou demande relative à la vie privée, vous pouvez nous contacter à l’adresse suivante :</p>
            <p>
              <a href="mailto:contact@surface-terrain.fr" className="text-green-400 underline hover:text-green-300">
                contact@surface-terrain.fr
              </a>
            </p>
          </section>
        </div>
      </div>
    </>
  )
}
