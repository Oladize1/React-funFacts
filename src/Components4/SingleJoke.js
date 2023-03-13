import React from 'react'

export default function Joke(props){
  const [isShown, setIsShown] = React.useState(true) 
  
  function toggle(){
    setIsShown(prevState => !prevState)
  }
  
  
  return (
    <div>
       {isShown && <div>
       <h1>{props.setup}</h1>
       <p>{props.punchline}</p>
       </div> } 
      <button onClick={toggle}>
          {isShown?"Hide PunchLine":"Show PunchLine"}
      </button>
        <hr/>
    </div>
    )
}