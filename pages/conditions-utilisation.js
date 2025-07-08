// pages/conditions-utilisation.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function ConditionsUtilisation() {
  return (
    <>
      <Head>
        <title>Conditions d'utilisation – Empreinte Plus</title>
        <meta name="description" content="Conditions d'utilisation du site Empreinte Plus" />
      </Head>
      <Navbar />

        <h1 className="text-3xl font-bold text-green-300 mb-4">Conditions Générales d'Utilisation</h1>
        <p className="mb-6 text-gray-400">Dernière mise à jour : 16 juin 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">1. Objet</h2>
          <p>Les présentes conditions régissent l'utilisation du site <strong>Empreinte Plus</strong> accessible à l'adresse <a href="https://empreinteplus.com" className="text-blue-400 underline">https://empreinteplus.com</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">2. Acceptation</h2>
          <p>En accédant au site, l'utilisateur accepte sans réserve les présentes conditions.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">3. Accès au site</h2>
          <p>Le site est accessible gratuitement 24h/24, 7j/7, sauf en cas de maintenance technique. Aucune garantie n'est donnée quant à la disponibilité ou l'exactitude des informations.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">4. Propriété intellectuelle</h2>
          <p>Tous les contenus (textes, images, logos, éléments graphiques, code source) présents sur ce site sont la propriété exclusive de l'éditeur sauf mention contraire. Toute reproduction non autorisée est interdite.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">5. Responsabilité</h2>
          <p>L’éditeur ne saurait être tenu responsable de tout dommage direct ou indirect résultant de l’utilisation du site ou des informations diffusées.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">6. Données personnelles</h2>
          <p>Le site ne collecte pas de données personnelles à l’insu des utilisateurs. Voir notre <a href="/pages/politique-confidentialite" className="text-blue-400 underline">Politique de confidentialité</a>.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">7. Modification des conditions</h2>
          <p>Empreinte Plus se réserve le droit de modifier les présentes conditions à tout moment. Les utilisateurs sont invités à les consulter régulièrement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-green-300 mb-2">8. Droit applicable</h2>
          <p>Les présentes conditions sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux de Lyon.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-green-300 mb-2">9. Contact</h2>
          <p>Pour toute question : <a href="mailto:contact@empreinteplus.com" className="text-blue-400 underline">contact@empreinteplus.com</a></p>
        </section>

    </>
  );
}
