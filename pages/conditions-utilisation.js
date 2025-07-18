// pages/conditions-utilisation.js
import Head from 'next/head'

export default function ConditionsUtilisation() {
  return (
    <>
      <Head>
        <title>Conditions d'utilisation – Surface Terrain</title>
        <meta name="description" content="Conditions d'utilisation du site Surface Terrain" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-16 text-text-primary">
        <h1 className="text-3xl font-bold mb-4">Conditions Générales d'Utilisation</h1>
        <p className="mb-6 text-text-secondary">Dernière mise à jour : 8 juillet 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">1. Objet</h2>
          <p>
            Les présentes conditions régissent l'utilisation du site <strong>Surface Terrain</strong> accessible à l'adresse{' '}
            <a href="https://surface-terrain.fr" className="text-link underline hover:text-link-hover">
              https://surface-terrain.fr
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">2. Acceptation</h2>
          <p>En accédant au site, l'utilisateur accepte sans réserve les présentes conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">3. Accès au site</h2>
          <p>
            Le site est accessible gratuitement 24h/24, 7j/7, sauf en cas de maintenance technique. Aucune garantie n'est donnée quant à la
            disponibilité ou l'exactitude des informations.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">4. Propriété intellectuelle</h2>
          <p>
            Tous les contenus (textes, images, logos, éléments graphiques, code source) présents sur ce site sont la propriété exclusive de
            l'éditeur sauf mention contraire. Toute reproduction non autorisée est interdite.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">5. Responsabilité</h2>
          <p>
            L’éditeur ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l’utilisation du site ou des
            informations diffusées.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">6. Données personnelles</h2>
          <p>
            Le site ne collecte pas de données personnelles à l’insu des utilisateurs. Voir notre{' '}
            <a href="/politique-confidentialite" className="text-link underline hover:text-link-hover">
              Politique de confidentialité
            </a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">7. Modification des conditions</h2>
          <p>
            Surface Terrain se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs sont invités à les
            consulter régulièrement.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">8. Droit applicable</h2>
          <p>
            Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux de Lyon.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
          <p>
            Pour toute question :{' '}
            <a href="mailto:contact@surface-terrain.fr" className="text-link underline hover:text-link-hover">
              contact@surface-terrain.fr
            </a>
          </p>
        </section>
      </main>
    </>
  )
}
