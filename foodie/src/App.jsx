import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './component/HeroSection'
import Menu from './component/Menu'
import MenuCard from './component/MenuCard'
import Footer from './component/Footer'
import OrderMenu from './component/OrderMenu'
import Checkout from './component/Checkout'
import Home from './component/Home'
import Header from './component/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Header/>
      {/* <Home/> */}
      <Outlet/>
       {/* <Menu /> */}
      {/* <MenuCard/>
      <OrderMenu/>
      <Checkout/> */}
      <Footer/>
    </>
  )
}

export default App
