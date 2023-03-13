import React from 'react'
import ReactDOM from 'react-dom'
import Confetti from 'confetti-react'
import Joke from './Components4/Joke'
import './Components4/style.css'
function App(){
  return (
    <>
    <Joke/>
    </>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'))