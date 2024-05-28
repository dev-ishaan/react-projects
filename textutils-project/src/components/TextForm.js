import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(""); // Here value of text is "Enter the Text here"
    const handleUpClick=() => {
        console.log("clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case", "success")
    }

    const handleLoClick=()=>{
        console.log("clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case", "success")
    }

    const handleOnChange=(event) => {
        console.log("onChange")
        setText(event.target.value);
    }

    const copyHandler=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", "success")
    }

    const spaceHandler =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success")
    }

    const clearHandler=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success")
    }

    // setText("New value of text");
    return (
        <>
        <div className="container" style={{color: props.mode === 'light'?'#0e3161':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" style={{backgroundColor: props.mode === 'light'?'white':'grey', color: props.mode === 'light'?'#0e3161':'white'}} rows="8"></textarea>
            </div>
            <div className="btns">
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert Text To Upper Case</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={handleLoClick}>Convert Text To Lower Case</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={copyHandler}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={spaceHandler}>Remove extra space</button>
            <button disabled={text.length===0} className="btn btn-primary" onClick={clearHandler}>Clear text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode === 'light'?'#0e3161':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        </div>
        <h2 style={{margin: '50px 0 0 0', color: props.mode === 'light'?'#0e3161':'white'}}>Preview of Text</h2>
        <p style={{margin: '10px 10px', color: props.mode === 'light'?'#0e3161':'white'}}>{text.length>0?text: "Enter the text in the above box to preview it here"}</p>

        </>
    )
}
