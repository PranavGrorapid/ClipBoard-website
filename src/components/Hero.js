import React from 'react'

const Hero = () => {
  return (

    <div className='section-container  px-10 py-8'>
      
      <div>
        <img src="./images/logo.svg" alt="images" className='mx-auto my-16' />
      </div>

      <h3 >
         A history of everything you copy
      </h3>

      <p className='px-10'>
        clipboard allows you to track and organize everything you copy.instantly access your clipboard on all your devices
      </p>


    <div className='flex flex-col my-16 space-y-10 space-x-0 md:flex-row md:justify-center md:space-x-6 items-center md:space-y-0'>

      <div >

<a href="" className='button-container bg-strongCyan'>
    Download for ios
</a>
    
      </div>

      <div>

<a href="" className='button-container bg-lightBlue'>
    Download for Mac
</a>
    
      </div>

    </div>
        

    </div>

  )
}

export default Hero
