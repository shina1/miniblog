import React from 'react';

import {AiOutlineSend} from 'react-icons/ai'

const SubscriptionComp = () => {
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12 bg-[#080706] rounded-lg item-center my-5'>
        <h3 className='text-bold text-center text-orange-600 text-4xl'>Subscribe to our News Letter</h3>
        <div className='w-[70%] mx-auto my-5 p-2'>
            <form action="" className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row justify-between gap-2' >
                <input type="email" placeholder='you@email.com' className='border-orange-600 bg-white p-4 px-2 w-full rounded-lg focus:outline-none'/>
                <button className='flex items-center gap-2 justify-center w-full sm:w-full md:w-full lg:w-1/6 border-orange-600 py-2 text-orange-600 font-bold cursor-pointer hover:bg-orange-600 hover:text-white'><AiOutlineSend size={30}/> Submit</button>
            </form>
        </div>
    </section>
  )
}

export default SubscriptionComp