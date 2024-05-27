import React from 'react'

export default function Alert(props) {
    // const capital =(word)=>{
    //     const lower = word?.toLowercase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
  return (
    <div style={{height: '15px'}}>
    {props.alert && <div>
         <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    </div>}
    </div>
  )
}
