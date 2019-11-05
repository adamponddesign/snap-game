import React from 'react'


const Gameboard = props => {



  let squareClasses = ''
  let gridClasses = ''

  switch (props.level) {
    case 1:{
      squareClasses = 'easy-square'
      gridClasses = 'easy-grid'
      break
    }
    case 2:{
      squareClasses = 'medium-square'
      gridClasses = 'medium-grid'
      break
    }
    case 3:{
      squareClasses = 'hard-square'
      gridClasses = 'hard-grid'
      break
    }
  }




  return (
    <div className='container'>
      <div className={gridClasses}>
        {props.squares.map((square) => {
          return <div key={square} className={squareClasses}>{square}</div>
        })}

      </div>
    </div>
  )
}

export default Gameboard
