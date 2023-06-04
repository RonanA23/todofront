import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../API/userSlice'

export const useSignup=()=>{
    const dispatch=useDispatch()
    const[error,setError]=useState(null)
    const[isLoading,setIsLoading]=useState(null)
    
    const signup=async(email,password)=>{
        setIsLoading(true)
        setError(null)

        const response=await fetch('https://clownfish-garment.cyclic.app/api/user/register',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({email,password})
        })
       
        const json=await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user',JSON.stringify(json))
            const stuff=JSON.stringify(json)
            setIsLoading(false)
            dispatch(addUser(stuff))
        }
    }

    return{signup,isLoading,error}
}