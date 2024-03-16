import React from 'react'
import ProductCard from './ProductCard'
import {  Link } from 'react-router-dom';
import {product} from"./Data"


function Product() {
  const newProduct= true;

  return (
    <>
    <div className='flex flex-col gap-2 py-8 bg-slate-50 '>
    <div className='text-3xl text-center py-2'>New Arrival</div>
    <Link to="/shop">
    <div className='flex gap-2 py-6 flex-wrap justify-center px-8 mx-auto max-w-7xl  flex-col md:flex-row '>
      
      {product.slice(0,6).map((item,i)=>(<ProductCard key={i} newProduct={newProduct} item={item} />))}
     
    </div>
    </Link>
    
    </div>

    </>
  )
}

export default Product