import React, { useState,useEffect } from 'react'
import Button from './Button'


function DetailSlider() {
    const [current, setCurrent] = useState(0)
    const detail = ["Content1", "Content2", "Content3", "Content4"]

    const slider =()=> {
    setCurrent((current)=>current >= detail.length -1 ? 0: current + 1)
    }
    // baad mai dekh lunga 
    useEffect(() => {
       const id= setInterval(slider, 3200);
        return()=> clearInterval(id);
      }, [])
    

    // function prevSlide() {
    //     setCurrent(current === 0 ? detail.length  : current - 1)

    // }
    // function nextSlide() {
    //     setCurrent(current === detail.length - 1 ? 0 : current + 1)
    // }



    return (
        <>
            {detail.map((item, index) => current === index && (
                // <Slider key={item} item={item}/>
            <div key={index} className=' w-2/4 flex shadow-2xl flex-grow mr-8 '>
                <article className='w-full bg-slate-100 flex flex-col gap-2 justify-center items-center  '>
                    <h3 className='font-medium text-lg'>Living Room </h3>
                    <h1 className='text-2xl text-center px-5'>{item}</h1>
                     {/* "the best foam padded chair" */}
                    <Button className='my-4 py-2 px-3 text-emerald-950 bg-slate-50 border-2 border-emerald-900 font-medium '> Shop Now</Button>
                </article>
                <div className='w-fit  '>
                    <div className='w-fit h-full' >
                     <img src= "../../chair2.png" className =' w-[100%] h-[100%] object-cover ' alt="chair" />
                    </div>
                </div>
            </div>
            ))}
            <div className='flex flex-col items-center justify-center gap-1'>

                {/* <Button onClick={prevSlide}>left</Button> */}
                {[...Array(detail.length)].map((_, index) => (<Button className='py-1 px-1 bg-slate-100 text-emerald-950 font-medium  ' key={index} onClick={() => setCurrent(index)}>{index + 1}</Button>))}
                {/* <Button onClick={nextSlide}>right</Button> */}
            </div>
        </>

    )
}

export default DetailSlider