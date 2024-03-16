import React from 'react'
import Product from './Product'
import HeroSection from './HeroSection'
import Blog from './Blog'
import HeroSectionShooping from './HeroSectionShooping'

function Home() {
  return (
    <div>
        <HeroSection/>
        <Product />          
        {/* <div className='px-8  bg-gradient-to-b from-teal-50 to-teal-100  '> */}
        <HeroSectionShooping/>
        {/* </div> */}
        <div className='px-8 mx-auto max-w-7xl '>
        <Blog/>
        </div>
    </div>
  )
}

export default Home