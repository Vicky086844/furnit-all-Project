import React, { useState } from 'react'
import Button from './Button'
import Star from './Star'
import { useDispatch } from 'react-redux'
import { addCart } from '../OrderSlice/CartSlice'


function OrderCard({ image, id, title, text, amount }) {
  const [count, setcount]=useState(0)
  const [qty, setqty]=useState(0)
  const dispatch= useDispatch()

  const add=(id)=>{
    setcount((count)=>count+1)
    setqty((qty)=>qty+1)
    dispatch(addCart(id))
  }
  const deleteItem=()=>{
    if(qty==1 || qty == 0){
      setcount((count)=>count- 1)
      
    }
    setqty((qty)=>qty-1)
  }
  const increamentItem=()=>{
    setqty((qty)=>qty+1)
  }
//  /* bg-slate-200 */
  return (

    <div key={id || 1} className='py-6  flex justify-center w-1/4  mx-8 '>
      <div className='
      
      bg-white
       shadow-2xl flex flex-col items-center gap-2 rounded-[20px]   '>
        <div className='w-full  flex justify-center'>
          <img src={image || "food2.png"} alt={title || "food"} className='w-[180px] h-[180px] rounded-full  my-5' />
        </div>

        <div className='text-center px-5'>
          <h3 className='text-2xl'>{title || "title"}</h3>
          <p className='w1/2 mx-auto py-3 text-slate-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
          <Star />
          <div className='flex justify-between items-center py-1 my-2 mx-auto px-2 font-medium  '>
            <h3 className='text-2xl text-red-800'>$ 12</h3>
            { count<1 && (<Button className='px-8 bg-red-800 ' 
            onClick={()=>add(id)}
            >Add</Button>)}           
             {count >= 1 &&
             (<div className='flex  font-bold   gap-2 '>
              <Button className='py-0 bg-gray-200 text-rose-800 rounded-full font-bold ' 
              // onClick={() => increament(item.id)}
              onClick={increamentItem}
              >+</Button>
              <p className=' font-medium py-2  '>{qty}</p>
              <Button className='py-0 bg-gray-200 text-rose-800 rounded-full font-bold '
              // onClick={() => decreament(item.id)} 
              onClick={deleteItem}
              >-</Button>
            </div>)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard