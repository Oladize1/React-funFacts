import React from 'react'
/*import './Components1/stylesheets.css'*/
function Button(){
   return(
   <div>
      <button className="whiteBtn"><i class="fa-solid fa-envelope"></i>E-mail</button>
      <button className="blueBtn">LinkedIn </button>
  </div>
 ) 
}

export default function Info(){
  return(
      <>
          <img className="myLogo" src="./myLogo.png" alt=" my Logo"/>
          <h2>Marcus Oladunjoye</h2>
          <p>Software developer</p>
          <p>web enticing</p>
          <Button/>
      </>
    )
}