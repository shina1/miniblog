import React from 'react'
import {FaTwitterSquare, FaFacebookSquare} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai';

const FooterComp = () => {
  return (
    <section className='flex flex-col  max-w-[1640px] mx-auto px-2 py-6 bg-black/90'>
        {/* inner container */}
        <div className='flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center justify-between w-full lg:w-[95%] mx-auto'>
            <div>
            <h3 className='sm:text-center md:text-center lg:text-center xl:text-left text-2xl sm:text-3xl lg:text-4xl text-white py-4 font-bold'>
                Blog
            </h3>
            <p className='text-1xl sm:text-1xl lg:text-1xl text-white py-4'>The best bloging plartform about anime, technology and sports</p>
            </div>
            <div className='flex gap-8 justify-center items-center'>
                <FaTwitterSquare size={35} color="#fff" className='cursor-pointer hover:fill-orange-500'/>
                <AiFillInstagram size={35} color="#fff" className='cursor-pointer hover:fill-orange-500'/>
                <FaFacebookSquare size={35} color="#fff" className='cursor-pointer hover:fill-orange-500'/>
            </div>
            <div>
                <nav>
                    <ul className='flex gap-4 text-white'>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>Promotions</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>Best One</li>
                        <li className='text-xl py-4 flex cursor-pointer hover:text-orange-500'>Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className='flex  items-center justify-between border-t-2 border-gray-400 mx-6 pt-4'>
            <div className='felx gap-2 text-l text-gray-400'><span className='text-l'>&#169;</span> all writes reserved</div>
            <div className='flex gap-2 text-l text-gray-500'><span>Privacy Policy</span><span>Terms of Use</span></div>
        </div>
    </section>
  )
}

export default FooterComp
