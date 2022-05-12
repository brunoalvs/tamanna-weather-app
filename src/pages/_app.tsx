// _app - Next.js app
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../components/_global'
import { Layout } from '../components/Layout'

import { LocationInfoProvider } from '../contexts/location-info'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationInfoProvider>
      <Head>
        <title>TamannaWeather App</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LocationInfoProvider>
  )
}

export default MyApp
