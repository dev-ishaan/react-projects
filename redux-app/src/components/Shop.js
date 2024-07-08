import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {
  const dispatch = useDispatch()
  // const { increment, decrement } = bindActionCreators(actionCreators, dispatch)
  return (
    <div>
        <h5>Deposit/Withdraw Money</h5>
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      Update the Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button>
    </div>
  )
}

export default Shop
