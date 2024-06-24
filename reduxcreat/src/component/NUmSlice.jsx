import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Amount :0
}
const NUmSlice = createSlice({
    name : 'num',
    initialState,

    reducers: {
        incrment : (state, action) => {
            state.Amount =  action.payload + 1
        }
    }
})

export const {incrment} = NUmSlice.actions
export default NUmSlice.reducer
