// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React,{ useState } from "react";
import Text from './components/Text'
// import { Routes , Route } from "module";

function App() {
  const [Mode, setMode] = useState("light")

  const modeSwitch = () => {
    if (Mode === "dark") {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.title = 'Textutils-LightMode'
    }
    else {
      setMode('dark')
      document.body.style.backgroundColor = '#13213c'
      document.title = 'Textutils-DarkMode'
    }
  }
  return (
    <>
    <Navbar title="Text Editor" mode={Mode} modeSwitch={modeSwitch} currentpage='Home' link='About'/>
    <div className="container my-5">
      <Text texttitle="Enter Your Text To Edit" mode={Mode}/>
    </div>
    </>
    
  );
}

export default App;
