import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
    // const Customer = ["Order Status", "Collections","Our Story","Affiliates","Security"   ]
    // const Information = ["Customer Service", "Careers","FAQ"  ]
    // const follow = ["😁", "😒","😂","😊"  ]


    const footerData = {
        Furnit: ["Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir."],

        Customer: ["Order Status", "Collections", "Our Story", "Affiliates", "Security"],
        Information: ["Customer Service", "Careers", "FAQ"],
        Follow: ["😁", "😒", "😂", "😊"],

    }



    // isko bhi Component bna skte hn







    return (
        <footer className='relative bottom-0 left-0 right-0 top-[100%] bg-black opacity-95  '>
            <section className='flex h-4/6  gap-5 py-5 px-10 justify-center  mx-auto max-w-7xl '>
                {Object.keys(footerData).map((key) => (
                    <ul className=' px-8 py-6' key={key}>
                        <h1 className='text-2xl text-rose-800  font-bold'>{key}</h1>
                        {footerData[key].map((item) => (<li className='text-white  font-medium py-1.5 w-1/2' key={item}>{item}</li>
                        ))}
                    </ul>
                ))}
                {/* <section className='flex justify-evenly w-full  '>
               
                
                
                </section> */}

            </section>
            {/* color change please */}
            {/* <section className='flex h-4/6 bg-teal-200 py-5   '>
                <article className='flex w-1/2 flex-col px-6'>
                    <h2 className='text-xl text-white font-medium'>Furnit</h2>
                    <p className='w-1/2'>Lorem ipsum dolor sit amet litam consectetur adipiscing elit, facilisi vivamus proin lit laoreet phasel alilus porttitor inter, facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.</p>
                </article>
                <section className='flex justify-evenly w-full  '>
                <article className='flex flex-col'>
                    <h2 className='text-xl  font-medium' >Customer</h2>
                    <ul>
                        {Customer.map((item)=>(<li key={item}>{item}</li>))}
                    </ul>
                </article>
                <article className='flex flex-col'>
                    <h2 className='text-xl  font-medium'>Information</h2>
                    <ul>
                        {Information.map((item)=>(<li key={item}>{item}</li>))}
                    </ul>
                </article>
                <article className='flex flex-col'>
                    <h2 className='text-xl  font-medium'>Follow Us</h2>
                    <ul>
                        {follow.map((item,i)=>(<li key={i}>{item}</li>))}
                    </ul>
                </article>
                
                </section>

            </section> */}
        </footer>
    )
}

export default Footer