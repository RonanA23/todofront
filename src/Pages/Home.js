import React, { useEffect } from 'react'
import Form from '../Components/Form'
import Items from '../Components/Items'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../API/todoSlice'

function Home() {
  //https://clownfish-garment.cyclic.app/api/todos

  const user=useSelector((state)=>state.users.value)
  const stuff= useSelector((state)=>state.todos.value)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    const fetchData=async()=>{
      console.log('useeffect user',user)
      console.log('useeffect user.token',user.token)
      const response= await fetch('http://localhost:5000/api/todos/',{
        headers:{'Authorization':`Bearer ${user.token}`}
      })
      const items= await response.json()
      
      if(!response.ok){
        console.log('Error',response)
      }
      else{
        console.log('ITEMS',items)
        dispatch(setItems(items))
      }
    }
    if(user){
    fetchData()}  
  },[dispatch,user])

 

  return (
    <div>
        {user ?(<p className='bg-red-700 w-[200px] h-8 text-white font-bold'>{user.email}</p>):(<p>no user</p>)}
         <Form/>
       {stuff?.map((item,i)=>(
        <Items key={i} item={item}/>
       ))}
    </div>
  )
}

export default Home