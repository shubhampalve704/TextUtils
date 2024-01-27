import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [linesCount, setLinesCount] = useState(0);
  const [vowelsCount, setVowelsCount] = useState(0);
  const handleUpClick = () => {
    // console.log("upper case was clicked");

    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleLowClick = () => {
    // console.log("upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };
  const handleOnChange = (event) => {
    // console.log("on change handled");
    setText(event.target.value);
    let text=event.target.value;
    const lines = text.split(/\r\n|\r|\n/);
    setLinesCount(lines.length);
    let count=0;
    for(let i=0;i<text.length;i++)
    {
      if(text[i]==='a'|| text[i]==='e'||text[i]==='i'||text[i]==='o'||text[i]==='u')
      {
        count++;
      }
    }
    setVowelsCount(count);
  };
  
  const handleReset = () => {
    
    setText("");
    setLinesCount(0);
    setVowelsCount(0);
    props.showAlert("Enter The Text To Alanyze","danger");
    
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
 
  const copyToClipboard=()=>{
    // text.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard....!","success");

  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed.!","success");
  }
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8" 
            style={{backgroundColor:props.mode==='dark'?'black':'white', color:props.mode==='dark'?'green':'black', border:'solid blue 2px'}}
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-primary mt-3">
            Convert to Uppercase
          </button>
          <button
            onClick={handleLowClick}
            className="btn btn-primary mt-3 mx-2"
          >
            Convert to LowerCase
          </button>
          <button className="btn btn-danger mt-3 mx-2" onClick={handleReset}>
            Reset
          </button>
          <button className="btn btn-success mt-3 mx-2" onClick={speak}>
            Speak
          </button>
          <button className="btn btn-success mt-3 mx-2" onClick={copyToClipboard}>
            copy to clipboard
          </button>
          <button className="btn btn-success mt-3 mx-2" onClick={handleExtraSpaces}>
            Handle Extra Spaces
          </button>
          

        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {text.split(" ").length * 0.008} Minutes to read  |{" "}
          {text.split(" ").length * 0.008 * 60} seconds to read
        </p>
        <p>Number of lines: {linesCount}</p>
        <p>Vowels count is {vowelsCount}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textarea above to preview it here"}</p>
      </div>
    </>
  );
}
