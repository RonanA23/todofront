import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../API/todoSlice'

function Form() {
  
  const user= useSelector((state)=>state.users.value)
  const dispatch=useDispatch()
  const[newtodo,setNewtodo]=useState('')
  const[error,setError]=useState('')
  const submitHandler=async()=>{
    const response=await fetch('http://localhost:5000/api/todos/',{
      method:'POST',
      body:JSON.stringify({title:newtodo}),
      headers:{'Content-Type':'application/json',
    'Authorization':`Bearer ${user.token}`}
    })

    const json=response.json()
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
    }
    dispatch(addItem({title:newtodo}))
    }
  return (
    <div className='bg-green-600 mx-auto w-[300px] m-2 p-4 rounded-lg'>
        <input type='text' placeholder='Add a ToDo' onChange={(e)=>setNewtodo(e.target.value)}/>
        <button
          onClick={submitHandler}
         className='bg-blue-400 rounded-lg mx-2 p-1 text-white font-bold hover:bg-blue-500'>Click</button>
   {error&&<p>{error}</p>}
    </div>
  )
}

export default Form