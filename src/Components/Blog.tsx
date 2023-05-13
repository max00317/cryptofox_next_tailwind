import BlogImg from '@/assets/img/blog_img.png'
import Slider from 'react-slick'
import BlogItem from "./BlogItem"

const blogData = [
  {
    image: BlogImg,
    title: "WHAT WEB 3.0 MEANS FOR ENTERPRISES",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "VALUE CREATION IN THE METAVERSE",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "THE ROLE OF STABLECOINS IN A DECENTRALIZED ECOSYSTEM",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "DAOS: NEW BREED OF INTERNET-NATIVE ORGANIZATIONS",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "MAXIMIZING ESG IMPACT WITH BLOCKCHAIN",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "BRIDGING DEFI AND CEFI",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "WEB 3 GAMING: THE NEW FRONTIER?",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "DECRYPTING THE REGULATORY LANDSCAPE OF VIRTUAL ASSETS",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "CENTRAL BANK DIGITAL CURRENCIES, AND CROSS-BORDER PAYMENTS",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "WEB 3: THE FUTURE IS HERE AND NOW",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "NFT MARKET OVERVIEW: TRENDS & OPPORTUNITIES",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  },
  {
    image: BlogImg,
    title: "INTEROPERABILITY - CHALLENGES AND OPPORTUNITIES",
    content: "The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to &quot;Naviglio&quot; where you can enjoy the     main night life in Barcelona."
  }
]

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
      breakpoint: 1440,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

function Blog() {
  return (
    <div className='p-3 py-8 blog'>
      <h2 className='text-center text-[42px] sm:text-[52px] my-6'>Insights From Our Conference</h2>
      <div className='mx-3 md:mx-16 blog-slider'>
        <Slider {...settings}>
          {
            blogData.map((data, index) => {
              return (
                <BlogItem key={index} image={data.image} title={data.title} content={data.content} />
              )
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default Blog
