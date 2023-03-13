import React from 'react'

export default function Form(){
  const [formData, setFormData]=React.useState({
    firstName : "", 
    lastName : "", 
    eMail : "", 
    comments:"", 
    isFrriendly:true, 
    employment:"", 
    favColor:""
  })
  function handleClick(e){
    let {name, value, checked, type} = e.target
    setFormData(prevState =>{
    return  {
       ...prevState, 
       [name] :type === "checkbox" ? checked:value
      }
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    document.querySelector('p').innerHTML = formData
  }
  return (
    <>
    <form onSubmit={handleSubmit} >
      <input
      type = "text"
      placeholder = "First Name"
      name="firstName"
      value={formData.firstName} 
      onChange={handleClick}/>
      <input
      type = "text"
      placeholder = "Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleClick}/>
      <input
      type = "text"
      placeholder = "Enter Email"
      name="eMail"
      value={formData.eMail} 
      onChange={handleClick}/>
      <textarea 
      value={formData.comments}
      onChange={handleClick}
      name="comments"
      placeholder="comments"
      />
      <br/>
      <input 
      type="checkbox"
      id="isFrriendly"
      name="isFriendly"
      onChange={handleClick} 
      checked={formData.isFriendly} 
      />
      <label htmlFor="isFriendly">Are you Friendly?</label>
      <br/>
      <fieldset>
        <legend>Current Employment Status </legend>
        <input
        type="radio"
        id="unEmployed"
        name="employment"
        value="unEmployed"
        checked={formData.employment === "unEmployed"} 
        onChange={handleClick}
        />
        <label htmlFor="unEmployed">unEmployed</label>
        <br/>
        <input
        type="radio"
        id="Part-Time"
        name="employment"
        value="Part-Time"
        checked = {formData.employment === "Part-Time"} 
        onChange={handleClick}
        />
        <label htmlFor="Part-Time">Part-Time</label>
        <br/>
        <input
        type="radio"
        id="Full-Time"
        name="employment"
        value="Full-Time"
        onChange={handleClick} 
        checked={formData.employment === "Full-Time"} 
        />
        <label htmlFor="Full-Time">Full-Time</label>
        <br/>
      </fieldset>
      <label htmlFor="favColor">What is Your Favorite color?</label>
      <br/>
      <select 
      id="favColor"
      name="favColor"
      onChange={handleClick} 
      value={formData.favColor} 
      >
        <option value="">Choose Your favorite color </option>
        <option value="Red">Red</option>
        <option value="Yellow">Yellow</option>
        <option value="Blue">Blue</option>
        <option value="Green">Green</option>
      </select>
      <br/>
      <br/>
      <button>Submit</button>
    </form>
    <p></p>
    </>
    )

}