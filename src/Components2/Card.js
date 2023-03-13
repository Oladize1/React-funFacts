import React from 'react'
import Cards from './Cards'
import CardData from './CardData'
export default function Card(){
  const cardElements = CardData.map(card=> {
    return <Cards
      key = {card.id} 
      card = {card} 
    />
  })
  return (
    <section className="card-section">
           <div>
                {cardElements} 
           </div>
    </section>
    )
}