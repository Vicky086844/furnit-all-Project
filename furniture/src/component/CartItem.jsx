import React from 'react'
import { decreamentCart, deleteCart, increamentCart } from '../Feature/AuthSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from './Button';


function CartItem() {
    const carts = useSelector(state => state.cartItem)
    const dispatch = useDispatch()
    const cartPrice=(cart)=>[cart].reduce((acc, cur) => (acc = acc + cur.cost * cur.qty) , 0)

    return (
        <div className='flex justify-between rounded-lg shadow-xl flex-col gap-5 w-fit h-fit flex-1 px-8 py-8'>
            {carts?.map((cart) =>(<div className='flex justify-around gap-5 w-fit ' key={cart.id}>
                <div className=' w-fit mr-4 '>
                 <img src={cart.image || "chair4.png"} alt={cart.name } className='w-[100px] h-[100px] object-cover' /></div>
                <div className='flex gap-3 items-center text-lg'>
                    <p>{cart.name }</p>
                    <p>$ {cart.cost }</p>
                </div>
                <div className='flex gap-2 items-center  '>
                    <Button className='py-1 bg-cyan-300 '
                     onClick={() => dispatch(increamentCart(cart.id))} >+</Button>
                    <p> {cart.qty} </p>
                    <Button className='py-1 bg-cyan-300 '
                     onClick={() => dispatch(decreamentCart(cart.id))} >-</Button>
                    <Button className=" h-fit py-2 mx-4 " onClick={() => dispatch(deleteCart(cart.id))}>delete</Button>
                    <p className='text-lg'> Total Price: $ {cartPrice(cart)}</p> 
                </div>
            </div>
            ))}

        </div>
    )
}

export default CartItem