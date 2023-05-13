import Countdown from 'react-countdown'

function Banner() {
  const Completionist = () => <span>You are good to go!</span>

  const renderer = (props: any) => {
    const { days, hours, minutes, seconds, completed } = props.formatted
    if (completed) {
      return <Completionist />
    } else {
      return (
        <div className='flex items-center justify-center'>
          <div className='p-[5px] w-[60px] sm:p-[20px] sm:w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold text-2xl sm:text-3xl'>{days}</span>
            <div><span className='text-[12px]'>Days</span></div>
          </div>
          <div className='mr-2 text-2xl sm:text-3xl'>
            <span>:</span>
          </div>
          <div className='p-[5px] w-[60px] sm:p-[20px] sm:w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold text-2xl sm:text-3xl'>{hours}</span>
            <div><span className='text-[12px]'>Hours</span></div>
          </div>
          <div className='mr-2 text-2xl sm:text-3xl'>
            <span>:</span>
          </div>
          <div className='p-[5px] w-[60px] sm:p-[20px] sm:w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold text-2xl sm:text-3xl'>{minutes}</span>
            <div><span className='text-[12px]'>Minutes</span></div>
          </div>
          <div className='mr-2 text-2xl sm:text-3xl'>
            <span>:</span>
          </div>
          <div className='p-[5px] w-[60px] sm:p-[20px] sm:w-[100px] border-white border-solid border-2 rounded-md'>
            <span className='font-bold text-2xl sm:text-3xl'>{seconds}</span>
            <div><span className='text-[12px]'>Seconds</span></div>
          </div>
        </div>
      )
    }
  }
  return (
    <>
      <div className='banner'>
        <div className='banner_img'></div>
        <div className='container absolute text-white text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <div className='top_intro'>
            <p>July 10, 2023 at 6:30 pm. place</p>
            <p className='text-[24px] sm:text-[32px]'>Dubai, ATLANTIS, THE PALM.</p>
          </div>
          <div className='bottom_main mb-6'>
            <h1 className='text-[48px] sm:text-[64px] font-bold'>Crypto Fox Dubai 2023</h1>
            <span className='text-[18px] sm:text-[32px]' >Dubai’s Largest Cryptocurrency Summit</span>
          </div>
          <Countdown date={Date.now() + 500000000} renderer={renderer} />
        </div>
      </div>
    </>
  )
}

export default Banner
