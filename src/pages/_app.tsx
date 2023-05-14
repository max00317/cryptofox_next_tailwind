import '@/styles/globals.css'
import '@/styles/screen.scss'
import '@/styles/blog.scss'
import '@/styles/sponsors.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@material-tailwind/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}
