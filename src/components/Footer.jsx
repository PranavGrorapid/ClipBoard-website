import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20  '>

     <div className='flex flex-col  justify-center items-center space-y-7 md:flex-row md:justify-between md:space-y-0 mx-5'>

      <div>
        <img src="./images/logo-google.png" alt="" className='scale-50  lg:scale-75' />
      </div>

      

      <div>
        <img src="/images/logo-ibm.png" alt="" className='scale-50 lg:scale-75' />
      </div>

      <div>
        <img src="./images/logo-google.png" alt="" className='scale-50 lg:scale-75' />
      </div>

      <div>
        <img src="./images/logo-microsoft.png" alt="" className='scale-50 lg:scale-75' />
      </div>

      <div>
        <img src="./images/logo-hp.png" alt="" className='scale-50 lg:scale-75' />
      </div>

      <div>
        <img src="./images/logo-vector-graphics.png" alt="" className='scale-50 lg:scale-75' />
      </div>

     </div>

     <div className='my-20 mx-5'>

     <h3 className='text-center'>Clipboard for iOS and Mac OS</h3>
     <p className='py-4  text-center text-grayishBlue text-sm px-16 md:text-sm md:px-5  md:max-w-lg lg:max-w-xl lg:text-lg '>
        Available for free on the App store. Download for Mac or iOS,sync with icloud and you're ready to start adding to your clipboard
     </p>


     </div>

     <div className='flex flex-col mx-5 my-5 space-y-10 space-x-0 md:flex-row md:justify-center md:space-x-6 items-center md:space-y-0'>

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

      <div className='bg-gray-100 mt-20  py-10 md:flex justify-between px-7'>

      <div>
       <img src="./images/logo.svg" alt="logo" className='scale-50 mx-auto' />
     </div>


   <div className=' flex flex-col justify-center items-center space-y-5   '>

<div className='md:flex justify-center md:justify-between items-center space-y-5 ps-10 md:space-y-0 md:ps-0  md:space-x-20 '>
   <div><a href="">FAQs</a></div>
     <div> <a href="">Contact Us</a></div>
    
     <div><a href="">Privacy Policy</a></div>
     </div>

     <div  className=' space-y-5 md:flex  md:space-x-20 ps-5 md:ps-0 md:-ms-44 md:space-y-0 '>
     <div> <a href="">Press kit</a></div>
     <div className=''> <a href="" className='md:-ms-6' >Install Guide</a></div>
     
    
   </div>
   </div>



 


   <div className='my-10 flex justify-center items-center space-x-5'>

     <div>
     <img src="./images/icon-facebook.svg" alt="" />
     </div>

     <div>
     <img src="./images/icon-twitter.svg" alt="" />
     </div>

     <div>
     <img src="./images/icon-instagram.svg" alt="" />
   
     </div>

   </div>



      </div>

      
    </div>
  )
}

export default Footer
