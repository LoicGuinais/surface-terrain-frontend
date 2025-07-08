import Head from 'next/head'
import Link from 'next/link'

export default function ArticleBilanCarbone() {
  return (
    <>
      <Head>
        <title>Automatiser son bilan carbone avec l'IA comptable | Empreinte Plus</title>
        <meta
          name="description"
          content="Bilan carbone simplifié grâce à l'automatisation des données comptables. Gagnez du temps et soyez conforme à la CSRD avec Empreinte Plus, l'IA carbone pour plateformes comptables et experts-comptables."
        />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-28 px-6 pb-16">
        <article className="max-w-3xl mx-auto space-y-8 leading-relaxed text-gray-200">
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">
              Automatiser son bilan carbone grâce à votre comptabilité : la méthode Empreinte Plus
            </h1>
            <p className="text-sm text-gray-400">Publié le 23 juin 2025 · Empreinte Plus</p>
          </header>

          <p>
            Avec la directive <strong>CSRD</strong> et l'accélération du <strong>reporting extra-financier</strong>, les entreprises — y compris les <strong>PME</strong> — doivent produire des <strong>bilans carbone fiables</strong>.
          </p>

          <p>
            Problème : un bilan manuel est souvent <strong>chronophage, coûteux et complexe</strong>. Et si votre <strong>journal comptable faisait 80&nbsp;% du travail automatiquement</strong> ? C'est exactement ce que permet Empreinte Plus.
          </p>

          <blockquote className="border-l-4 border-green-500 pl-4 text-green-300 italic">
            Votre comptabilité contient déjà les clés de votre empreinte carbone. Il est temps de l'exploiter intelligemment.
          </blockquote>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">
              Pourquoi la comptabilité est la meilleure base carbone
            </h2>
            <p>
              Chaque dépense traduit une activité à impact : transport, énergie, achats... En les croisant avec des facteurs d'émission fiables (<em>ex : Base Carbone ADEME</em>), on peut <strong>estimer automatiquement l'impact carbone</strong> poste par poste.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">
              Comment fonctionne l'IA carbone d'Empreinte Plus
            </h2>
            <p><strong>Empreinte Plus</strong> utilise l'intelligence artificielle pour :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analyser automatiquement vos journaux comptables</li>
              <li>Classifier chaque ligne selon son type d'activité</li>
              <li>Assigner un facteur d'émission approprié (Scope 1, 2 ou 3)</li>
              <li>Produire un rapport traçable, conforme et documenté</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">Exemple concret</h2>
            <p>
              <strong>Ligne comptable :</strong> "Commande de 3 tonnes d’acier – Fournisseur X – 9 000 €"<br />
              <strong>Classification IA :</strong> "Achat de matière première – acier"<br />
              <strong>Facteur d’émission :</strong> 2,21 kgCO₂e / kg<br />
              <strong>Résultat :</strong> 6 630 kgCO₂e (avec incertitude intégrée)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">Pour qui ?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Plateformes comptables</strong> : ajoutez une brique ESG à votre offre</li>
              <li><strong>Experts-comptables</strong> : proposez un nouveau service automatisé</li>
              <li><strong>Collectivités</strong> : répondez plus facilement aux marchés publics</li>
              <li><strong>Groupes</strong> : industrialisez votre reporting Scope 3</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">Intégration transparente dans votre écosystème</h2>
            <p>Empreinte Plus peut être <strong>intégré via API</strong> dans vos logiciels de comptabilité ou ERP existants. Cela permet :</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>D'automatiser l'analyse carbone en arrière-plan</li>
              <li>De proposer un service à forte valeur à vos utilisateurs sans changer leur interface</li>
              <li>De suivre l'évolution des émissions dans le temps, directement depuis vos outils</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">Empreinte Plus en pratique</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Importez un fichier FEC ou Excel</li>
              <li>Lancez l'analyse carbone automatique</li>
              <li>Obtenez un rapport clair, structuré et prêt pour audit</li>
            </ul>
            <p><strong>Aucune compétence carbone requise</strong>. Vos données comptables suffisent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-green-300">Conclusion</h2>
            <p>
              Le bilan carbone ne doit plus être un frein. Grâce à <strong>l'automatisation comptable</strong>, Empreinte Plus simplifie votre démarche et vous aide à piloter votre impact environnemental — efficacement.
            </p>
          </section>

          <div className="mt-10 text-center">
            <Link
  href="/chat"
  className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow text-lg font-semibold transition"
>
  Tester Empreinte Plus gratuitement
</Link>

          </div>
        </article>
      </main>
    </>
  )
}
