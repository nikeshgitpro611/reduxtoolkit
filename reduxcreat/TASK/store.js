import { configureStore } from "@reduxjs/toolkit";
import Taskreduser from './taskslice'

const Store = configureStore({
    reducer:{
        number: Taskreduser
    }
}) ;

export default Store;