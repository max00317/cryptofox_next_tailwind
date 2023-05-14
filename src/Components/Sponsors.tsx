import Link from 'next/link'
import Image from 'next/image'
import image1 from '@/assets/img/sponsors/Woodstock_Fund.png'
import image2 from '@/assets/img/sponsors/Tykhe_Block_Ventures.png'
import image3 from '@/assets/img/sponsors/Momentum6.png'
import image4 from '@/assets/img/sponsors/18_Ventures.png'
import image5 from '@/assets/img/sponsors/888vc.png'
import image6 from '@/assets/img/sponsors/Annex-Investments.png'
import image7 from '@/assets/img/sponsors/C3.png'
import image8 from '@/assets/img/sponsors/DSA-Investments.png'

function Sponsors() {
  return (
    <div className='my-6 px-4 py-12 sm:px-[80px] sponsors'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
        <div className='col-span-1'>
          <h2 className='text-[28px] sm:text-[36px] pt-4  text-center'>
            Our Sponsors
          </h2>
          <p className='my-5 text-justify'>
            With 50+ startup investments and more than $100Mn syndicated, we are
            building the largest Cross-border community. Check out our startups
            with a combined valuation of $1Bn below
          </p>
        </div>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-8 lg:grid-cols-4'>
            <Link href='https://woodstockfund.com' target='_blank'>
              <div className='client'>
                <Image src={image1} alt='woodstockfund'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://tykheblock.ventures' target='_blank'>
              <div className='client'>
                <Image src={image2} alt='Tykhe Block Ventures'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>

            <Link href='https://momentum6.com' target='_blank'>
              <div className='client'>
                <Image src={image3} alt='Momentum6'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://18ventures.co.com' target='_blank'>
              <div className='client'>
                <Image src={image4} alt='18_Ventures'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://888vc.com' target='_blank'>
              <div className='client'>
                <Image src={image5} alt='888vc'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://annexinvestments.com' target='_blank'>
              <div className='client'>
                <Image src={image6} alt='Annex Investments'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://wegrowwithc3.com' target='_blank'>
              <div className='client'>
                <Image src={image7} alt='C3'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
            <Link href='https://dsainvestments.com' target='_blank'>
              <div className='client'>
                <Image src={image8} alt='DSA Investments'></Image>
                <div className='bg-client'></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
