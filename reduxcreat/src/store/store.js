import {configureStore} from '@reduxjs/toolkit'
import cartSlice from '../slice/cartSlice';
// import Taskreduser from '../../TASK/taskslice';

const store = configureStore({
    reducer : {
        cart : cartSlice,
        // number : Taskreduser
    }
});

export default store