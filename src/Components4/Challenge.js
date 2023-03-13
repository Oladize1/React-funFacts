import React from 'react'

export default function Challenge(){
/* const [thingsArray, setThingsArray] = React.useState(["things 1", "things 2"])
      
    function renderPage(){
      const newThings = `things ${thingsArray.length + 1}`
      setThingsArray(prevState => [...prevState, newThings ])
    }
    let para = thingsArray.map(item=>(
        <p>{item}</p>
     )) */
   let greetings
    let time = new Date()
    let hour = time.getHours()
    function greet(name){
      if(hour < 12 ){
        greetings = `good Morning ${name}`
      }else if(hour >= 12 && hour < 17 ){
        greetings = `good Afternoon ${name}`
      }else if(hour === 17){
        greetings = `good Evening ${name}`
      }else{
        greetings = `good Night ${name}`
      }
      return greetings
    }
  let bayo = greet("bayo")
    return (
         <div class="bay">
              <h1>{bayo}</h1>
         </div>
      )
/*  return (
       <div className="challenge1" >
         <button className="challenge1-btn" OnClick={renderPage} >Click me</button>
            {para}
       </div>
       
    )*/
}