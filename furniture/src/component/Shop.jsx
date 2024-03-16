import React, { useState } from 'react'
import ProductCard from './ProductCard'
import Button from './Button';
import { product } from './Data';
import { Range } from "react-range";

const MIN_PRICE = 50;
const MAX_PRICE = 1000; // Set your desired maximum price

function Shop() {
  const [page, setpage] = useState(1)

  const [priceFilter, setPriceFilter] = useState([MIN_PRICE, MAX_PRICE]);

  const minPrice = product.reduce((min, product) => Math.min(min, product.price), Infinity);
  const maxPrice = product.reduce((max, product) => Math.max(max, product.price), -Infinity);

  const selectPage = (value) => {
    if (value >= 1 && value <= 4 && value !== page) {
      setpage(value)
    }
  }

  return (
    <>
      {/* isko bhi wrap kar dunga HeroSection ke sath component bna na h  */}
      <div className=" flex flex-col items-center justify-center bg-gradient-to-r from-teal-200 to-emerald-400  py-7 h-[50vh]">
        <div className='w-1/2  '>
          <h3 className='text-lg'>Best Room Decor Items</h3>
          <h1 className='text-2xl '>Our goods have the best quality and materials in the world.</h1>
          <button className='bg-white shadow-lg text-teal-800 py-3 px-4 my-3 rounded-lg font-medium  '>Shop Now</button>
        </div>
      </div>

      <div className='flex flex-1  '>
        <div className='flex flex-col w-1/4 bg-teal-100 text-center '>
          <div className='flex flex-col w-fit gap-3 px-2'>
            <h2>Filter By Price</h2>
            <div className=' flex gap-2 w-[20%] h-12 px-1 rounded-md'>
              <input type="number" defaultValue={500} className='pl-2 w-fit' />
              <input type="number" defaultValue={2000} className='pl-2 w-fit' />
            </div>
            {/* <input type="range" className='my-2' /> */}
            <Range
              step={10}
              min={minPrice}
              max={maxPrice}
              values={priceFilter}
              onChange={(values) => setPriceFilter(values)}
              // Customize the appearance of the slider
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{ ...props.style, height: '36px', display: 'flex', width: '100%' }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: `linear-gradient(to right, #ccc, #548BF4, #ccc)`,
                      alignSelf: 'center',
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '16px',
                    width: '16px',
                    borderRadius: '1px',
                    backgroundColor: '#FFF',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 1px 2px #888888',
                  }}
                >
                  <div
                    style={{
                      height: '8px',
                      width: '3px',
                      backgroundColor: isDragged ? '#548BF4' : '#CCC',
                    }}
                  />
                </div>
              )}
            />
          </div>
          <div className='bg-teal-100'>
            <h2>Product Tag</h2>
            {[...Array(6)].map((tag, i) => (<div key={i} className='flex  gap-3'>
              <Button>{tag || "chair"}</Button>
            </div>))}
          </div>

        </div>

        <div className='  w-3/4 flex flex-col bg-teal-100 '>

          <div className='p-6 flex justify-center gap-2 bg-teal-100'>
            <input type="search" placeholder='search here ...' className='w-[40%] h-12 px-3 rounded-md' />
            <button className='bg-red-600 py-1.5 px-4 font-medium text-white rounded-md'>Search</button>
          </div>
          {/* pagination */}
          <div className=' bg-slate-50 w-full h-fit gap-3 py-5 flex flex-wrap justify-center '>
            {product
              // .filter((product) => product.price >= priceFilter[0] && product.price <= priceFilter[1])
              .slice(page * 9 - 9, page * 9)
              .map((item, i) =>
                (<ProductCard key={i} item={item} />))}
          </div>
          <div className='flex justify-center gap-1 py-4 font-medium bg-slate-50   '>
            <Button className='bg-white text-emerald-950 ' onClick={() => selectPage(page - 1)} > Prev</Button>
            {[...Array(4)].map((_, i) => {
              return <Button key={i} className='py-2 px-1 bg-white text-emerald-950 font-medium ' onClick={() => selectPage(i + 1)}>{i + 1}</Button>
            })}
            <Button className='bg-white text-emerald-950 ' onClick={() => selectPage(page + 1)}> Next</Button>

          </div>
        </div>

      </div>
      {/* {last wala div hai } */}
    </>
  )
}

export default Shop