import React from 'react'

export default function UpdateClick(){
  const [things, setThings] = React.useState(["things 1", "things 2"])
  const styles = {
    backgroundColor : "Rebeccapurple", 
    color : "#fff", 
    height : "100vh", 
    textAlign:"center"
  }
  const btn = {
    border : "2px solid #fff", 
    padding : "10px 14px", 
    borderRadius : "5px"
  }
  
  function handleClick(){
    const newThings =`things ${things.length + 1} `
   setThings(prevState => [...prevState, newThings]
  )
  } 
 const thingsElement = things.map(thing=>(
   <p>{thing}</p>
))
 return ( 
    <div style={styles} >
      <button style={btn} onClick={handleClick} >Click me</button>
          {thingsElement} 
    </div>
   ) 
}