import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Layout from '@/components/Layout'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Layout showFooter={!pageProps.hideFooter} showCookies={!pageProps.hideCookies}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
