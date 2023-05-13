import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react'
import Image, { StaticImageData } from 'next/image'

interface propsType {
  image: StaticImageData
  title: string
  content: string
}

function BlogItem(props: propsType) {
  const { image, title, content } = props
  return (
    <div className='slider_item'>
      <Card className='mt-6 w-[310px] mx-3 h-[450px]'>
        <CardHeader color='blue-gray' className='relative h-56'>
          <div className='w-[100%] height-[150px]'>
            <Image
              src={image}
              layout='fill'
              objectFit='cover'
              alt='blog image'
            ></Image>
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant='h5' color='blue-gray' className='mb-2'>
            {title.length>40?title.slice(0, 40) + '...': title}
          </Typography>
          <Typography>
            {content.slice(0, 50)}
          </Typography>
        </CardBody>
        <CardFooter className='pt-0'>
          <Button color='blue-gray'>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BlogItem
