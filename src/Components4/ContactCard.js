import React from 'react'
import Star from './Star'
export default function ContactCard(){
  const [contact, setContact] = React.useState({
    firstName:"Marcus", 
    lastName:"Oladunjoye", 
    phone:"+234 (90) 954 373 81", 
    email : "pamoladize10@gmail.com", 
    isFavorite : true
  })
  let favorite = contact.isFavorite ? "Favourite":"Not Favorite" 
  function flip(){
    setContact(prevState => {
      return {
     ...prevState,
     isFavorite : !prevState.isFavorite 
    }})
  }
  return(
      <div className="contact">
          <img src="./myLogo.png" alt="my company logo"/>
          <h1>{contact.firstName} {contact.lastName}</h1>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
          <Star isFilled={favorite} onclick={flip}/>
      </div>
    )
}