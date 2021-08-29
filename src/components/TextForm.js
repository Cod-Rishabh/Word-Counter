import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleloClick = (e) => {
        setText(text.toLowerCase());
    }
    const handleClear = (e) => {
        setText("")
    }
    const [text, setText] = useState("Enter the Text");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark'?'light':'dark'}`} id="txtarea" onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-5" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-5" onClick={handleloClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-5" onClick={handleClear}>Clear</button>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.onClick} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
            </div>
            <div className="container my-4">
                <h1 className="text-center">Your Text Summary</h1>
                <ul>
                    <li>
                        Words = {text.trim().split(" ").length}
                    </li>
                    <li>
                        Characters(Including Spaces) = {text.length}
                    </li>
                </ul>
            </div>
        </>
    );
}
