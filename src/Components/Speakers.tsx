import Slider from 'react-slick'
import SpearkerItem from './SpeakerItem'
import SpeakerImg1 from '@/assets/img/speakers/Sunny-Lu.png'
import SpeakerImg2 from '@/assets/img/speakers/Reece-Merrick.png'
import SpeakerImg3 from '@/assets/img/speakers/Alex-Zinder.png'
import SpeakerImg4 from '@/assets/img/speakers/Dina-Saman.png'
import SpeakerImg5 from '@/assets/img/speakers/Gracy-Chen.png'
import SpeakerImg6 from '@/assets/img/speakers/Helen-Hai.png'
import SpeakerImg7 from '@/assets/img/speakers/Jason-Allegrante.png'
import SpeakerImg8 from '@/assets/img/speakers/Jean-Charles-Gaudechon.png'
import SpeakerImg9 from '@/assets/img/speakers/Max-Kordek.png'
import SpeakerImg10 from '@/assets/img/speakers/Mohammed-Alblooshi.png'
import SpeakerImg11 from '@/assets/img/speakers/Nena-Dokuzov.png'
import SpeakerImg12 from '@/assets/img/speakers/Nicole-Purin.png'

const peopleData = [
    {
        image: SpeakerImg1,
        name: "Sunny Lu"
    },
    {
        image: SpeakerImg2,
        name: "Reece Merrick"
    },
    {
        image: SpeakerImg3,
        name: "Alex Zinder"
    },
    {
        image: SpeakerImg4,
        name: "Dina Saman"
    },
    {
        image: SpeakerImg5,
        name: "Gracy Chen"
    },
    {
        image: SpeakerImg6,
        name: "Helen Hai"
    },
    {
        image: SpeakerImg7,
        name: "Jason Allegrante"
    },
    {
        image: SpeakerImg8,
        name: "Jean Charles Gaudechon"
    },
    {
        image: SpeakerImg9,
        name: "Max Kordek"
    },
    {
        image: SpeakerImg10,
        name: "Mohammed Alblooshi"
    },
    {
        image: SpeakerImg11,
        name: "Nena Dokuzov"
    },
    {
        image: SpeakerImg12,
        name: "Nicole Purin"
    },

]

function Speakers() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 1700,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 985,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 580,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <div className='my-6 sm:p-6'>
      <h2 className='text-center text-[28px] sm:text-[52px] my-6'>
        Speakers
      </h2>
      <div className='mx-3 md:mx-16 speaker-slider'>
        <Slider {...settings}>
          {peopleData.map((data, index) => {
            return (
              <SpearkerItem
                key={index}
                image={data.image}
                name={data.name}
              />
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Speakers
