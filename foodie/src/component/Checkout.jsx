import React from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'

function Checkout() {
    const method= ["Cash on delivery","Credit card","Paypal","Bank transfer"]
    const submit = (e) => {
        e.peverntDefault()
    }
    return (
        <div className='flex justify-center items-center bg-slate-100 relative'>
            <Link to="/order-online"><div className='w-[45px] h-[45px] flex justify-center items-center rounded-full text-white bg-slate-600 absolute top-3 left-20'>←</div>
</Link>
            <article className=' bg-slate-50 py-4 px-10 w-1/2 '>
                <h2 className='text-3xl font-medium py-5 text-center'>Checkout</h2>
                    <h3 className='text-xl px-8 py-1.5 '> Shipping Address </h3>
                <div className='flex justify-between  py-1.5 gap-3 px-8'>
                <Input  placeholder="Your address..." />
                <Button className=' px-6 bg-rose-500 font-medium text-lg '>Confirm</Button>
            </div>
                <div className=' px-8 py-4 '>
                    <h3 className='text-xl  '>Order Data</h3>
                    <div className='flex gap-4 py-1.5'>
                        <Input placeholder="First Name" />
                        <Input placeholder="Last Name" />
                    </div>
                    <div className='flex gap-4  py-1.5'>
                        <Input type="email" placeholder="Enter your email" />
                        <Input type="number"  placeholder="Phone No" />
                    </div>
                    <textarea name="" id="" cols={80} rows={5} className=' outline-none px-1.5 rounded-md py-2' placeholder='Message...'></textarea>
                    <div className='  w-full flex flex-wrap flex-col py-2.5'>
                        <h3 className='text-xl py-1.5'>Payment methods</h3>
                        <form onSubmit={submit}>
                           {method.map((item)=>(
                                <div key={item} className='flex gap-4  py-2 px-1.5'>
                                <input type="radio" name="payment_method" id={item} />
                                <label className='w-full' for={item}>{item}</label>
                            </div>
                           ))} 
                           
                            <Button type='submit' className='bg-rose-800 font-medium px-6 mt-1.5 '> Order Now</Button>
                        </form>
                    </div>

                </div>
            </article>
        </div>

    )
}

export default Checkout