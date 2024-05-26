import React, { useState } from 'react'
import Navbar from './practicecomponents/Navbar'
import Comment from './practicecomponents/Comment'

export default function PracticeApp() {
  const [mode, setMode] = useState('light');
  const toggle =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor= '#3b3b3c'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
     <Navbar title="Toxic Advisor " mode={mode} toggle={toggle}/>
     <div className="container">
        <Comment/>
     </div>
    </>
  )
}
