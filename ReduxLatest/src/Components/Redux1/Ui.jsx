import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {clearAll, decriment, incriment} from './Slice'

const Ui = () => {
    const {Amount} = useSelector(data => data.number);
    const dispach =  useDispatch()
  return (
    <div>
      <h2>Welcom To redux</h2>
      <p>Show Amount : {Amount}</p>
      <button onClick={() => dispach(incriment(Amount))}>Incriment</button>
      <button onClick={() => dispach(decriment(Amount))}>Dcrmeent</button>
      <button onClick={() => dispach(clearAll(Amount))}>Dcrmeent</button>
    </div>
  )
}

export default Ui
