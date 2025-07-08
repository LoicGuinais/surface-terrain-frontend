import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Connexion – Empreinte Plus</title>
        <meta name="description" content="Connexion à l'espace Empreinte Plus pour accéder à vos bilans carbone." />
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-28 px-6 pb-16">
        <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-700">
          <h1 className="text-2xl font-bold mb-6 text-center">Connexion</h1>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Adresse e-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 text-sm font-medium">Mot de passe</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Se connecter
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Vous n'avez pas de compte ?{' '}
              <a href="/creer-compte" className="text-green-400 hover:underline">
                Créer un compte
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
