import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../API/todoSlice'

function Items({item}) {
    const dispatch=useDispatch()

    const deleteHandler=async()=>{ 
        dispatch(removeItem(item._id))

        const response= await fetch('https://clownfish-garment.cyclic.app/api/todos/' +item._id,{
          method:'DELETE',
        })
        const json=await response.json()
        console.log('you deleted',json)
    }
  return (
    <div className=
    'bg-gray-500 text-white flex justify-between items-center p-4 w-[300px] m-2 mx-auto rounded-lg font-bold py-4'>
        <p>{item.title}</p>
        <b className='hover:text-red-400 cursor-pointer' onClick={deleteHandler}>X</b>
    </div>
  )
}

export default Items