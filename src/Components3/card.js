import React from 'react'

export default function Card(props){
  return (
       <div className="card">
            <div className="card-img">
               <img src={props.item. ImageUrl} alt="experience img" />
            </div>
            <div className="card-details">
            <p>
               <span className="place">
                  {props.item.place}
               </span> 
               <span className="link">
                 <a href={props.item.googleMapsUrl}>locate on Google Map here</a>
               </span> 
            </p>
            <h2 className="title" >{props.item.title}</h2>
            <p className="date">
                   {props.item.startsDate}  <span className="expire-date">
                   {props.item.endDate}
                      </span>
            </p>
            <p>{props.item.descrip}</p>
            </div>
       </div>
    )
}