import Head from 'next/head'
import Navbar from '../../components/Navbar'

export default function Article() {
  return (
    <>
      <Head>
        <title>Comment connaître la surface d’une parcelle cadastrale ? – Blog Surface-Terrain.fr</title>
        <meta
          name="description"
          content="Découvrez comment retrouver la surface cadastrale d’une parcelle grâce aux données ouvertes du cadastre Etalab et à Surface-Terrain.fr."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-16 max-w-2xl mx-auto text-left">
        <h1 className="text-3xl font-bold mb-6">Comment connaître la surface d’une parcelle cadastrale ?</h1>

        <p className="mb-4">
          Vous avez trouvé une annonce immobilière qui indique une surface (ex: 425 m²) mais pas le numéro de parcelle ? Ou vous cherchez à vérifier une surface cadastrale ?
        </p>

        <p className="mb-4">
          Surface-Terrain.fr vous permet de <strong>retrouver une parcelle cadastrale à partir de sa surface estimée et d’un code postal</strong>, grâce aux données ouvertes du cadastre Etalab.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Pourquoi la surface cadastrale est-elle importante ?</h2>

        <p className="mb-4">
          La surface cadastrale sert de référence pour les ventes, les permis de construire, ou encore les calculs de taxes. Elle peut différer de la surface mesurée sur le terrain réel.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Comment utiliser Surface-Terrain.fr ?</h2>

        <ol className="list-decimal list-inside space-y-2 mb-8">
          <li>Renseignez un code postal</li>
          <li>Indiquez une surface minimum et maximum (ex: 400 à 450 m²)</li>
          <li>Visualisez les parcelles correspondantes sur la carte</li>
        </ol>

        <p className="text-lg font-medium">
          ➤ Essayez l’outil dès maintenant, c’est gratuit et sans inscription.
        </p>
      </main>
    </>
  )
}
