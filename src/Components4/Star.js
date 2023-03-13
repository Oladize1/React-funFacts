import React from 'react'

export default function Star(props){
  return (
       <p onClick={()=>props.onclick()} className="isFavorite" >{props.isFilled}</p>
    )
}