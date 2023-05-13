import Image from 'next/image'
import EventImg from '@/assets/img/CED-images-1.png'
import { Button } from '@material-tailwind/react'

function Event() {
  return (
    <div className='p-3 sm:p-[80px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div className='flex justify-center'>
            <Image src={EventImg} alt='event image'></Image>
          </div>
          <div >
            <h3 className='text-[42px] sm:text-[52px] text-center'>About Event</h3>
            <p className='my-5  text-justify'>
              CryptoFOX is the blockchain conference network bringing together
              the key players of crypto industry and experts to redefine the
              future of finance. The edition of the CryptoFOX will take place
              during on July 10, 2023 in Dubai, with the world’s top crypto
              companies and blockchain entrepreneurs. Today, UAE, specifically
              Dubai is gearing up to become a global crypto hub. Thus, CryptoFOX
              will be the gathering in the region on behalf of the world of
              blockchain and cryptocurrency, with a wide range of topics focused
              on the financial technologies of the future, extensive networking
              opportunities and participation from more than 40 countries.
            </p>
            <ul>
              <li>
                - Meeting and engaging with 10000+ Visitors in-person and
                face-to-face.
              </li>
              <li>
                - Help the investors how to invest in this exciting market.
              </li>
              <li>- Highlight your brand and developments.</li>
              <li>
                - Get a chance to network with professionals from the Crypto
                industry.
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Event
