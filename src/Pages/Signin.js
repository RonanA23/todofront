import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

function Signin() {
    const {login}=useLogin()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler=async()=>{
        await login(email,password)
        setEmail('')
        setPassword('')
    }
  return (
    <div>
        
        <div className='w-[300px] mx-auto bg-gray-600 rounded-lg p-4 mt-[100px]'>
        <p className='font-bold text-2xl'>SIGN IN TODAY!</p>
            <input className='p-2 m-2 rounded-lg' type='text' placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
            <input className='p-2 m-2 rounded-lg' type='text' placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
            <button className='bg-black rounded-lg w-[200px] p-2 text-white hover:text-green-600 font-bold' onClick={submitHandler}>Submit</button>
        </div>
    </div>
  )
}

export default Signin