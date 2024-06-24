import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    Amount : 0,
    isLoading : true
}
const Slice = createSlice({
    name: 'number',
    initialState,

    reducers:{
        incriment : (state, action) =>{
          state.Amount =  action.payload + 1
        },
    
        decriment : (state, action) => {
          state.Amount = action.payload - 1
        },
        
        clearAll : (state) => {
          state.Amount = 0
        }
      }
})

export const {clearAll,decriment,incriment} = Slice.actions;

export default Slice.reducer
