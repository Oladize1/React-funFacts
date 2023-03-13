import React from 'react'
import MemeData from './memeData'
export default function Meme(){
  const [meme, setMeme] = React.useState({
    topText:"", 
    bottomText:"",
    randomImage:"./../logo512.png"
  })
  
  /*const [formData, setFormData] = React.useState({
    topText:"", 
    bottomText:""
  })*/
  
  function text(e){
    const {name, value} = e.target
    setMeme(prevState => {
      return {
       ...prevState, 
       [name] : value
      }
    })
  }
  
  const [allMemeImages, setAllMemeImages] = React.useState(MemeData)
  
  
  /*let [memeImage, setMemeImage] = React.useState("./../logo192.png")*/
 
  function getRandomImage(){
    const memeArray = allMemeImages.data.memes
    let random = Math.floor(Math.random() * memeArray.length) 
    let link = memeArray[random].url
    /*para.innerHTML = Meme*/
     setAllMemeImages(prevState =>(
       {
     ...prevState, 
     randomImage:link
     }))
  }
  return (
        <div className="meme" >
           <form>
              <div className="inputs">
           <input 
           type="text"
           placeholder="Top text"
           name="topText"
           value={meme.topText} 
           onChange={text} 
           />
           <input
           type="text"
           placeholder="bottom text" 
           name="bottomText"
           value={meme.bottomText} 
           onChange={text}
           />
              </div>
           </form>
           <button onClick={getRandomImage} >Generate Meme Image 😛</button> 
           <div className="memeBox">
           <img className="memeImage" src= {allMemeImages.randomImage}/>
           <h1 className="topText">{meme.topText}</h1>
           <h1 className="bottomText">{meme.bottomText} </h1>
           </div>
        </div>
    )
}