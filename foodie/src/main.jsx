import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from "../src/Store/Store.js"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './component/Home.jsx'
import Menu from './component/Menu.jsx'
import OrderMenu from './component/OrderMenu.jsx'
import Checkout from './component/Checkout.jsx'
import About from './component/About.jsx'
import Reservation from './component/Reservation.jsx'
import ReservationDetail from './component/ReservationDetail.jsx'
import ReservationConfimation from './component/ReservationConfimation.jsx'
import ReservationCancel from './component/ReservationCancel.jsx'
import Contact from "./component/Contact.jsx"
import Login from './component/Login.jsx'
import Signup from './component/Signup.jsx'



const router = createBrowserRouter([
  {
    path: '/', 
    element: <App/>,
    children: [
      {
       path:'/',
       element:  <Home/>       
      },
      {
       path:'/menu',
       element:  <Menu/>       
      },
      {
       path:'/order-online',
       element:  <OrderMenu/>       
      },
      {
       path:'/checkout',
       element:  <Checkout/>       
      },
      {
       path:'/about-us',
       element:  <About/>       
      },
      {
       path:'/reservation',
       element:  <Reservation/>       
      },
      {
       path:'/details',
       element:  <ReservationDetail />       
      },
      {
       path:'/confirmation',
       element:  <ReservationConfimation />       
      },
      {
       path:'/cancel',
       element:  <ReservationCancel />       
      },
      {
       path:'/contact-us',
       element:  <Contact/>       
      },
      {
       path:'/login',
       element:  <Login/>       
      },
      {
       path:'/signup',
       element:  <Signup />       
      },
]},
    ]);   

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>
  </Provider>,
)
