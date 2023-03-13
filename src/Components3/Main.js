import React from 'react'
import Card from './card'
import Data from './data'
export default function Main(){
  const dataElement = Data.map(data =>{
        return <Card
             key = {data.id} 
             item = {data}
        />
      }) 
  return (
      <section> 
         {dataElement} 
      </section>
    )
}