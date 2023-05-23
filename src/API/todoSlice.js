import {createSlice} from '@reduxjs/toolkit'

export const todoSlice=createSlice({
    name:'todos',
    initialState:{
        value:[]
    },
    reducers:{
        setItems:(state,action)=>{
            state.value=action.payload
        },
        addItem:(state,action)=>{
            state.value=[action.payload,...state.value]
        },
        removeItem:(state,action)=>{
            const itemId=action.payload
            const newValues=state.value.filter(item=>{
                return item._id !==itemId
            })
            state.value=newValues
        }
    }
})

export const {setItems,addItem,removeItem}=todoSlice.actions
export default todoSlice.reducer