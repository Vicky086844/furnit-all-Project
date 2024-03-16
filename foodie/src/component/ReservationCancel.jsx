import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function ReservationCancel() {
    return (
        <section className='bg-slate-50'>
            <div className='bg-white max-w-3xl mx-auto py-4  '>
                <h2 className='text-xl font-bold my-1 text-center py-6'>
                    Reservation
                </h2>
                <div className='bg-orange-400 py-8 px-10 text-white   '>
                    <h1 className='text-2xl py-4'>Are you sure you want to cancel the reservation</h1>
                    {/* <p>✉️ The confirmation result has been sent to your email </p> */}
                    <p >📅 Booking id: #123456</p>
                </div>
                <div className='flex  gap-5'>
                    <div className='w-fit py-8 px-6'>
                    <img src="chair.png" alt="" className='w-[150px] h-[150px rounded-full '  />
                    </div>
                    <div className=' py-6 px-8'>
                        <h3 className=' text-lg py-4 font-medium'>Reservation detail</h3>
                        <p>date</p>
                        <p>time</p>
                        <p>2 people (standard seating)</p>
                    </div>
                    <div className='flex flex-col mx-auto gap-2 justify-center items-center font-medium'>
                     <Link to="">
                     <Button className='bg-red-400 text-red-800 ' >Cancel  </Button>
                     </Link>
                        <Link to="/confirmation"><Button className='bg-green-100 text-green-700 '> back </Button></Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ReservationCancel