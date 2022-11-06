import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogDataType, blogMenuData } from '../../utils/blogData';
import { filterButtons } from '../../utils/filterButton';

import './blog.css'

type blogMenuPropsType = {
    filtredData: string,
    setFilteredData: React.Dispatch<React.SetStateAction<string>>,
    setCardData: React.Dispatch<React.SetStateAction<blogDataType[]>>,
    cardData : blogDataType[] 
}
const BlogMenuComp = ({filtredData, setFilteredData, setCardData, cardData}: blogMenuPropsType) => {
    let navigate = useNavigate()

    const handleSetData = (name: string) => {
        setFilteredData(name)
    }
    const handleSetUrl = (id:number) => [
        navigate(`/blog/${id}`)
    ]
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12'>
      <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated</h2>
      {/* filter row */}
      <div className='flex flex-col lg:flex-row items-center my-2'>
        {/* filter type */}
        <div>
            <p className='font-bold text-gray-700'>Filter Blog Categories</p>
            <div className='flex justify-between flex-wrap max-w-[680px] my-1'>
                {
                    filterButtons.map(button => (
                        <button className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' onClick={() => handleSetData(button.name.toLowerCase())} key={button.id}>{button.name.toUpperCase()}</button>
                    ))
                }
            </div>
        </div>
      
      </div>
      {/* display food data */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {
            cardData.length === 0 && <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-3 gap-4">
                            <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                            </div>
                            <div className="h-2 bg-slate-700 rounded"></div>
                        </div>
                        </div>
                    </div>
            </div>
        }
        {
             cardData.map((data)=> {
               return data.category.toLowerCase() === filtredData.toLowerCase() &&
                <div key={data.id} className='relative border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img src={data.image} alt={data.name} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer' />
                    {
                        data.featured ? <div className='flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-[#0F344E] w-[100px] p-1 rounded-l-xl'>Featured</div> : <div className='flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-orange-600 w-[100px] p-1 rounded-l-xl'>{data.category.charAt(0).toUpperCase() + data.category.slice(1)}</div> 
                    }
                    <div className='flex flex-col px-2 py-4 h-[300px]'>
                        <p className='font-bold text-[24px] leading-2'>{data.name}</p>
                        <p className='fifty-chars text-[15px] leading-2'>{data.content}</p>
                    </div>
                    <button className='flex items-center justify-center mt-1 mb-2 ml-2 mr-1 border-0 bg-[#FF7606]/80 text-[#fff] text-bold' onClick={() => handleSetUrl(data.id)}>Read More</button>
                </div>
            }) 
        }
      </div>
    </section>
  )
}

export default BlogMenuComp
 