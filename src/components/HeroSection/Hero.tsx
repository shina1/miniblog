import React from 'react'


const HeroComponent = () => {
  return (
    <div className='max-w-[1640px] mx-auto pt-4 pb-4 pl-0 pr-0 '>
      <div className='max-h-[700px] relative '>
        {/* overlay */}
        
            <div className='absolute w-full h-full text-gray-200 max-h-[700px] bg-black/50 flex flex-col justify-center  pl-2'>
                <div className='w-full sm:w-full lg:w-[60%]'>
                    <h3 className='px-4 py-1 sm:py-2 lg:py-4 text-1xl sm:text-2xl lg:text-4xl '>Meet our community</h3>
                    <h1 className='px-4 py-1 sm:py-1 lg:py-4 text-2xl sm:text-4xl lg:text-7xl font-bold'>The <span className='text-orange-500 '>Best</span> Blogging plartform about</h1>
                    <h1 className='px-4 py-1 sm:py-1 lg:py-4 text-2xl sm:text-4xl lg:text-7xl font-bold'><span className='text-orange-500 '>Anime</span>, Technology and <span className='text-orange-500'>Sports</span> 
                    </h1>
                </div>
            </div>
        
            <img className='w-full max-h-[700px] object-cover' src={'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} alt='foodie hero section' />
      </div>
    </div>
  )
}

export default HeroComponent