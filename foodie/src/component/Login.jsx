import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login as authLogin,}from '../OrderSlice/CartSlice'
import { useDispatch } from 'react-redux'
import Button from './Button'
import authService from '../Appwrite/auth'
import {useForm} from "react-hook-form"
import Input from './Input'

function Login() {
    const navigate= useNavigate()
    const dispatch= useDispatch()
    const {register, handleSubmit}=useForm()
    const [error , setError]= useState('')
   

    const login= async(data)=>{
        // console.log(data);
        setError('')
        try {
            const session= await authService.login(data)
            if(session){
                // const userData = await authService.getCurrentUser()
                // if(userData) dispatch(authLogin(userData)) ek copy le maine 
                dispatch(authLogin(session))
                navigate('/')
            }    
        } catch (error) {
            setError(error.message)  
        }
    }

  return (
    
    <div className='flex items-center justify-center w-full py-4 my-8'>
        <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        
        <h2 className='text-center font-bold'>Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
        Don&apos;t have any account?&nbsp;
        <Link to='/signup'>
        Sign Up
        </Link> 
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}

       <form onSubmit={handleSubmit(login)} className='mt-8'>
        <div className='space-y-5'>
        <Input 
        label="Email:"
        type="email"
        placeholder="Enter your email "
        {...register('email', {
            required:true,
            // validate: for email is it correct or not using regex
        })} />
         
         <Input
         label="Password:"
         type="password"
         placeholder="Enter your password "
         {...register('password' ,{
            required:true,
         })}
          />
          <Button
          type="submit"
          className="w-full py-2 "
          > Sign in</Button>

        </div>

       </form>
  
        </div>
        
    </div>
      
  )
}

export default Login