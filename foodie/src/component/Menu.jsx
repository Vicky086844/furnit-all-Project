import React, { useState } from 'react'
import { product } from './Data'
import MenuCard from './MenuCard'
import Button from './Button'


function Menu() {
    const [page, setpage] = useState(1)

    const items = ['All Catagory', "Dinner", "Lunch"]

    const selectPage = (value) => {
        if (value >= 1 && value <= 3 && value !== page) {
            setpage(value)
        }
    }
    return (
        <article className=' bg-slate-100 py-6 '>
            <div className='text-center py-7 '  >
                <h1 className='md:text-2xl text-xl lg:text-3xl font-bold py-6 my-4 '>Our Popular Menu</h1>
                {items.map((item) => (<Button className='py-1 md:py-3 px-4 md:px-8 mr-3   rounded-lg bg-rose-900  font-semibold md:text-base text-sm '>{item}</Button>))}
            </div>

            <div className='flex px-2 md:px-8 md:gap-3 gap-1 justify-center  flex-col w-fit md:flex-row  flex-wrap' >
                {product.slice(page * 6 - 6, page * 6).map((item) => (
                    <MenuCard item={item} />
                ))}
            </div>
            <div className='flex justify-center gap-1 py-4 font-medium  '>
            <Button className='text-red-950 bg-red-200  ' onClick={() => selectPage(page - 1)} > Prev</Button>
            {[...Array(4)].map((_, i) => {
              return <Button key={i} className='bg-slate-50 shadow-lg text-red-950 font-bold ' onClick={() => selectPage(i + 1)}>{i + 1}</Button>
            })}
            <Button className='text-red-950 bg-red-200 ' onClick={() => selectPage(page + 1)}> Next</Button>

            </div>


        </article>
    )
}

export default Menu