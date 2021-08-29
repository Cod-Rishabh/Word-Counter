import './App.css';
import React, {useState} from 'react'
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js'

// let str = "BLANK";

function App() {
  const [Mode, setMode] = useState('light');
  const ToggleMode = () => {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#645966';
      document.body.style.color = 'white';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    <>
    <Navbar mode = {Mode}>
    </Navbar>
    <div className="container my-3">
    <TextForm heading = "Enter The Text Below" mode = {Mode} onClick = {ToggleMode}></TextForm>
    </div>
    </>
  );
}

export default App;
