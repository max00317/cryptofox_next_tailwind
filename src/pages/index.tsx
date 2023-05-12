import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/Components/header'
import Banner from '@/Components/Banner'
import Event from '@/Components/Event'
import Blog from "@/Components/Blog"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>CryptoFox</title>
        <meta
          name='description'
          content='CryptoFOX is the blockchain conference network bringing together the key players of crypto industry and experts to redefine the future of finance. The edition of the CryptoFOX will take place during on July 10, 2023 in Dubai, with the world’s top crypto companies and blockchain entrepreneurs. Today, UAE, specifically Dubai is gearing up to become a global crypto hub. Thus, CryptoFOX will be the gathering in the region on behalf of the world of blockchain and cryptocurrency, with a wide range of topics focused on the financial technologies of the future, extensive networking opportunities and participation from more than 40 countries.'
          key='desc'
        />
      </Head>
      <Header />
      <Banner />
      <Event />
      <Blog />
    </>
  )
}
