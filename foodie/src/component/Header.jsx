import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button';
// import Button from './Button'
// import { useSelector } from 'react-redux'
// import SidebarNav from './SideNavbar'
// import LogoutBtn from './LogoutBtn'




function Header() {
  // const [menu, setmenu] = useState(false);
  const navItem = ["Home", "Menu",  "Order-online","Reservation","About-us", "Contact-us"];
  // const userlogged = useSelector(state => state.status);



return (
  <nav className='w-full h-16 bg-rose-100 flex justify-around items-center  '>
    <div className='flex gap-6  '>
    {/* <span className='font-bold text-3xl text-center cursor-pointer ' onClick={() => setmenu(!menu)}>≡  </span> */}
    <button className='text-2xl text-rose-950 font-semibold   '>Foodio.</button>
    </div>
    {/* <ul className='flex justify-center items-center gap-2 md:content-none  '> */}
    <ul className={` hidden md:flex`}>
      {navItem.map((item) => (<Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
      <li key={item} className='  px-3 py-1.5 cursor-pointer font-medium  rounded-lg '>
        {item}
        </li></Link>))}
    </ul>
    <div className='flex justify-center gap-2 font-medium'>
      {/* <button className='bg-rose-50 p-2 rounded'>🔍</button> */}


      <button className='bg-rose-50 p-2 rounded'><Link to="/order-online">🛒</Link></button>
      {/* {userlogged ? null : <LogoutBtn />} */}
       <Button className='bg-rose-700 rounded '><Link to="/login">Login</Link></Button> 
       <Button className='bg-rose-700 rounded '><Link to="/signup">sign up</Link></Button> 
    </div>
    {/* <SidebarNav setmenu={setmenu} menu={menu} /> */}
  </nav>
)
}

export default Header