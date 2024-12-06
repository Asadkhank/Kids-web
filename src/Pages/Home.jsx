import React from 'react'
import HeroSection from '../Components/HeroSection'
import ImageSlider from '../Components/ImageSlider'
import ImageSlider2 from '../Components/ImageSlider2'
import Collections from '../Components/Collections'
import Banner from '../Components/Banner'
import ByAgeShoping from '../Components/ByAgeShoping'
import NewsTicker from '../Components/NewsTicker'
import Banner2 from '../Components/Banner2'
import ProductGrid from '../Components/ProductGrid'
import ProductSection from '../Components/ProductSection'
import ShopByCategory from '../Components/ShopByCategory'
import FwfsSection from '../Components/FwfsSection'
import GiftCards from '../Components/GiftCards'
import Testimonials from '../Components/testimonials'

const Home = () => {
  return (
   <>
   
   <div>
    <HeroSection/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <ImageSlider/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <ImageSlider2/>
    </div>
   
    <div className='mt-10 lg:mx-40'>
        <Collections/>
    </div>


    <div className='mt-10 lg:mx-40'>
        <Banner/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <ByAgeShoping/>
    </div>

    <div className='mt-10 '>
        <NewsTicker/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <Banner2/>
    </div>


    <div className='mt-10 lg:mx-40'>
        <ProductGrid/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <ProductSection/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <ShopByCategory/>
    </div>
    
    <div className='mt-10 lg:mx-40'>
        <FwfsSection/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <GiftCards/>
    </div>

    <div className='mt-10 lg:mx-40'>
        <Testimonials/>
    </div>


   </>
   
  )
}

export default Home