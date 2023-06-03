import React, { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { useDispatch } from 'react-redux'

function Register() {
    const dispatch=useDispatch()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {signup,error,isLoading}=useSignup()

    const submitHandler=async()=>{
        await signup(email,password)
        
    }
  return (
    <div>
        
        <div className='w-[300px] mx-auto bg-gray-600 rounded-lg p-4 mt-[100px]'>
        <p className='font-bold text-2xl'>REGISTER TODAY!</p>
            <input className='p-2 m-2 rounded-lg' type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className='p-2 m-2 rounded-lg' type='password' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='bg-black rounded-lg w-[200px] p-2 text-white hover:text-green-600 font-bold' onClick={submitHandler}>Submit</button>
            {error && <p className='bg-white text-red-600 font-bold border-2 border-red-600 w-[200px] mx-auto py-2 my-2'>{error}</p>}
        </div>
    </div>
  )
}

export default Register