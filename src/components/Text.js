import React,{useState} from "react";
// import PropTypes from 'prop-types'

export default function Text(props) {
    const [Text, setText] = useState("")
    // const [, setColor] = useState("red")
    function handleclick() {
        setText(Text.toUpperCase());
    }
    const handleclick1 = ()=>{
        setText(Text.toLowerCase())
    }
    
    const handleonchange = (event) =>{
        setText(event.target.value)
    }
    const removeExtraSpaces = () => {
        return setText(Text.replace(/\s+/g, ' ').trim());
      }
      const capitalizeFirstCharacter = () => {
        return setText(Text.charAt(0).toUpperCase() + Text.slice(1));
      }
      

      
    return (
        <>
        <div className="container my-4">
            <h1 style={{color : props.mode === 'light'? 'black' : 'white'}}> {props.texttitle}</h1>
            <div className="container">
                <textarea className="form-control" value={Text} onChange={handleonchange} rows="12" style={{backgroundColor : props.mode === 'light'? 'white' : '#232323', color : props.mode === 'light'? 'black' : 'white'}}></textarea>
            </div>
            <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3`} onClick={handleclick}style={{marginRight : '5px'}}> To Uppercase </button>
            <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3`} onClick={handleclick1}style={{marginLeft : '5px'}}> To Lowercase </button>
            <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3`} onClick={removeExtraSpaces}style={{marginLeft : '5px'}}> Remove Extra Spaces </button>
            <button className={`btn btn-${props.mode === 'dark' ? 'light' : 'dark'} my-3`} onClick={capitalizeFirstCharacter}style={{marginLeft : '5px'}}> Format </button>
        </div>
        <div className="container">
            <h1 style={{color : props.mode === 'light'? 'black' : 'white'}}> Your Text Summary </h1>
            <p style={{color : props.mode === 'light'? 'black' : 'white'}}> {Text.split(" ").length} Words  {Text.length} character</p>
            <p style={{color : props.mode === 'light'? 'black' : 'white'}}> {0.008 * Text.split(" ").length}s To Read </p>
            <h2 style={{color : props.mode === 'light'? 'black' : 'white'}}> Text Preview </h2>
            <p style={{color : props.mode === 'light'? 'black' : 'white'}}> {Text.length>0 ? Text : 'Enter something in the above text area to preview it here'} </p>
        </div>
        </>
    )
}