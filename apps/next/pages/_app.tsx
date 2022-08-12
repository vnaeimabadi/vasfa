import { Provider } from 'app/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import 'raf/polyfill'

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Vasfa Ltd – Software Solution Company</title>
        {/* <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        /> */}
        <link rel="icon" href="/cropped-favicon-32x32.png" sizes="32x32"></link>
        <link
          rel="icon"
          href="/cropped-favicon-192x192.png"
          sizes="192x192"
        ></link>
        <link
          rel="apple-touch-icon-precomposed"
          href="/cropped-favicon-180x180.png"
        ></link>
        <meta
          name="msapplication-TileImage"
          content="/cropped-favicon-270x270.png"
        ></meta>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default MyApp
