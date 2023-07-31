import React from 'react'


const Supercharge = () => {
  
    return (
    
    <div className='mb-20'>

   <div>
     <h3 className='text-center'>Supercharge your workflow</h3>

     <p className='text-center py-4 px-10'>
        we've got the tools to boost your productivity
     </p>
     </div>

 
 <div className='flex flex-col space-y-3 md:flex-row md:justify-center md:items-center md:space-y-0 md:mx-auto'>


<div className='flex flex-col space-y-3 '>
<div className='mt-10'>
<img src='./images/icon-blacklist.svg' alt="blacklist" className='w-10 mx-auto' />
</div>

<div className='lg:mt-'>
    <h5>Create blacklists</h5>
    <p className='my-5  text-center text-grayishBlue text-xs px-20 md:text-sm md:px-5  md:max-w-4xl lg:text-lg'>
   Easily search your snippets by content,category,web addres,application and more</p>
</div>
</div>



<div className='flex flex-col space-y-5'>
<div className='mt-10'>
<img src='/images/icon-text.svg' alt="blacklist" className='w-10 mx-auto' />
</div>

<div>
    <h5>Plain text snippets</h5>
    <p className='my-5  text-center text-grayishBlue text-xs px-20 md:text-sm md:px-5  lg:text-lg'>
    Remove unwanted formatting from copied text for a consistent look
   </p>
</div>
</div>



<div className='flex flex-col space-y-5 md:space-y-7 lg:space-y-10'>
<div className=''>
<img src='/images/icon-preview.svg' alt="blacklist" className='w-10 mx-auto' />
</div>

<div>
    <h5>Sneak Preview</h5>
    <p className='my-5  text-center text-grayishBlue text-xs px-20 md:text-sm md:px-5   lg:text-lg'>
    Quick preview of all snippets on your clipboard for easy access
   </p>
</div>
</div>




 </div>


      
    </div>
  )
}

export default Supercharge
