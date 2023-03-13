import React from 'react'

export default function Form(){
  
  const [formData, setFormData] = React.useState({
    email:"", 
    password:"", 
    confirmPassword:"", 
    checked:false
  })
  
  function handleClick(e){
    const {name, value, checked, type} = e.target 
    setFormData(prevState => {
      return {
       ...prevState, 
       [name]:type === checked ? checked: value
      }
    })
  }
  
  function handleSubmit(e){
    e.preventDefault()
    if(formData.password !== formData.confirmPassword){
      document.querySelector('p').innerHTML="password misMatch" 
    }else{
      document.querySelector('p').innerHTML = `welcome to our company`
    }
    if(formData.checked){
      console.log("Thanks for subscribing to our Newsletter")
    }
  }
  
  return (
    <>
    <body
    style={{
  backgroundColor:"Rebeccapurple",
      height:"100vh"
    }} 
>
    <div
    style={{
      backgroundColor:"white", 
      display:"flex", 
      alignItems:"center", 
      maxWidth:"450px", 
      height:"100%"
    }} 
    >
    <form OnSubmit={handleSubmit} >
    <label htmlFor="email">Email</label>
    <input
    id="email"
    type="text"
    placeholder="Enter Email here"
    name="email"
    value={formData.email} 
    onChange={handleClick}
    />
    <br/>
    <label htmlFor="password">Password</label>
    <input
    id="password"
    type="password"
    placeholder="Enter password"
    name="password"
    value={formData.password} 
    onChange={handleClick}
    />
    <br/>
    <label htmlFor="confirmPassword">Confirm Password </label>
    <input
    id="confirmPassword"
    type="password"
    placeholder="confirmPassword"
    name="confirmPassword"
    value={formData.confirmPassword} 
    onChange={handleClick}
    />
    <br/>
    <input
    id="checkbox"
    type="checkbox"
    name="checked"
    checked={formData.checked}
    onChange={handleClick}
    />
    <label htmlFor="Checkbox">Subscribe to our Newsletter</label> 
    <br/>
    <button
    style={{
      backgroundColor:"Rebeccapurple", 
      color:"#fff", 
      padding:"10px", 
      textAlign:"center", 
      alignSelf:"center", 
      border:"none", 
      borderRadius:"5px"
    }} 
    >Submit</button>
    </form>
    <p></p>
    </div>
    </body>
    </>
    )
 
}