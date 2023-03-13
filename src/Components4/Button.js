import React from 'react'

export default function Button(){
  
      function test(){
         console.log("mouse over ")
      }
  return (
        <div>
              <img onClick={test} className="test" src="./../logo512.png" />
              <button >Click me</button>
        </div>
    )
}