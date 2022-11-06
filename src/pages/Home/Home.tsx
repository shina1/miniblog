import React, {useState} from 'react'
import BlogMenuComp from '../../components/BlogMenu/BlogMenu'
import FooterComp from '../../components/FooterComp/Footer'
import HeadlineComponent from '../../components/HeadlineComp/Headline'
import HeroComponent from '../../components/HeroSection/Hero'
import SubscriptionComp from '../../components/Newsletter/Subscribe'
import { blogMenuData } from '../../utils/blogData'

const Home = () => {
  const [cardData, setCardData] = useState(() => blogMenuData);
  const [filtredData, setFilteredData] = useState('sports')
  // blogMenuData
  return (
    <div>
      <HeroComponent />
      <HeadlineComponent />
      <BlogMenuComp filtredData={filtredData} setFilteredData={setFilteredData} setCardData={setCardData} cardData={cardData}/>
      <SubscriptionComp />
      <FooterComp />
    </div>
  )
}

export default Home
