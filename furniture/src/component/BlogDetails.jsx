import React, { useState } from 'react'
import Input from "./Input"
import Button from './Button'
import { product } from './Data'

function BlogDetails() {
    const [text, setText] = useState('')
    return (
        <div className='bg-gradient-to-tr from-blue-50 to-emerald-300'>
            <section className='flex flex-col gap-3 items-center sm:text-base text-lg bg-slate-50 py-6'>
                <h1 className='md:text-3xl font-medium py-4 text-center text-wrap w-2/3 text-xl'>Why should you choose good wood</h1>
                <p className=' '><span>by admin</span><span>{''}</span></p>
                <h3 className='text-wrap px-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                <div className='w-full h-2/4 flex justify-center shadow-xl  items-center my-2 py-2'>
                    <img src="../../furnit3.png" alt="hello" className='w-[800px] h-[500px] object-cover rounded-md md:sshadow-md' />

                </div>
            </section>

            <div className='w-full flex my-3.5 py-6  gap-2 justify-center  max-w-7xl mx-auto flex-col md:flex-row'>
                <div className=' md:w-2/4 h-fit w-fit   '>
                 <img src="../../chair4.png" alt="chair" className='w-[500px] h-[500px]  ' />
                </div>

                <div className='flex md:items-center md:text-lg text-base text-gray-700 justify-center gap-5 flex-col py-10 px-8 mx-5 md:w-2/4 w-full '>
                    <h2 className='md:text-2xl text-xl font-medium text-center '>How to choose the best chair</h2>
                    <p className='w-full md:w-fit'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit delectus vero nam mollitia soluta exercitationem at, natus sint. Nesciunt, vel neque nisi voluptatibus et repudiandae aliquam! Itaque nulla accusantium tempora, sit iusto nobis reiciendis rerum hic qui, ipsum magni consequuntur.</p>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit delectus vero nam mollitia soluta exercitationem at, natus sint. Nesciunt, vel neque nisi voluptatibus et repudiandae aliquam! Itaque nulla accusantium tempora, sit iusto nobis reiciendis rerum hic qui, ipsum magni consequuntur.
                    </p>
                </div>
            </div>

             <article className='w-full py-8 flex flex-col md:flex-row justify-between gap-5 mx-auto max-w-7xl '>
                <section className='px-8 md:w-3/4 py-6'>
                    <h2 className='md:text-2xl text-xl font-medium text-center  '>How to choose the best chair</h2>
                    <p className=' md:w-3/4 w-full md:text-lg text-base my-2.5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit delectus vero nam mollitia soluta exercitationem at, natus sint. Nesciunt, vel neque nisi voluptatibus et repudiandae aliquam! Itaque nulla accusantium tempora, sit iusto nobis reiciendis rerum hic qui, ipsum magni consequuntur.</p>

                    <div className='flex flex-col text-lg gap-5 w-fit my-2 py-2.5 '>
                        <p className=' md:w-3/4 w-full md:text-lg text-base my-2.5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vero corrupti dolorem! Modi placeat architecto enim, provident non laborum eius magnam, excepturi ad at est in laudantium possimus accusantium molestias.</p>
                        <div className='flex md:w-3/4 w-full md:flex-row flex-col object-center gap-5 '>
                            <img src="../../furnit4.png" alt="chair" className='w-[400px] h-[400px] rounded-md' />
                            <img src="../../furnit3.png" alt="chair" className='w-[400px] h-[400px] rounded-md' />
                        </div>
                    </div>
                    <div className='flex flex-col gap-3  py-2.5 px-2' >
                        <h3 className=' text-2xl'>Tag</h3>
                        <div className='flex gap-3 font-medium py-1 '>
                            {[...Array(3)].map((item,index) => (<Button key={index} className=' py-2 px-5 '>chair</Button>))}

                        </div>
                    </div>

                    <form className='md:w-3/4 w-full py-6 outline-none ' >
                        <div className='flex gap-5'>
                            <Input label="Your Name" />
                            <Input label="Your Email" />
                        </div>
                        <br />
                        <label htmlFor="message">Your Comments</label>
                        <textarea name="" id="message" className='w-full h-11 my-6 ' placeholder={"type your review here..."} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        <Button className='py-2.5 font-medium '>Submit</Button>
                    </form>
                </section>

                <article className='bg-teal-50 md:w-1/3 w-full h-fit ml-auto py-8 rounded-md shadow-2xl '>
                    <div className='flex gap-2 py-2 px-6'>
                        <Input placeholder="find something..." />
                        <Button className='font-medium '>search</Button>
                    </div>
                    <div className='py-6 px-8'>
                        <p className='text-lg'>Recent Post</p>
                        {product.slice(0, 4).map((item) => (
                            <div key={item.id} className='flex gap-6 py-3  '>
                                <div>
                                    <img src={item.image} alt="item.title" className='w-[90px] rounded-md ' />

                                </div>
                                <div className='flex flex-col'>
                                    <h3>How to choose a chair at home </h3>
                                    <p>{"month"}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </article>
            </article>
        </div>
    )
}

export default BlogDetails
