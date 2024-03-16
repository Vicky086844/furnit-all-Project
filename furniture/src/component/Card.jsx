import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
  return (
    <>
    <div className='flex flex-col w-1/5  mx-8 my-1.5 py-1 rounded-lg shadow-lg '>
    <div className=' w-fit  '> <img src="chair.png" alt="city" className='w-[100%] h-[100%] rounded-t-lg ' /></div>
    <div className='flex flex-col gap-3 py-3 justify-center items-center px-4 bg-slate-50 '>
        <h2 className=' text-xl font-semibold'>Why should you choose good wood</h2>
        <p className='text-gray-400  '> Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className='my-2 bg-emerald-100 py-2 px-4 font-medium rounded'>
          <Link to="/blog/detail">Read More...</Link></button>
    </div>
</div>
</>

  )
}

export default Card 
