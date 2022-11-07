import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { blogDataType, blogMenuData } from '../../utils/blogData';
import { defaultImage } from '../../utils/defaultImage';
import { filterButtons } from '../../utils/filterButton';

import './blog.css'

// type settings for component props
type cardDataType = {
    blogAuthor : {name: string, id: string}
    blogTitle: string,
    category: string,
    content : string,
    date: string,
    featured: string,
    id: string,
    imageUrl: string
    }

type blogMenuPropsType = {
    filtredData: string,
    setFilteredData: React.Dispatch<React.SetStateAction<string>>,
    cardData : cardDataType[] 
}

// blogAuthor : {name: string, id: string}
// blogTitle: string,
// category: string,
// content : string,
// date: string,
// featured: string,
// id: string[],
// imageUrl: string

const BlogMenuComp = ({filtredData, setFilteredData, cardData}: blogMenuPropsType) => {
    
    let navigate = useNavigate()

    const handleSetData = (name: string) => {
        setFilteredData(name)
    }
    const handleSetUrl = (id:string) => [
        navigate(`/blog/${id}`)
    ]
  return (
    <section className='max-w-[1640px] mx-auto px-4 py-12'>
      <h2 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Posts</h2>
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
             cardData && cardData.map((data)=> {
               return data.category.toLowerCase() === filtredData.toLowerCase() &&
                <div key={data.blogAuthor.id} className='relative border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                    <img src={data.imageUrl ? data.imageUrl : defaultImage} alt={data.blogAuthor.name} className='w-full h-[200px] object-cover rounded-t-lg cursor-pointer' />
                    {
                        data.featured ? <div className='flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-[#0F344E] w-[100px] p-1 rounded-l-xl'>Featured</div> : <div className='flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-orange-600 w-[100px] p-1 rounded-l-xl'>{data.category.charAt(0).toUpperCase() + data.category.slice(1)}</div> 
                    }
                    <div className='flex flex-col px-2 py-4 h-[300px]'>
                        <p className='font-bold text-[24px] leading-2'>{data.blogTitle}</p>
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
 