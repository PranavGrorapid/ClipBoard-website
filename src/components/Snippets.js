import React from 'react'

const Snippets = () => {
  return (
    <div className='mb-20'>

    <div>
    <h3 className='text-center'>
        keep track of your snippets
    </h3>

    <p className='text-center px-10'>
        clipboard instantly stores any item you copy in the cloud.meaning you can access your snippets immediately on all your devices. our Mac abd ios apps will help you organize everything
    </p>
    </div>


    <div className='flex flex-col relative md:flex-row md:items-center md:justify-center '>

      <div className='md:w-1/2' >

      <img src="./images/image-computer.png" alt="laptops" className='w-64 mx-auto my-10 md:absolute md:top-0 md:right-[50%] md:mt-32 md:w-80' />

      </div>

      <div className='md:w-1/2 flex flex-col space-y-2  space-x-0 md:justify-center md:items-center md:pt-20 md:space-y-10'>

          <div>

            <h5 className=''>Quick Search</h5>

              <p className='my-5 max-w-md text-grayishBlue text-xs px-20 md:text-sm lg:text-xl text-center '>
                Easily search your snippets by content,category,web address,application and more
              </p>

          </div>


          <div>

<h5 className=''>iCloud Sync</h5>

  <p className='my-5  text-center text-grayishBlue text-xs px-20 md:text-sm lg:text-xl'>
    Instantly saves and syncs snippets across all your devices
  </p>

</div>


<div>

<h5 className=''>Completely History</h5>

  <p className='my-5  text-center text-grayishBlue text-xs px-20 md:text-lg lg:text-xl'>
    Retrieve any snippets from the first moment you started using the app
  </p>

</div>





      </div>




    </div>

    <div className='my-20'>
        <h3 className='text-center mx-5 '>Access Clipbard anywhere</h3>
        <p className='text-center px-7 py-5 md:text-xl lg:text-2xl'>
            Whether you're on the go,or at your computer, you can access all your Clipboard snippets in a few simple clicks.
        </p>

        <img src='./images/image-devices.png' alt="dekstop" className='mx-auto w-60 py-7 md:w-80 lg:w-[600px]' />
    </div>
      


    </div>
  )
}

export default Snippets
