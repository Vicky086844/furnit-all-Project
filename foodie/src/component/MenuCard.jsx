import React from 'react'
import Button from './Button'
import Star from './Star'
import { addCart } from '../OrderSlice/CartSlice'
import {useDispatch}from "react-redux"


function MenuCard({title,image,id,amount,text}) {

  const dispatch= useDispatch()
  return (
    <div key={id || 1} className='py-6  flex justify-center md:w-1/3 lg:w-1/4 xl:w-1/5 w-full md:mx-8 mx-1  '>
    <div className='bg-slate-200  flex flex-col  items-center gap-2 rounded-[20px] shadow-2xl  '>
       <div className='w-full  flex  justify-center'> 
         <img src={image||"food2.png"} alt={title||"food"} className='w-[100px] h-[100px] md:w-[180px] md:h-[180px] rounded-full my-1.5 md:my-5'/>
         </div>

        <div className='text-center px-5'>
            <h3 className='md:text-3xl text-xl'>{title || "title"}</h3>
            <p className='w1/2 mx-auto  py-3 text-slate-800 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>
            <Star/>
            <div className='flex justify-between py-3 my-1.5 mx-auto px-2 font-medium '>
                <h3 className='text-2xl '>$ 12</h3>
                <Button className='px-8 bg-red-800 '
                onClick={()=>dispatch(addCart(id))} 

                >Add</Button>
            </div>
        </div>
    </div>
</div>
  )
}

export default MenuCard