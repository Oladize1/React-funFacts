import React from 'react'

export default function Box(props){
   /*const [on, setOn] = React.useState(props.on)*/
  const styles = {
    backgroundColor: props. on ? "Rebeccapurple" : "transparent" 
  } 
 
 /*function handleClick(){
   setOn(prevState => !prevState )
 }*/
  return (
    <div /*onClick={handleClick}*/ /*onClick={()=>props.onclick(props.id)}*/ onClick={()=>props.onclick(props.id)} style={styles} className="box"  ></div>
    )
}