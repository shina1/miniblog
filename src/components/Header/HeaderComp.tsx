import React, { useState } from 'react'
import {AiOutlineCloseCircle, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai';
import {BiPen, BiLogIn, BiLogOut} from 'react-icons/bi';
import {AiOutlineHome} from 'react-icons/ai'
import { NavLink, useNavigate } from "react-router-dom"
import { logOut } from '../../utils/auth/authLogout';

type headerPrps = {
  setIsLogIn:React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({setIsLogIn}: headerPrps) => {
  const [openNav, setOpenNav] = useState(false);
  const isLoggedIn = localStorage.getItem('isLogIn')
  const navigate = useNavigate()
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-[0_10px_30px_-28px_rgba(0,0,0,0.3)]' >
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={()=> {setOpenNav(!openNav)}}>
          <AiOutlineMenu size={30}/>
        </div>
        <h3 className='text-2xl sm:text-2xl lg:text-4xl px-2 font-bold text-[#0F344E]'>
            Blog
        </h3>
        {/* <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div> */}
      </div>
      {/* search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20}/>
        <input type="text" placeholder='search blog' className='bg-transparent p-2 w-full focus:outline-none'/>
      </div>
      {/* login button */}
      {
        isLoggedIn === 'true'  ?  <div className='hidden md:hidden lg:flex md:gap-2'>
        <button className='bg-[#FF7606]/80 text-white hidden md:flex items-center gap-2 py-2 rounded-full border-none'>
           <BiPen size={30}/> Create Post
        </button>
        <button className='bg-[#FF7606]/80 text-white hidden md:flex  items-center gap-2 py-2 rounded-full border-none' onClick={() => logOut(setIsLogIn,navigate)}>
        <BiLogOut size={30}/> Logout
      </button>
      </div>
       : 
       <button className='bg-[#FF7606]/80 text-white hidden md:hidden lg:flex  items-center gap-2 py-2 rounded-full border-none'>
        <BiLogIn size={24}/> <NavLink to="/login">Login</NavLink>
      </button>
      }
     
      {/* mobile menu */}
      {/* overlay */}
      {
        openNav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ""
      }
        {/* drawwer */}
        <div className={openNav ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300'}>
          <AiOutlineCloseCircle className='absolute right-4 top-4 cursor-pointer' size={30} onClick={()=> {setOpenNav(!openNav)}}/>
          <h2 className='text-2xl p-4'>Best <span className='font-bold'>Blog</span></h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
              <li className='text-xl py-4 flex' onClick={()=> {setOpenNav(!openNav)}}><AiOutlineHome size={25} className='mr-4'/><NavLink to="/">Home</NavLink></li>
              {isLoggedIn === 'true' ? 
              <>
                <li className='text-xl py-4 flex' onClick={()=> {setOpenNav(!openNav)}}><BiPen size={25} className='mr-4'/><NavLink to="/create">Create Blog</NavLink></li>
                <li className='text-xl py-4 flex cursor-pointer' onClick={() => {logOut(setIsLogIn,navigate); setOpenNav(!openNav)}}><BiLogOut size={25} className='mr-4'/>Logout</li>
              </> 
              : 
              <li className='text-xl py-4 flex' onClick={()=> {setOpenNav(!openNav)}}><BiLogIn size={25} className='mr-4'/><NavLink to="/login">Login</NavLink></li>
              }
              
            </ul>
          </nav>
        </div>

     
    </div>
  )
}

export default Header
