import React from 'react'

const Scoreboard = props => {
  return (
    <div className='scoreboard'>
      
      <h2>Level {props.level}</h2>
      <h2>Moves {props.moves}</h2>
    </div>
  )
}

export default Scoreboard
