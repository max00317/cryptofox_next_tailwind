import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import Image from 'next/image'
import BlogImg from '@/assets/img/blog_img.png'

function Blog() {
  return (
    <div className='p-6'>
      <h1 className='text-center text-[64px] my-6'>Insights From Our Conference</h1>
      <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-3'>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
        <div className='flex justify-center'>
          <Card className='mt-6 w-96'>
            <CardHeader color='blue-gray' className='relative h-56'>
              <Image src={BlogImg} alt='blog image'></Image>
            </CardHeader>
            <CardBody>
              <Typography variant='h5' color='blue-gray' className='mb-2'>
                UI/UX Review Check
              </Typography>
              <Typography>
                The place is close to Barceloneta Beach and bus stop just 2 min
                by walk and near to &quot;Naviglio&quot; where you can enjoy the
                main night life in Barcelona.
              </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button>Read More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Blog
