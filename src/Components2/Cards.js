import React from 'react'

export default function Cards(props){
  console.log(props)
  return (
       <>
          <img className="card-img" src={props.card.coverImg} alt="Data image"/>
          <h3>{props.card.stats.rating}</h3>
          <p>{props.card.stats.reviewCount}</p>
          <b>${props.card.price}</b>
       </>
    )
}