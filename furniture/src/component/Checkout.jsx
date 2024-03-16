import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useSelector } from 'react-redux'



function Checkout() {
    const [text, setText] = useState("address here..")
    const cartItem= useSelector(state=>state.cartItem)
    let subTotalPrice = cartItem.reduce((acc, item) => (acc = acc + (item.cost * item.qty)), 0);
    let discount = 10 ;
    let discountAmount= subTotalPrice * discount / 100 ;
    let totalPrice= subTotalPrice - discountAmount;
    console.log(totalPrice)
    return (
        <div className='py-6 px-8 bg-teal-50 '>

            <h1 className='text-center py-8 text-4xl' >Checkout</h1>
            <section className='flex '>
                <div className='w-2/4 '>


                    <article className=' py-8 px-6 flex flex-col gap-4 '>
                        <h2 className='text-lg'>contact information</h2>
                        <div className='flex gap-3 '>
                            <Input label="First Name" />
                            <Input label="Last Name" />

                        </div>
                        <div className='flex gap-3 '>
                            <Input label=" Phone" />
                            <Input label="Email" />

                        </div>
                    </article>
                    <article>
                        <div className='flex flex-col gap-4 py-8 px-6'>
                            <h1>shipping method</h1>
                            <div className='flex gap-4 '>
                                <Button className='h-10 '>store</Button>
                                <Button className='h-10 '>Delivery</Button>
                            </div>
                        </div>
                        <div className='px-6'>
                            {/* <label for="cars">Choose a car:</label>
                        not required i think

                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select> */}
                            <textarea name="" id="" value={text} onChange={(e) => setText(e.target.value)} className='px-3 py-2'></textarea>
                            <article>
                                <h1>Payment Methods</h1>
                                <div className='flex gap-3 py-5'>
                                    {["visa", "Gpay", "Paypal"].map((item) => (<Button className='h-8 '> {item}</Button>))}
                                </div>
                            </article>
                        </div>

                    </article>

                </div>
                <article className='bg-teal-50 px-10 py-8 w-1/2 h-fit flex justify-center items-center  '>
                    {/* yhn pe product ke item ka naam chaiye aur qty and amount  */}
                    <div className=' bg-slate-300 w-full flex gap-4 flex-col px-10 py-8'>
                        <h1 className='text-center text-2xl'>your orders</h1>
                        {/* this code repeating have to see later  */}
                        {cartItem.map((item)=>(<div key={item.id} className='flex justify-between gap-5'>
                            <p >{`${item.name}      ${ item.qty}x `} </p>
                            <p>$ {item.cost}</p>
                        </div>))}
                        <hr />
                        <div className='flex justify-between'>

                            <p>subtotal</p>
                            <p> $ {subTotalPrice} </p>
                        </div>
                        <div className='flex justify-between' >

                            <p>discount</p>
                            <p>{discount } %</p>
                        </div>
                        <hr />
                        <div className='flex justify-between '>
                            <p>total</p>
                            <p> $ {totalPrice.toFixed(2)}</p>

                        </div>
                        <Button className=' h-10 '>place order</Button>
                    </div>

                </article>
                {/* </div> */}


            </section>
        </div>

    )
}

export default Checkout