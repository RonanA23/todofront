//import {useDispatch} from 'react-redux'

import { useDispatch } from "react-redux"
import { removeUser } from "../API/userSlice"
import { setItems } from "../API/todoSlice"

export const useLogout=()=>{
    const dispatch=useDispatch()

    const logout=()=>{
        localStorage.removeItem('user')
        dispatch(removeUser())
        dispatch(setItems([]))
    }
    return {logout}
}