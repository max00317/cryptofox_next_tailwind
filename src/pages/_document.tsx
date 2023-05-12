import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          href='https://fonts.google.com/specimen/Press+Start+2P?category=Display,Monospace&preview.text=Cryptogoat&preview.text_type=custom'
          rel='stylesheet'
        />
        <link
          href='https://fonts.google.com/specimen/Rubik?preview.text=Cryptogoat&preview.text_type=custom'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
