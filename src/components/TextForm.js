import React, { useState } from 'react'

export default function TextForm(){
    const [text,setText] = useState('');

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () =>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const handleClearText = ()=>{
        setText("");
    }
    const handleCopyText =  ()=>{
        navigator.clipboard.writeText(text);
    }

  return (
  <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8'>
                <h1 className='mt-3'>Enter The Text Below:</h1>
                <div>
                    <textarea onChange={handleOnChange} rows="8" className='form-control' id="myText" width="100%" value={text}></textarea>
                </div>
                <button className='btn btn-primary m-3' onClick={handleUpClick} >Convert UperCase</button>
                <button className='btn btn-primary m-3'  onClick={handleLowerClick}>Convert LowerCase</button>
                <button className='btn btn-danger m-3' onClick={handleClearText}>Clear Text</button>
                <button className='btn btn-warning m-3' onClick={handleCopyText}>Copy Text</button>

                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Character</p>
                <p> {0.008 * text.split(" ").length} Minutes Read</p>
                <h2>Priview</h2>
                <span>{text}</span>
            </div>
            <div className='col-md-2'></div>
        </div>
    </div>
  </>
  )
}
