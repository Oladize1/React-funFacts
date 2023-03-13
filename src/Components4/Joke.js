import React from 'react'
import Jokes from './JokeData'
import SingleJoke from './SingleJoke'


export default function Joke(){
  const [messages, setMessages] = React.useState([])
  const [joke, setJoke]=React.useState(Jokes)
  
  
  const jok = joke.map(prevJoke =>{
    const {id, setup, punchline } = prevJoke
  return <SingleJoke
    id={id}
    setup={setup} 
    punchline={punchline}
    />
  }) 
  
  return (
    <>
         <div>
              {jok}  
             <h1>
  {messages.length === 0 ?"You are all caught up":`You have ${messages.length} unread ${messages.length > 1 ?"Messages":"Message"}`}
              </h1>
          </div>
    </>
    )
}