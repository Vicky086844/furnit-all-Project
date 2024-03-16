import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

function ReservationConfimation() {
    return (
        <section className='bg-slate-50'>
            <div className='bg-white max-w-3xl mx-auto py-4  '>
                <h2 className='text-xl font-bold my-1 text-center py-6'>
                    Reservation
                </h2>
                <div className='bg-emerald-400 py-8 px-10 text-white'>
                    <h1 className='text-2xl font-medium '>Reservation has been confirmed</h1>
                    <p>✉️ The confirmation result has been sent to your email </p>
                    <p>📅 Booking id: #123456</p>
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
                     <Link to="/details">
                     <Button className='bg-emerald-400 text-sky-800 ' >modify </Button>
                     </Link>
                        <Link to="/cancel"><Button className='bg-red-400 text-red-900 '>cancel </Button></Link>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ReservationConfimation