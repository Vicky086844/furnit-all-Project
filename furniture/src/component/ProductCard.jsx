import React from 'react'
import { Link} from 'react-router-dom'

function ProductCard({ newProduct, item }) {
    return (
        <div className='w-1/4 ml-6 my-1.5 shadow-xl rounded-md' >
            {[item].map((product) =>
            (<Link to={`/shop/product/${product.id}`}> <div className=' relative w-full '>
                <img src={product.imgage || "chair4.png"} alt={product.name} className='w-[100%] h-[100%] rounded-t-md  ' />
                {newProduct && <button className='absolute right-6 top-4 bg-red-700 py-1.5 px-3 rounded-lg text-white'>New</button>}
                <button className='absolute left-6 bottom-4 font-medium bg-gray-700 py-1.5 px-3 rounded-sm text-white'>Living Room</button>
            </div>
                <div className='flex justify-between px-3 font-bold py-3'>
                    <p className=''> {product.name || "title"} </p>
                    <p> $ {product.cost || "amount"}</p>
                </div></Link>))}
        </div>

    )
}

export default ProductCard