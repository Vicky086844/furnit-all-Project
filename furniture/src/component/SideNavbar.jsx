import { Link } from "react-router-dom"
import LogoutBtn from "./LogoutBtn"



function SidebarNav({ menu, setmenu }) {
  const list = ["Home", "Shop", "Blog", "About", "Contact"]
  return (
    <>

      {menu ? <nav className='w-48 min-h-svh py-12  overflow-hidden bg-teal-100 z-10 absolute top-0 left-0' >
        <span className='absolute right-2.5 top-2 cursor-pointer font-bold text-2xl p-2 ' onClick={() => setmenu(!menu)}>x</span>
        <ul className='font-medium'>
          {list.map((item) => (<li key={item} className=' text-center py-1 cursor-pointer font-medium mx-auto hover:text-emerald-800 text-lg'><Link to={item === "Home" ? `/`  : `/${item.toLowerCase()}`}>{item}</Link > </li>))}
        </ul>
      </nav> : null}
    </>
  )
}

export default SidebarNav