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
        {props.squares.map((square, index) => {

          // console.log('log in map Gameboard', props.activeSquare, index.toString())

          return <div id={index} key={index} name={square.name} onClick={props.clickHandler} className={squareClasses} >


            <img
              id={index}
              name={square.name}
              src={square.image}
              className={`${props.activeSquare[0] === index.toString() || props.activeSquare[1] === index.toString() ? '' : 'hidden'}`} />


          </div>

        })}
      </div>

    </div>
  )
}

export default Gameboard
