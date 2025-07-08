// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        {/* ✅ Add favicon here */}
        <link rel="icon" href="/favicon.ico" />
        {/* Optional: support for other formats */}
        {/* <link rel="icon" type="image/png" href="/favicon.png" /> */}
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
      </Head>
      <body className="bg-black text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
