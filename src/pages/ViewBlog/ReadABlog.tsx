import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FooterComp from '../../components/FooterComp/Footer'
import { db } from '../../store/firebas-config'
import {getDocs, collection} from "firebase/firestore"
import { blogDataType, blogMenuData } from '../../utils/blogData'


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

const ReadABlog = () => {
  const [blogDetails, setBlogDetails] = useState<cardDataType | any>()
  
  let params = useParams()
  let blogId = params.id
  const blogCollectionRef = collection(db, 'blogs');

   useEffect(()=> {
  const fetchBlogs = async () =>{
      const result = await getDocs(blogCollectionRef)
      if(result){
        const refinedResult = result.docs.map((res) => ({...res.data(), id: res.id}))
        // setBlogDetails(refinedResult);
        refinedResult.filter(data => {
          if(data.id === blogId){
            setBlogDetails(data)
          }
          
        })
      }  
  }
  fetchBlogs()
 },[])

    

    console.log(blogDetails);
    
    

// blogAuthor : {name: string, id: string}
// blogTitle: string,
// category: string,
// content : string,
// date: string,
// featured: string,
// id: string[],
// imageUrl: string
    
  return (
    <>
    <div className='flex flex-row w-full h-full '>
      <div className='flex flex-col w-[92%] lg:w-[50%] mt-2 mb-2 ml-auto mr-auto relative'>
            <img alt={blogDetails?.category} src={blogDetails?.imageUrl} className='w-[100%] h-[55%] rounded-t-xl'/>
          <div className='flex justify-between items-center mt-2 mb-2'>
            <span className='text-gray-400 text-sm font-bold'>{blogDetails?.date.split('GMT+')[0]}</span> <span className='text-black text-sm font-bold'>By: {blogDetails?.blogAuthor.name}</span>
          </div>
          <div>
            <h2 className='leading-2 text-xl font-bold'>{blogDetails?.blogTitle}</h2>
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
