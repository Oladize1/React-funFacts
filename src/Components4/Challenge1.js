import React from 'react'
import Count from './Count'
export default function Challenge1(){
  let [increase, setDecrease] = React.useState(0)
  /*let num = document.querySelector('.challenge2').innerHTML = increase(0)*/ 
  function increaseNum(){
   return setDecrease(prevNum => prevNum + 1)
  }
  function decreaseNum(){
   return   setDecrease(prevNum => prevNum - 1)
   
  }
  const  [isGoingOut,  setIsGoingOut] = React.useState(true)
  
  function handleClick(){
    setIsGoingOut(prevState => !prevState
    )
  }
   

  return(
    <section>
            <Count number={increase} />
           <button className="char2-btn" onClick={increaseNum} >increase</button>
           <button className="char2-btn" onClick={decreaseNum} >decrease</button>
           <p onClick={handleClick} className="tern" >{isGoingOut ? "Yes":"No"}</p>
       </section>
    )
}