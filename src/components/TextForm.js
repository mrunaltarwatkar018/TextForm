import React, {useState} from "react";

export default function TextForm(props) {



    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text); 
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpacesClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change.");
        setText(event.target.value); 
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Speech Text Started!", "success");
    }

    const capitalFirstLetter = ()=>{
        let words = text.split(" ")
        let uppercaseword = ' '
        words.forEach(element => {
            uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
        props.showAlert("First Letter is Capitalized!", "success");
    }



    const [text, setText] = useState(''); 
    // const [text, setText] = useState('Enter Text Here'); 
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1> {props.heading} </h1>
                <div className="mb-3">

                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} 
                        id="myBox"
                        rows="8"
                        placeholder="Enter Text Here"
                    ></textarea>
                    
                </div>

                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUppercaseClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-outline-secondary mx-1 my-1" onClick={handleLowercaseClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-success mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                <button disabled={text.length===0} className="btn btn-outline-danger mx-1 my-1" onClick={handleCopyClick} >Copy Text</button>
                <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleExtraSpacesClick} >Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-outline-info mx-1 my-1" onClick={speak} >Speech The Text</button>
                <button disabled={text.length===0} className="btn btn-dark mx-1 my-1" onClick={capitalFirstLetter} >Capital First Letter</button>
            
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}} >
                <h2> Your Text Summary</h2>
                <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters  </p>
                <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p> {text.length>0 ? text : "Nothing to preview ...!" } </p>
            </div>
        </>
    );
}



