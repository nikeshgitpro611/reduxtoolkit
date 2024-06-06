import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Amount: 0
}

const Taskreduser = createSlice({
    name: 'number',
    initialState,
    reducers: {
        numberInc: (state, action) => {
            state.Amount = action.payload + 1;
        },
        numberDec: (state, action) => {
            state.Amount = action.payload - 1;
        },
        numberClr: (state) => {
            state.Amount = 0;
        }
    }
});

export const { numberInc, numberDec, numberClr } = Taskreduser.actions;
export default Taskreduser;