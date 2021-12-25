import React, { useState } from 'react'




export default function Textforms(props) {
    
    const handleOnClick=()=>{
        console.log("Text is being labelized⏳"+text);
        // let newText=text.funtion();
        // setText(newText);
        setText("Text is being labelled⏳");  
    }
    const handleOnChange=(event)=>{
        console.log("On change⏳");
        setText(event.target.value);

    }
    const [text, setText] = useState('Start Typing or Paste here👀');
  
    return (
        <div>
            {/* <h3>{props.heading}</h3> */}
        {/* <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div> */}
        <div className="mb-3">
            <label for="mybocs" className="form-label"><h3>{props.heading}</h3></label>
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybocs" rows="17" ></textarea>
            
        </div>
        <button className="btn btn-primary" onClick={handleOnClick}>Labelize!</button>
        </div>
            )
}
