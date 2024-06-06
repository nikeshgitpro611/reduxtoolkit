import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import {increase, clearall} from './slice/cartSlice'
import {Provider} from 'react-redux'
// import Store from '../TASK/store';
// import {Block} from './icon'

const Navbar = () => {
  const dispatch =  useDispatch()
  const { cartItems, amount, total } = useSelector(stat => stat.cart);



  return (
    <div>
      {/* <Block /> */}
      <h1>Redux Tool Kit  ...</h1>
      <h1>{amount}</h1>
      <button onClick={()=> dispatch(increase(amount))}>Click value +1</button>
      <button onClick={()=>dispatch(clearall())}>All Clear</button>
    </div>
  )
}

export default Navbar
