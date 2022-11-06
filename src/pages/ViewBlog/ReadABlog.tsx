import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FooterComp from '../../components/FooterComp/Footer'
import { blogDataType, blogMenuData } from '../../utils/blogData'

const ReadABlog = () => {
  const [blogDetails, setBlogDetails] = useState<blogDataType>()
  let params = useParams()
  let blogId = Number(params.id)
  
    useEffect(()=>{
      // eslint-disable-next-line array-callback-return
      blogMenuData && blogMenuData.filter(data => {
        if(data.id === blogId){
          setBlogDetails(data)
        }
      })

    },[blogId])
    
  return (
    <>
    <div className='flex flex-row w-full h-full '>
      <div className='flex flex-col w-[92%] lg:w-[50%] mt-2 mb-2 ml-auto mr-auto relative'>
            <img alt={blogDetails?.category} src={blogDetails?.image} className='w-[100%] h-[55%] rounded-t-xl'/>
            {
                    blogDetails?.featured ? <div className='flex items-center justify-center absolute right-0 top-2 lg:top-[50%] text-[#fff] text[13px] bg-[#0F344E] w-[100px] p-1 rounded-l-xl'>Featured</div> : <div className='flex items-center justify-center absolute right-0 top-2 text-[#fff] text[13px] bg-orange-600 w-[100px] p-1 rounded-l-xl'>{blogDetails && blogDetails.category.charAt(0).toUpperCase() + blogDetails?.category.slice(1)}</div> 
                    }
          <div className='flex justify-between items-center mt-2 mb-2'>
            <span className='text-gray-400 text-sm font-bold'>Jan 1, 2021</span> <span>by Jhone Doe</span>
          </div>
          <div>
            <h2 className='leading-2 text-xl font-bold'>{blogDetails?.name}</h2>
            <p className='leading-1 lg:text-lg'>
              {blogDetails?.content}
            </p>
          </div>
      </div>
    </div>
    <FooterComp />
    </>
  )
}

export default ReadABlog
