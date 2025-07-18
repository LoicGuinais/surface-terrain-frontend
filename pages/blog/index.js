// pages/blog/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog – Surface-Terrain.fr</title>
        <meta
          name="description"
          content="Articles, guides et actualités sur la recherche de parcelles cadastrales, le cadastre Etalab, et les données foncières en France."
        />
      </Head>

      <div className="flex flex-col items-center px-4 py-16 max-w-3xl mx-auto text-left">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

        <p className="mb-8 text-lg text-center">
          Guides, astuces et actualités sur le cadastre, les données foncières et les outils de recherche de parcelles en France.
        </p>

        <div className="space-y-6 w-full">
          <article className="border-b border-surface-border pb-4">
            <Link href="/blog/comment-connaitre-surface-parcelle">
              <h2 className="text-2xl font-semibold hover:underline">
                Comment connaître la surface d’une parcelle cadastrale ?
              </h2>
            </Link>
            <p className="text-muted mt-2">
              Vous avez une parcelle mais pas le numéro ? Voici comment la retrouver à partir de sa surface et commune...
            </p>
          </article>

          {/* Add more posts as needed */}
        </div>
      </div>
    </>
  )
}
