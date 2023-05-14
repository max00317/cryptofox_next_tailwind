import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react'
import Image, { StaticImageData } from 'next/image'

interface propsType {
  image: StaticImageData
  name: string
}

function Speakers(props: propsType) {
  const { image, name } = props
  return (
    <Card className='w-[150px] h-[250px] sm:w-60 sm:h-[300px]'>
      <CardHeader floated={false} className=' rounded-[50%] h-50'>
        <Image src={image} alt='sunny lu' />
      </CardHeader>
      <CardBody className='text-center'>
        <Typography variant='h4' color='blue-gray' className='mb-2 text-sm'>
          {name}
        </Typography>
      </CardBody>
    </Card>
  )
}

export default Speakers
