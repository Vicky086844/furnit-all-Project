import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <article className='bg-gradient-to-t from-rose-100 to-rose-300 flex gap-4 h-screen  flex-col md:flex-row py-8  '>
            <div className='flex flex-col justify-center items-center gap-4 '>
                <h1 className='text-xl md:text-3xl lg:text-4xl font-bold '>Best Restaurant
                    In <span className='text-red-800'>Town.</span></h1>
                    <h3 className='md:text-xl text-lg lg:text-2xl text-center px-7 w-3/4 md:w-7/12 text-rose-800 font-medium'>We provide best food in town, we provide home delivery and dine in services</h3>
                    <div className='flex gap-3 font-medium my-2 '>
                        <Link to='/order-online'><Button className=' px-8 py-3.5 font-bold bg-rose-900 '>Order Now</Button></Link>
                      <Link to="/reservation"> <Button className='px-8 py-3.5 font-bold bg-rose-400 text-red-900 ' > Reservation </Button></Link> 
                    </div>
            </div>
            <div className='flex md:w-auto invisible md:visible justify-center items-center' >
                <img src="food.png" alt="food" className='filter drop-shadow-2xl object-cover '/>
            </div>
        </article>
    )
}

export default HeroSection