import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Proctecd({children , authentication= true}) {
const [loader, setLoader]= useState(true)
const navigate= useNavigate()
const authStatus  = useSelector(state => state.status)
useEffect(()=>{
    if(authentication && authStatus !== authentication){
        navigate('/login')
    }
    else if(!authentication && authStatus!== authentication){
        navigate('/cart')
    }
    setLoader(false)
},[authStatus,authentication,navigate])

  return loader ? <h2>Loading...</h2> : <>{children}</>
}

