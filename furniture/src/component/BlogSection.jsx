import React, { useState } from 'react'
import Card from './Card'
import Button from './Button'




function BlogSection() {
  const [page, setpage] = useState(1)
  const selectPage = (value) => {
    if (value >= 1 && value <= 50 / 10 && value !== page) {
      setpage(value)
    }
  }
  return (
    <div className='flex justify-center flex-col py-10 bg-teal-50'>
      <div className='flex justify-center items-center flex-col my-4 px-5  gap-3'>
        <h1 className='text-3xl font-bold' >Read Our Latest Blog</h1>
        <h3 className='text-lg text-emerald-800 font-medium my-3 py-2'>We write various things related to furniture, from tips and what things I need to pay attention to when choosing furniture</h3>
      </div>
      <div className='flex flex-wrap justify-center py-8  bg-teal-50 mx-auto gap-2 max-w-7xl '>
        {[...Array(50)].slice(page * 9 - 9, page * 9).map((_, i) => (<Card key={i} />))}
      </div>
      <div className='flex gap-2 py-2 px-2.5 font-medium justify-center my-8 '>
        <Button className='bg-white text-emerald-950 ' onClick={() => selectPage(page - 1)} > Prev</Button>
        {[...Array(4)].map((_, i) => {
          return <Button key={i} className= 'py-2 px-1 bg-white text-emerald-950 font-medium ' onClick={() => selectPage(i + 1)}>{i + 1}</Button>
        })}
        <Button className='bg-white text-emerald-950 ' onClick={() => selectPage(page + 1)}> Next</Button>

      </div>
    </div>
  )
}

export default BlogSection