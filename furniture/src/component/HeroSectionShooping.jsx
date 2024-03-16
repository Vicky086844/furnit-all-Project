import React from 'react'

function HeroSectionShooping() {

    const obj= {
        image:["chair.png"],
        title:["Fast Shipping","Safe Delivery","24 hours CS","365 Days Return"],
        text:["Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has"]
    }
    return (
        <div className='flex justify-center bg-gradient-to-b from-teal-50 to-teal-100  '>

        <article className=' flex gap-4 md:flex-row flex-col py-10 px-8 max-w-7xl  '>
            <section className='flex flex-col gap-3 md:w-3/4 w-full px-8 '>
                <div className='text-center font-medium md:text-3xl text-xl py-6 px-1'>
                    <h1 >We guarantee the safety of your shopping</h1>
                </div>
                <div className='flex flex-wrap py-8 px-10  '>
                    {/* {Object.keys(obj).map((key)=> obj[key].map((item)=>(
                            <div className='flex py-6 px-4 gap-3 my-2  flex-col  w-1/2 '>
                            <div className='px-2'>
                                <img src={item.image||"chair4.png"} alt="" className='w-14 h-15 rounded-full object-cover' />
                            </div>
                            <h4>{item}</h4>
                            <p className='w-3/4'>
                                {item}
                            </p>
                        </div>
                        )))} */}
                    <div className='flex py-6 px-4 gap-3 my-2  flex-col  w-1/2 '>
                        <div className='px-2'>
                            <img src="chair.png" alt="" className='w-14 h-15 rounded-full object-cover' />
                        </div>
                        <h4>Fast Shipping</h4>
                        <p className='w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
                    </div>
                    <div className='flex py-6 px-4 gap-3 my-2 flex-col  w-1/2 '>
                        <div className='px-2'>
                            <img src="chair.png" alt="" className='w-14 h-15 rounded-full object-cover' />
                        </div>
                        <h4>Safe Delivery</h4>
                        <p className='w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
                    </div>
                    <div className='flex py-6 px-4 gap-3 my-2 flex-col  w-1/2   '>
                        <div className='px-2'>
                            <img src="chair.png" alt="" className='w-14 h-15 rounded-full object-cover' />
                        </div>
                        <h4>24 hours CS</h4>
                        <p className='w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
                    </div>
                    <div className='flex py-6 px-4 gap-3 my-2 flex-col w-1/2 '>
                        <div className='px-2'>
                            <img src="chair.png" alt="" className='w-14 h-15 rounded-full object-cover' />
                        </div>
                        <h4>365 Days Return</h4>
                        <p className='w-3/4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has</p>
                    </div>
                </div>
            </section>
            <section className='w-fit self-center h-fit '>
                {/* <div> */}
                    <img src="furnit2.png" alt="chair" className='w-[400px] h-[500px] object-cover rounded-lg ' />
                    {/* </div> */}
            </section>

        </article>
        </div>

    )
}

export default HeroSectionShooping