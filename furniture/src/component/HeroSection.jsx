import React from 'react'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='flex shadow-xl  bg-gradient-to-b from-teal-50 to-teal-100 flex-col md:flex-row bg-blu-400'>

        <div className=" flex flex-col justify-center gap-3 flex-1 py-7 order-2 md:order-none "> 
        <div className='md:w-1/2 mx-auto flex flex-col w-fit px-8'>
            <h3 className='md:text-xl text-base font-medium '>Interior Needs</h3>
            <h1 className='md:text-2xl text-lg text-wrap  '>Various new collections of furniture to decorate the corner of your house.</h1>
            <Link to="/shop"> <button className='bg-white py-3 md:w-fit px-4 my-3 rounded-lg font-medium text-emerald-900'>Shop Now</button></Link>
        </div>
        </div>
        {/* isko baad mai thoda set krta hun problem tu ho rahi h bc  */}
        <div className="flex-1 py-1.5  h-fit  flex justify-center items-center" >
            {/* <div className='p-10 h-fit '> */}
                <img src="furnit1.png" className=' w-1/2  rounded-lg  ' alt="chair-section" /></div>
                {/* </div> */}
    </div>
  )
}

export default HeroSection