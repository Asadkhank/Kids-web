import React from 'react'
import banner1 from '../assets/banner-1-1.webp';
import banner2 from '../assets/banner-1-2.webp';
import banner3 from '../assets/banner-1-3.webp';

const Banner = () => {
  return (
    <div className='lg:flex space-y-2 space-x-6'>
<div><img src={banner1} alt="" className='rounded-2xl'   /></div>
<div className='space-y-6 '>
<img src={banner2} alt="" className='rounded-2xl' />
<img src={banner3} alt="" className='rounded-2xl'  />
</div>

    </div>
  )
}

export default Banner