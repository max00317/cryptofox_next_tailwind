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
          <div className='p-[20px] min-w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold count_number'>{days}</span>
            <div>Days</div>
          </div>
          <div className='mr-2 count_number'>
            <span>:</span>
          </div>
          <div className='p-[20px] min-w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold count_number'>{hours}</span>
            <div>Hours</div>
          </div>
          <div className='mr-2 count_number'>
            <span>:</span>
          </div>
          <div className='p-[20px] min-w-[100px] border-white border-solid border-2 mr-2 rounded-md'>
            <span className='font-bold count_number'>{minutes}</span>
            <div>Minutes</div>
          </div>
          <div className='mr-2 count_number'>
            <span>:</span>
          </div>
          <div className='p-[20px] min-w-[100px] border-white border-solid border-2 rounded-md'>
            <span className='font-bold count_number'>{seconds}</span>
            <div>Seconds</div>
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
          July 10, 2023 at 6:30 pm. place - Dubai, ATLANTIS, THE PALM.
          </div>
          <div className='bottom_main mb-6'>
            <h2 className='main-text font-bold'>Crypto Fox Dubai 2023</h2>
            <span>Dubai’s Largest Cryptocurrency Summit</span>
          </div>
          <Countdown date={Date.now() + 5000000} renderer={renderer} />
        </div>
      </div>
    </>
  )
}

export default Banner
