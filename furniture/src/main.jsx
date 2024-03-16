import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'
import Cart from './component/Cart.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './component/Login.jsx'
import SignUp from './component/SignUp.jsx'
import AuthLayout from './component/AuthLayout.jsx'
import Shop from './component/Shop.jsx'
import BlogSection from './component/BlogSection.jsx'
import Home from './component/Home.jsx'
import ShopDetails from './component/ShopDetails.jsx'
import BlogDetails from './component/BlogDetails.jsx'
import Checkout from './component/Checkout.jsx'




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
       path:'/cart',
       element:  (<AuthLayout authentication = {false}>

         <Cart/>            
       </AuthLayout>)
       },
      
      {
       path:'/blog',
       element:  (<AuthLayout authentication = {false}>

         <BlogSection/>            
       </AuthLayout>)
       },
      {
       path:'/blog/detail',
       element:  (<AuthLayout authentication = {false}>

         <BlogDetails/>            
       </AuthLayout>)
       },
      {
       path:'/shop',
       element:  (<AuthLayout authentication = {false}>
         <Shop/>
       </AuthLayout>)
      },
      {
       path:'shop/product/:id',
       element:  (<AuthLayout authentication = {false}>
         <ShopDetails/>            
       </AuthLayout>)
      },
      {
       path:'/checkout',
       element:  (<AuthLayout authentication = {false}>
         <Checkout/>            
       </AuthLayout>)
      },
      {
       path:'/login',
       element:  
          <Login/>            
      },
      {
       path:'/signup',
       element:  
          <SignUp/>            
      },
      

    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={router}/>

    {/* <App /> */}
  </Provider>,
)
