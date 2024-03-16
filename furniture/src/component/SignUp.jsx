import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {login }from '../Feature/AuthSlice'
import { useDispatch } from 'react-redux'
import Input from './Input'
import Button from './Button'
import authService from '../Appwrite/auth'
import { useForm } from "react-hook-form"


function SignUp() {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    setError('')
    try {
      const userData = await authService.createAccount(data)
      if (userData) {
        // const userData = await authService.getCurrentUser()
        // if (userData) dispatch(login(userData))  copy le li bas 
        dispatch(login(userData))
        navigate('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={` mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}> 
     
        {/* <div className='mb-2 flex justify-center '>
          <span className='inline-block w-full max-w-[100px]'><Logo /></span>
        </div> */}
        <h2 className='text-center font-bold'>Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link to='/login'>
            Sign In
          </Link>
        </p>
        {error && <p className='text-red-500 text-center'>{error}</p>}

        <form onSubmit={handleSubmit(create)} className='mt-8'>
          <div className='space-y-5'>
            <Input
              label="Name:"
              type="text"
              placeholder="Enter your name "
              {...register('name', {
                required: true,
              })}
            />
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email "
              {...register('email', {
                required: true,
                // validate: for email is it correct or not using regex
              })} />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password "
              {...register('password', {
                required: true,
              })}
            />
            <Button
              type="submit"
              className="w-full py-2 "
            > Create Account</Button>

          </div>

        </form>

      </div>

    </div>
 )
  //

}

export default SignUp