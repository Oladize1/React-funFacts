import React from 'react'
import Boxes from './Box'
import Box from './Boxes'
export default function Challenge(props){
  const [boxes, setBoxes] = React.useState(Boxes)
  const styles = {
    backgroundColor: props.darkMode ? "#222222" : "#8fc872c" 
  }
  
 /*function flip(id){
   setBoxes(prevState =>{
     const newBox = []
     for(let i = 0; i < prevState.length; i++){
       const currentBox = prevState[i] 
            if(currentBox.id === id){
              const updatedBox = {
               ...currentBox,
               on:!currentBox.on
              }
              newBox.push(updatedBox)
            }else{
              newBox.push(currentBox)
            }
     }
     return newBox 
   })
 }*/
 function toggle(id){
   setBoxes(prevState => {
  return prevState.map(box=>{
    return box.id === id ? {...box,on:!box.on}:box
  })
   })
 }
 
  const box = boxes.map(box => (
   <Box /*onclick={flip}*/ onclick={toggle} id={box.id} key={box.id} on={box.on} />
))
  return (
       <main>
              {box} 
       </main>
    )
}