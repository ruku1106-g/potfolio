import React from 'react'
import {useDispatch} from 'react-redux'
import {addmoney, removemoney} from './store'

export default function ButtonUpdate() {
   const dispatch=  useDispatch()
  return (
    <div>
      <button onClick ={()=>dispatch(addmoney(500))}> add 500</button>

      <button onClick={()=>dispatch(removemoney(500))}> remove 500</button>
    </div>
  )
}
