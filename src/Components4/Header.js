import React from 'react'

function Header(){
  return (
      <header ClassName="head">
         <div className="head-logo">
              <img className="head-img" src="./../logo512.png" alt="React icon" />
              <p>Meme Generator</p>
         </div>
         <div>
              <h5 className="project-title" >React Course - Project 3</h5>
         </div>
      </header>
    )
}

export default Header 