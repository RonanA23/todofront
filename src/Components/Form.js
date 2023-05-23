import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../API/todoSlice'

function Form() {
  const dispatch=useDispatch()
  const[newtodo,setNewtodo]=useState('')
  const[error,setError]=useState('')
  const submitHandler=async()=>{
    const response=await fetch('https://clownfish-garment.cyclic.app/api/todos/',{
      method:'POST',
      body:JSON.stringify({title:newtodo}),
      headers:{'Content-Type':'application/json'}
    })
    console.log('response is',response)

    const json=response.json()
    console.log('json is',json)
    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
    }
    dispatch(addItem({title:newtodo}))
    console.log('New tod o is',json)
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