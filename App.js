import React from 'react'
import Main from './main'
import Navbar from './navbar'

export default function App(){
  const [mode, setMode] = React.useState(true)
const darkMode = {
  backgroundColor:"#282D35", 
  color:"#fff"
}

const lightMode = {
  backgroundColor:"#fff", 
  color:"#000"
} 

function handleMode(){
  setMode(prevMode => !prevMode)
} 
  return(
      <>
       <body style={mode ? darkMode : lightMode} >
        <Navbar
        onclick={handleMode}
        Mode={mode} 
        />
        <Main
        style={mode ? darkMode : lightMode}
        />
       </body>
      </>
    )
}