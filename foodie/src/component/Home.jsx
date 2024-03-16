import React from 'react'
import HeroSection from './HeroSection'
import Button from './Button'
import Menu from './Menu'
import { Link } from 'react-router-dom'

const data = [
    {
        id: 1,
        name: "Betran Komar",
        img: "chef1.png"
    },
    {
        id: 2,
        name: "Ferry Sauwi",
        img: "chef2.png"
    },
    {
        id: 3,
        name: "Iswan Dracho",
        img: "chef3.png"
    },
]

function Home() {
    return (
        <>
            <HeroSection />
            <Menu />
            <div className='bg-slate-50 py-10 px-8'>
            <div className='bg-gradient-to-r from-rose-400  to-pink-200 py-10 rounded-xl shadow-xl px-6 flex justify-center flex-col  items-center gap-8 max-w-6xl mx-auto '>
                <h1 className='md:text-3xl text-xl lg:text-4xl font-bold '>Hungry? We are open now..</h1>
                <div className='flex gap-3 mx-auto '>
                <Link to="/order-online"><Button className='px-6 py-1.5 text-nowrap md:px-8 md:py-3.5 font-bold bg-rose-900 '>Order Now</Button></Link>
                    <Link to="/reservation"><Button
                     className=' px-6 py-1.5 text-nowrap md:px-8 md:py-3.5 font-bold bg-rose-400 text-red-900 ' > Reservation </Button></Link>
                </div>
            </div>
            </div>
            {/* chef section */}
            <div className='bg-slate-50 py-10'>
                <h1 className='text-center text-2xl md:text-3xl lg:4xl font-semibold md:py-8 py-4'>Our Popular Chef</h1>
                <div className='flex gap-5 justify-center mx-auto px-8 py-9 max-w-7xl flex-col md:flex-row '>
                    {data.map((item) => (
                        <div key={item.id} className='bg-slate-200 rounded-xl shadow-2xl flex md:w-1/2 py-6 justify-center flex-col items-center gap-5  font-medium cursor-pointer '>
                            <img src={item.img || "chef1.png"} alt="" className='md:w-1/5 w-2/6  object-cover'  />
                            <h2 className='text-xl '>{item.name}</h2>
                            <p className='text-lg text-gray-500 '>chef</p>
                        </div>
                        
                    ))}
                </div>
                    
                <div className='text-center my-4 '>

                <Button className=' text-center  px-8 py-3.5 font-bold bg-rose-800 ' > View All</Button>
                </div>
            </div>


        </>

    )
}

export default Home