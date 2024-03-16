import React from 'react'
import Button from './Button'

function About() {
  return (
    <div className='bg-rose-50 '>
    <article className='flex gap-7'>
        <div className=' py-8  my-5 justify-center rounded-full w-1/2 flex '>
            <img src="chef1.png" alt="chef" className='w-[400px] h-[400px] object-contain  ' />
        </div>
        <section className='flex flex-col gap-5  justify-center'>
            <h1 className='text-4xl font-bold'>About Our <br /><span className='text-rose-800'>Restaurant</span></h1>
            <p className='w-2/3 text-lg py-1.5   text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore dicta aliquam excepturi ratione ad officiis, nisi earum aspernatur. Error autem assumenda, doloremque aliquam reprehenderit quam consequuntur cum asperiores harum! Earum.</p>
            <Button className='w-fit bg-rose-800 font-medium '>Order Now</Button>
            
        </section>

    </article>
    <article className='flex gap-12 mx-auto max-w-7xl items-center rounded-3xl bg-gradient-to-l from-rose-200 to-rose-400   '>

        <div className='flex  justify-end py-3 '>
            <p className='w-1/2  text-lg py-1.5   text-gray-900'>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
            </p>
        </div>
        <div className=' py-8  justify-center w-full flex ' >
            <img src="food.png" alt="chef" className='w-[400px] h-[400px] object-contain  '/></div>
    </article>

    <article className='flex gap-7'>
        <div className=' py-8  my-5 justify-center rounded-full w-1/2 flex ' >
            <img src="chef3.png" alt="chef" className='w-[400px] h-[400px] object-contain  '/></div>
        <div className='flex flex-col gap-5  justify-center'>
            <h1 className='text-4xl font-bold'><span className='text-rose-800'>Owner</span> & Executive Chef</h1>
            <h3 className='text-2xl'>Ismail Marzuki</h3>
            <p className='w-2/3 text-lg py-1   text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </article>
    </div>

  )
}

export default About