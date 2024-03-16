import React from 'react'
import Card from './Card'


function Blog() {
  return (
    <div className='flex justify-center flex-col py-10 '>
        <div className='flex justify-center items-center flex-col my-4 px-5  gap-3'>
            <h1 className='text-3xl font-medium py-1' >Read Our Latest Blog</h1>
            <h3 className='text-lg text-gray-400 py-3 w-1/2 text-center'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</h3>
        </div>
        <div className='flex gap-2 '>
           
           {/* // better way do is with slice when you want to acess only 3-4 cards when you have lots of card */}
           {[...Array(4)].map((_,i)=>(<Card key={i}/>))}
        </div>
    </div>
  )
}

export default Blog