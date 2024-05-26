import React, {useState} from 'react'
import "../App.css"

export default function Comment(props) {

    const [text, setText] = useState("");

    const healthyHandler=()=>{
        let newText="Both will be healthy for sure"
        setText(newText)
        console.log(text)
    }

    const toxicHandler = () =>{
        let newText="Both will be toxic for sure"
        setText(newText)
        console.log(text)
    }

    const onChangeHandler = (e) =>{
        console.log("onchange") 
        setText(e.target.value)
    }
  return (
    <>
    <div className="container">
        <div className="form-floating my-5">
            <textarea className="form-control" value={text} onChange={onChangeHandler} style={{backgroundColor: props.mode === 'dark'? 'white':'grey', color: props.mode === 'light'?'#0e3161':'white'}} id="myBox"></textarea>
            <label>Feedback for our relationship</label>
        </div>
        <div className="btns">
        <button type="button" onClick={healthyHandler} className="btn btn-success">Healthy</button>
        <button type="button" onClick={toxicHandler} className="btn btn-danger">Toxic</button>
        </div>
    </div>
    </>
  )
}
