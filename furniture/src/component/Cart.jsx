import React from 'react'
import CartItem from './CartItem'
import Button from './Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Input from './Input'

function Cart() {
    let cart = useSelector(state => state.cartItem)
    let totalPrice = cart.reduce((acc, item) => (acc = acc + (item.cost * item.qty)), 0)
    return (
        <article className='py-10 px-8 bg-gradient-to-r from-slate-50 to-slate-200 ' >
            <h2 className='text-center text-3xl py-2 font-medium '>Your Cart</h2>
            <div className='flex py-8 max-w-7xl '>
                <div className='flex flex-col items-center w-4/6  '>
                    <CartItem />
                </div>
                <div className='flex  bg-slate-100 shadow-xl rounded-lg items-center justify-center px-8  h-fit flex-1 flex-col gap-3  py-8 '>
                    <h2 className='text-xl py-2 font-semibold'>Cart Total</h2>
                    <div className='flex text-lg gap-5 w-full justify-between '>
                        <p>Subtotal</p>
                        <p>$ {totalPrice} </p>
                        </div>
                    <div className='flex gap-3 py-2 w-full '>
                        <Input placeholder="coupon code" />
                        <Button className=' py-1.5 '>Apply</Button>
                    </div>
                    <hr />
                    <div className='flex gap-5 text-lg w-full justify-between'>
                        <p>Total</p>
                        <p> $ {totalPrice}</p>
                    </div>
                    <Link to='/checkout'><Button className=' py-2.5 font-medium my-1 px-6  '> Checkout </Button></Link>
                </div>
            </div>
        </article>
    )
}

export default Cart