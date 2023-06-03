import React, { useEffect } from 'react'
import { useLogout } from '../hooks/useLogout'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../API/userSlice'
import {RxExit} from 'react-icons/rx'


function Navbar() {
  const dispatch=useDispatch()
  const user= useSelector((state)=>state.users.value)

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch(addUser(user))
      
    }
    console.log('user email in navbar',user?.email)
  },[])

 
  
 
  const {logout}=useLogout()

  const logoutHandler=()=>{
    logout()
    dispatch(removeUser())
  }
  return (
    <div className='bg-blue-400 w-full flex justify-between items-center text-white font-bold text-2xl h-12 px-4 '>
        <p>
          To DO List
        </p>
        <div className='flex justify-between items-center'>
          {!user &&     <div className='flex justify-between'>
          <Link to='register'>
          <p className='text-gray-500 hover:text-green-800 text-sm mx-2'>Register</p>
          </Link>
          <Link to='signin'>
          <p className='text-gray-500 hover:text-green-800 text-sm mx-2'>Log in</p>
          </Link>

          </div> }
      
          {user &&<p className='text-green-600 font-bold text-sm'>{user?.email}</p>}
          <div>
            {user && <p className='text-sm text-gray-500 hover:text-red-600 cursor-pointer' onClick={logoutHandler}><RxExit size={20} className='font-bold mr-2 ml-2'/></p>}
          
        </div>
       
          
         
        </div>
     
     
    </div>
  )
}

export default Navbar