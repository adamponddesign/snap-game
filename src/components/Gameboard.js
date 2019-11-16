import React from 'react'


const Gameboard = props => {

  // sets the layout and color or the squares depending on the game level in state
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


  // sets the background of the gameboard container to red or green depending on whether there's a match or not
  let containerClasses = 'container'
  if (props.match === null) {
    containerClasses = 'container'
  } else if (props.match) {
    containerClasses = 'container green'
  } else {
    containerClasses = 'container red'
  }

  const matchArray = props.matchArray

  return (
    <div className={containerClasses}>
      <div className={gridClasses}>
        {props.squares.map((square, index) => {
          return <div id={index} key={index} name={square.name} onClick={props.clickHandler} className={squareClasses} >
            <img
              id={index}
              name={square.name}
              src={square.image}
              className={
                `${props.activeSquare[0] === index.toString() || props.activeSquare[1] === index.toString() ? '' : 'hidden'}
                ${matchArray.includes(square.name) ? 'shown' : ''}`}
            />
          </div>
        })}
      </div>

    </div>
  )
}

export default Gameboard
