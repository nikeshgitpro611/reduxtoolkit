import {configureStore} from '@reduxjs/toolkit';
import Slice from './Slice';

const Store = configureStore({
    reducer : {
        number : Slice
    }
})

export default Store
