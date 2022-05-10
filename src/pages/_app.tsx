// _app - Next.js app
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../components/_global'
import { Layout } from '../components/Templates/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TamannaWeather App</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');
          `}
        </style>
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
