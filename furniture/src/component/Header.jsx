import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { useSelector } from 'react-redux'
import SidebarNav from './SideNavbar'
import LogoutBtn from './LogoutBtn'




function Header() {
  const [menu, setmenu] = useState(false);
  const navItem = ["Home", "Shop", "Blog", "About", "Contact"];
  const userlogged = useSelector(state => state.status);



return (
  <nav className='w-full h-16 bg-teal-100 flex justify-around items-center '>
    <div className='flex gap-6  '>
    <span className='font-bold text-3xl text-center cursor-pointer ' onClick={() => setmenu(!menu)}>≡  </span>
    <button className='text-2xl '>Furnit</button>
    </div>
    {/* <ul className='flex justify-center items-center gap-2 md:content-none  '> */}
    <ul className={` hidden md:flex`}>
      {navItem.map((item) => (<li key={item} className='hover:bg-teal-100 px-3 py-1.5 cursor-pointer font-medium  rounded-lg '>
        <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>{item}</Link>
        </li>))}
    </ul>
    <div className='flex justify-center gap-3'>
      <button className='bg-teal-50 p-2 rounded'>🔍</button>


      <button className='bg-teal-50 p-2 rounded'><Link to="/cart">🛒</Link></button>
      {userlogged ? null : <LogoutBtn />}
      {userlogged ? <Button><Link to="/login">Login</Link></Button> : null}
      {userlogged ? <Button><Link to="/signup">signup</Link></Button> : null}
    </div>
    <SidebarNav setmenu={setmenu} menu={menu} />
  </nav>
)
}

export default Header