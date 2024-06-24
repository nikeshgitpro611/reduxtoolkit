import {configureStore} from '@reduxjs/toolkit'
import NUmSlice from './NUmSlice'

const NumStore = configureStore({
    num : NUmSlice
})

export default NumStore
