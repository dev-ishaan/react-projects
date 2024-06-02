import React, { Component } from 'react'
import rotating from './rotating.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={rotating} alt="rotating" />
      </div>
    )
  }
}

export default Spinner