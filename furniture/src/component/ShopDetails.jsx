import React, { useState } from 'react'
import Button from './Button'
import DetailSlider from './DetailSlider'
import { useDispatch } from 'react-redux'
import { increamentCart, decreamentCart, addCart } from '../Feature/AuthSlice'
import { useParams } from 'react-router-dom'
import { product } from './Data'

function ShopDetails() {
    const { id } = useParams()
    const [qty, setqty] = useState(1)

    const dispatch = useDispatch()

    const increament = (id) => {
        setqty((prev) => prev + 1)
        dispatch(increamentCart(id))
    }
    const decreament = (id) => {
        setqty((prev) => prev - 1)
        dispatch(decreamentCart(id))
    }

    const addToCart = (item) => {
        dispatch(addCart({ ...item, qty }))
    }

    return (
        <div className='max-w-7xl mx-auto '>
            {product.filter((item) => item.id == id).map((item) => (
                <div key ={item.id} className='flex justify-center   py-10 bg-gradient-to-br from-sky-100 to-teal-200 shadow-teal-700 shadow-2xl px-8 h-fit '>
                    <div className='w-1/4 h-fit   py-8 '>
                        <img src={item.image || "chair4.png"} alt="chair" className='w-[100%] h-[100%] object-cover rounded-lg' />
                        </div>
                    <div className=' flex flex-1 flex-col gap-4 px-10 py-7 mx-8 '>
                        <h1 className='text-lg font-medium'>{"Complete set of sofa, pillows and bed sheets"}</h1>
                        <h2 className='text-lg'> $ {item.cost || "amount"}</h2>
                        <h3 className='text-gray-600'>Categories :Chair, New Arrivals, Special</h3>
                        <h3 className='text-gray-600'>Tags :Black, Chair</h3>
                        <p className=' w-3/4 text-gray-900'>In order to sit comfortably for long periods, people need freedom of movement. The Form rocking chair has a molded plastic shell with a wide, curved seat, which gives plenty of opportunity for changing one’s sitting position.</p>
                        <div className='flex gap-6 font-medium '>
                            <div className='flex py-1 font-medium  rounded  gap-2 '>
                                <Button className='bg-rose-400 text-center py-2  ' onClick={() => increament(item.id)}>+</Button>
                                <p className=' font-medium py-2 h-fit '>{qty}</p>
                                <Button onClick={() => decreament(item.id)} >-</Button>
                            </div>
                            <Button
                                onClick={addToCart(item)}
                                className='text-center text-white bg-black py-1 px-2  '
                            >Add to Cart</Button>
                            <Button className='bg-gray-200  '> ❤️</Button>
                        </div>
                    </div>
                </div>
            ))}

            <div className='py-10 px-8 bg-gradient-to-l from-teal-100 to-slate-50 '>
                <div className='flex gap-5 underline py-6 px-8 text-2xl cursor-pointer font-medium '>
                    <h2>Description</h2>
                    <h2>Review</h2>
                </div>
                <div className='flex h-fit '>

                    <div className='w-3/4 px-8 flex-grow mr-8 ' >
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        </p>
                        <br />
                        <p>
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </p>
                    </div>
                
                    <DetailSlider />

                    {/* last mai ek card ki series same pagination ya carsoul jo bhi hai ye, product list h then footer 

                     */}
                </div>

            </div>

        </div>

    )
}

export default ShopDetails