import React, { useState } from 'react';
function TextForm({ heading, mode, showAlert }) {
    const [text, setText] = useState("")

    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        showAlert("Converted to uppercase", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        showAlert("Converted to lowercase", "success");
    }

    const handleClear = () => {
        setText("")
        showAlert("Text Cleared!", "success");
    }

    const copyText = async () => {
        navigator.clipboard.writeText(text);
        showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split((/[ ]+/));
        setText(newText.join(" "));
        showAlert("Extra spaces removed!", "success");
    }

    return (
        <>
            <div className='container' style={{ color: mode === "light" ? "black" : "white" }}>
                <h1>{heading}</h1>
                <div className='mb-3'>
                    <textarea className="form-control" placeholder="Enter your text here!" id='myBox' rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: mode === "light" ? "white" : "#13466e", color: mode === "light" ? "black" : "white" }} ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2 " style={{ color: mode === "light" ? "black" : "white" }}>
                <h2>Your text summary</h2>
                <p>{text.length ? text.split(/\s+/).filter(function (el) {
                    return el !== "";
                }).length : 0} words and {text.length} characters</p>

                <p> {0.008 * text.split(/\s+/).filter(function (el) {
                    return el !== "";
                }).length} Minutes read</p>
                <h2>Preview</h2>
                <p className='new-line'>{text.length ? text : "Nothing to preview!"}</p>
            </div >
        </>
    )
}

export default TextForm
