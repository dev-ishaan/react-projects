import React from 'react'
import rotating from './rotating.gif'

const Spinner = () =>{
    return (
      <div className='text-center'>
        <img className="my-2" src={rotating} alt="rotating" />
      </div>
    )
}

export default Spinner
