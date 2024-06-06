import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {numberClr, numberDec,numberInc} from './taskslice'
const Forntend = () => {
    //Showing Store Data
    const {Amout} =  useSelector(data => data.number)
    const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Concept++</h1>
      <p>{Amout}</p>
      <button onClick={() => dispatch(numberInc(Amout))}>Increase</button>
      <button onClick={() => dispatch(numberDec(Amout))}>Decress</button>
      <button onClick={() => dispatch(numberClr(Amout))}>Clear</button>
    </div>
  )
}

export default Forntend
