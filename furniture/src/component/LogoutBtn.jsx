import React from 'react'
import {useDispatch} from "react-redux"
import { logout } from '../Feature/AuthSlice'
import authService from '../Appwrite/auth'
import Button from './Button'

function LogoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler =()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <Button
    className='inline-block px-6 font-medium bg-teal-50 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</Button>
  )
}

export default LogoutBtn