import React, { useEffect } from 'react'
import Form from '../Components/Form'
import Items from '../Components/Items'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../API/todoSlice'
import { addUser } from '../API/userSlice'

function Home() {
  //https://clownfish-garment.cyclic.app/api/todos

  const user=useSelector((state)=>state.users.value)
  const stuff= useSelector((state)=>state.todos.value)
  const dispatch=useDispatch()

  useEffect(()=>{
    const juser=JSON.parse(localStorage.getItem('user'))
    if(juser){
      dispatch(addUser(juser))
      
    }
  },[])
  
  useEffect(()=>{
    const fetchData=async()=>{
      console.log('user is',user)
      const response= await fetch('https://mushy-handkerchief-lamb.cyclic.app/api/todos/',{
        headers:{'Authorization':`Bearer ${user.token}`}
      })
      const items= await response.json()
      
      if(!response.ok){
        console.log('Error',response)
      }
      else{    
        dispatch(setItems(items))
        console.log('fetching once')
      }
    }
    if(user){
    fetchData()}  
  },[user])

 

  return (
    <div>
         <Form/>
       {stuff?.map((item,i)=>(
        <Items key={i} item={item}/>
       ))}
    </div>
  )
}

export default Home