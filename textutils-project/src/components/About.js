import React from 'react'

export default function About(props) {
  let myStyle ={
    color: props.mode === 'dark'? 'white' : '#042743',
    backgroundColor: props.mode === 'dark'? '#042743' : 'white',
  }
  return (
    <>
    <div className="container my-5">
      <div className="card my-4 mx-5" style={{ width: '18rem'}}>
        {/* <img src="..." className="card-img-top" alt="..."/> */}
        <div className="card-body" style={myStyle}>
            <h5 className="card-title">About Us</h5>
            <p className="card-text" style={myStyle}>
              Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
              TextUtils is a free character counter tool that provides instant character count & word count statistics for a given
              Itext. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character
              limit.</p>            
              <a href="https://www.google.com/" target='_blank' rel="noreferrer" className="btn btn-primary">Link to Google</a>
        </div>
      </div>
    </div>
    </>
  )
}
