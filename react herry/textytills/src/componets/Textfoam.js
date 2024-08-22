import React, {useState} from "react";

export default function Textfoam(props) {
    const handleUpClick=()=>{
        console.log("Uppercase On Click");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleUpChange=(event)=>{
        console.log("Uppercase On Change");
        setText(event.target.value);
        
    }
    const [text,setText]=useState('Enter text here');
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
         className="form-control" value={text} onChange={handleUpChange}
          id="mybox"
          rows="3"
        ></textarea>
      </div>
     <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
     </button>
    </div>
  );
}
