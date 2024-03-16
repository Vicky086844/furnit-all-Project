import React, { useEffect, useState } from 'react'
import Button from './Button'
import { product } from './Data'
import OrderCard from './OrderCard'
import Cart from './Cart'

const pasta = ["hello", "hell"]
function OrderMenu() {
  const items = ["All Catagory", "Pasta","Pizza","Dessert","Drink"]
  const [foodItem, setFoodItem] = useState([])
  const [selected, setSelected] = useState("All Catagory")
  const [page, setpage] = useState(1)

  const selectPage = (value) => {
    if (value >= 1 && value <= 3 && value !== page) {
      setpage(value)
    }
  }


  useEffect(() => {
    switch (selected) {
      case "Pasta":
        setFoodItem(pasta)
        break;
      case "All Catagory":
        setFoodItem(product)
        break;

      default:
        break;
    }

  }, [selected])

  return (
    <div className='bg-slate-50 py-8 relative'>
      <h1 className='my-4 text-4xl text-center font-medium'>Menu</h1>
      <div className='flex gap-4 my-6 justify-center'>
      {items.map((item) => (
        <Button className='bg-rose-800 font-semibold '
          active={selected === item}
          onClick={() => setSelected(item)}>
          {item}
        </Button>
        ))}
        </div>
      {/* both section  */}
      {/* isko solve krna hai */}
      {/* <h2 className='absolute left-10 '>{selected}</h2>
      <hr /> */}
      
      <div className='flex gap-4 justify-center max-w-7xl mx-auto '>
        <div className='flex flex-col w-fit '>
          <div className=' flex flex-wrap gap-2  justify-center px-2 rounded-xl '>
            
            {foodItem.slice(page * 6 - 6, page * 6).map((item) => ( <OrderCard />))}
          </div>
          <div className='flex justify-center gap-1 py-4 text-rose-800 font-medium '>
            <Button className='text-red-950 bg-red-200  ' onClick={() => selectPage(page - 1)} > Prev</Button>
            {[...Array(4)].map((_, i) => {
              return <Button key={i} className='bg-slate-50 shadow-lg text-red-950 font-bold ' onClick={() => selectPage(i + 1)}>{i + 1}</Button>
            })}
            <Button className='text-red-950 bg-red-200 ' onClick={() => selectPage(page + 1)}> Next</Button>
          </div>
        </div>
          <Cart />
      </div>
   </div>
  )
}

export default OrderMenu