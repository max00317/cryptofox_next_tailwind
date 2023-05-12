import React from 'react'
import Link from "next/link"
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react'
import Image from 'next/image'
import Logo from '@/assets/img/logo.png'

export default function Header() {
  const [openNav, setOpenNav] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    )
  }, [])

  const navList = (
    <ul className='mb-4 mt-2 text-white flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link href='#' className='flex items-center'>
          Home
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link href='#' className='flex items-center'>
          About Us
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link href='#' className='flex items-center'>
          Speakers
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link href='#' className='flex items-center'>
          Sponsors
        </Link>
      </Typography>
      <Typography
        as='li'
        variant='small'
        className='p-1 font-normal'
      >
        <Link href='#' className='flex items-center'>
          Partners
        </Link>
      </Typography>
    </ul>
  )

  return (
    <>
      <Navbar className='fixed top-0 backdrop-blur-0 backdrop-filter-none bg-transparent border-none inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4'>
        <div className='flex items-center justify-between text-white'>
          <Typography
            as='a'
            href='#'
            className='mr-4 cursor-pointer flex items-center py-1.5 font-bold'
          >
            <Image
              src={Logo}
              width={50}
              height={50}
              className='mr-2'
              alt='logo'
            />
            CRYPTOFOX
          </Typography>
          <div className='flex items-center gap-4'>
            <div className='mr-4 hidden lg:block justify-center'>{navList}</div>
            <div className="flex hidden lg:block w-max gap-4">
              <Button color="white" className='mr-2' variant='filled' aria-label='Become Sponsor'>Become Sponsor</Button>
              <Button variant='outlined' aria-label='Register Now'>Register Now</Button>
            </div>
            <IconButton
              variant='text'
              className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  className='h-6 w-6'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6 18L18 6M6 6l12 12'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse className='bg-gray-500 rounded-b-sm' open={openNav}>{navList}</Collapse>
      </Navbar>
    </>
  )
}
