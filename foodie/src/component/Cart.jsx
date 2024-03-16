import React from 'react'
import Button from './Button'
import { useSelector,useDispatch } from 'react-redux'
import Input from './Input'
import { Link } from 'react-router-dom'


function Cart() {
    const cartItem = useSelector(state => state?.cartItem)
    const dispatch = useDispatch()
    const taxAmount = 100;
    const voucherAmount= 0;
    const cartPrice=cartItem.reduce((acc, cur) => (acc = acc + cur.cost * cur.qty) , 0)
    const totalAmount= cartPrice + taxAmount - voucherAmount ;
    return (
        <article className='w-2/6 bg-white h-fit'>
            <div>
                <h3 className='text-center text-rose-800 text-2xl py-3 font-medium shadow-lg'>Order List</h3>
                <hr />
            </div>
            <div>
                {cartItem?.map((item)=>(
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between items-center py-1 px-8 my-1 '>
                            <h3 className='text-lg'>{item.name}</h3>
                            <img src={item.image} alt="image" className='w-[60px] h-[60px] rounded-lg object-cover' />
                        </div>
                        <div className='flex justify-between px-8 items-center my-2'>
                            <div className='flex gap-2'>
                             <Button className='py-0 bg-gray-200 text-rose-900 font-medium  '>+</Button>
                             <h3 className='py-1.5'>{item.qty}</h3>
                             <Button className='py-0 bg-gray-200 text-rose-900 font-medium  '>-</Button>
                            </div>
                            <h3 >$ {item.cost}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <hr/>

            <div className='px-8 py-6   '>
                <h1 className='py-2 my-2 text-2xl  '>Voucher Code</h1>
                <div className='flex gap-4'>
                    <Input type="text" placeholder='Free to eat' />
                    <Button className='bg-rose-800 font-medium ' >Apply</Button>
                </div>
                <div>
                    {/* billing process */}
                    <div className='flex justify-between px-2 py-1.5 '>
                        <h3 >SubTotal</h3>
                        <p>{cartPrice}</p>
                    </div>
                    <div className='flex justify-between px-2 py-1.5 '>
                        <h3>Tax fee</h3>
                        <p>{taxAmount}</p>
                    </div>
                    <div className='flex justify-between px-2 py-1.5 '>
                        <h3>Voucher</h3>
                        <p>{voucherAmount}</p>
                    </div>
                    <div className='flex justify-between px-2 py-1.5 '>
                        <h3>Total</h3>
                        <p>{totalAmount}</p>
                    </div>
                    <div className='text-center my-5'>

                   <Link to="/checkout"> <Button className='bg-rose-800 font-medium  '>Checkout</Button></Link>
                    </div>
                </div>
            </div>
        </article>

    )
}

export default Cart