import React from 'react'
import Input from "./Input"
import Button from './Button'
import { Link } from 'react-router-dom'


function ReservationDetail() {
  return (
    <section className='bg-slate-200'>
        <div className='bg-slate-50 mx-auto max-w-3xl px-8'>
            <div className='text-center py-4 '>
                <h2 className='py-4 text-2xl font-medium'>Reservation</h2>
                <p className='bg-gradient-to-r from-sky-100 to-sky-200 mx-auto w-fit px-8 py-1.5 rounded-md '>Due to limited availability,we can hold this table for you 5:00 minutes</p>

            </div>
            <div className='flex  gap-4 px-8 py-4'>
                <form className='flex flex-col gap-1 w-full'  >
                    <h3 className='px-2 py-1.5 font-medium text-lg'>Data order</h3>
                    <Input placeholder="First name"/>
                    <Input placeholder="Last name"/>
                    <Input type="email" placeholder="Email address"/>
                    <Input type="number" placeholder="phone number"/>
                    {/* <select>
                        <option value="birthday"></option>
                    </select> */}
                    <textarea name="" id="" cols="10"  rows="5" className='bg-white text-black outline-none focus:bg-gray-200 px-2 py-1 text-sm'></textarea>
                    <Link to="/confirmation"> 
                    <Button> confirm reservation</Button>
                    </Link>
                </form>
                <div className='flex flex-col gap-1 w-full my-4 px-8'>
                    <div className='bg-slate-100 py-4 px-8'>
                        <h3 className='font-medium'>Reservation detail</h3>
                        <p>date</p>
                        <p>time</p>
                        <p>2 people (standard seating)</p>
                    </div>
                    <div className=' py-4 px-8 my-4 w-fit' >
                        <h3 className=' py-6 font-medium '>
                            Restaurant informations
                        </h3>
                        <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In recusandae ea id, suscipit sapiente sunt eveniet eaque.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ReservationDetail