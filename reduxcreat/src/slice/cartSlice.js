import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increase: (state, action) => {
            console.log('STATE : ', action);
            state.amount = action.payload + 1
        },

        clearall: (state) => {
            state.amount = 0
        }

    }
});


export const { increase,clearall } = cartSlice.actions;
export default cartSlice.reducer;