import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'
import userReducer from './userSlice'

export const store =configureStore({
    reducer:{
        todos:todoReducer,
        users:userReducer
    }
})