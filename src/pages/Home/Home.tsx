import React, {useState, useEffect} from 'react'
import BlogMenuComp from '../../components/BlogMenu/BlogMenu';
import FooterComp from '../../components/FooterComp/Footer';
import HeadlineComponent from '../../components/HeadlineComp/Headline';
import HeroComponent from '../../components/HeroSection/Hero';
import SubscriptionComp from '../../components/Newsletter/Subscribe';
import {getDocs, collection} from "firebase/firestore"
import { blogMenuData } from '../../utils/blogData'
import { db } from '../../store/firebas-config';

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

const Home = () => {
  const [cardData, setCardData] = useState<cardDataType | any>();
  const [filtredData, setFilteredData] = useState('sports')
  // fetch data from the database
  const blogCollectionRef = collection(db, 'blogs');

 useEffect(()=> {
  const fetchBlogs = async () =>{
      const result = await getDocs(blogCollectionRef)
      if(result){
        const refinedResult = result.docs.map((res) => ({...res.data(), id: res.id}))
      setCardData(refinedResult);
      }  
  }
  fetchBlogs()
 },[])

 

  return (
    <div>
      <HeroComponent />
      <HeadlineComponent />
      <BlogMenuComp filtredData={filtredData} setFilteredData={setFilteredData} cardData={cardData}/>
      <SubscriptionComp />
      <FooterComp />
    </div>
  )
}

export default Home
