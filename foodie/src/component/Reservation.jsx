import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import Input from './Input'

function Reservation() {
  return (
    // <div className='bg-gradient-to-t from-rose-100 to-rose-300'>
    <div className='flex gap-5 px-8 py-3.5 my-8 mx-auto max-w-6xl '>
        <div className='w-full flex justify-end  '><img src="chair.png" alt="chair" className='w-[400px] object-cover shadow-lg rounded-md'/></div>
        <div className='bg-slate-50 w-full px-8 py-6 flex flex-col gap-2 shadow-xl rounded-lg'>
            <h1 className='font-medium text-lg'>Book a table </h1>
            <Input  type="date" placeholder="Select a date" />
            <Input type='time' placeholder="Enter the event time" />
            <Input type='number' placeholder="Enter party size" />
            <Link to="/details"><Button className='w-full my-3 font-medium text-lg bg-rose-500 '> Book now</Button></Link>
            
        </div>

    </div>
    // </div>
  )
}

export default Reservation