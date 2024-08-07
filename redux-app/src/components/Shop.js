import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
  const balance = useSelector(state=> state.money)
  return (
    <div className='text-center my-4'>
        <h5>Deposit/Withdraw Money</h5>
      <button className="btn btn-primary mx-2 my-4" onClick={()=>{withdrawMoney(100)}}>-</button>
      Update the Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
