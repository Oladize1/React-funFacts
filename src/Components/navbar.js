import React from 'react'

function Navbar(props) {
  
  const lightMode = {
  backgroundColor:"#fff"
}
const darkMode = {
  backgroundColor:"#000"
}

const whiteBtn = {
  color:"#000", 
  backgroundColor:"#fff", 
  padding:"10px 15px", 
  border:"none", 
  borderRadius:"8px", 
  fontWeight:"bold"
}
const blackBtn={
  color:"#fff", 
  backgroundColor:"#000", 
  padding:"10px 15px", 
  border:"none", 
  borderRadius:"8px", 
  fontWeight : "bold"
}
  return (
      <>
        <nav style={props.Mode ? darkMode : lightMode }>
           <img className="nav-logo" src="./../logo512.png"/>
             <h3 className="nav-logo-name" >ReactFacts</h3>
            <button style={props.Mode ? whiteBtn : blackBtn} onClick={props.onclick}>{props.Mode ? "light":"dark"}</button>
        </nav>
      </>
    )
}
export default Navbar


/* <h4 className="nav-element">React Course - Project 1</h4>*/