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


  // let iconvisibility = 'hidden'
  //
  // if (props.showImage) {
  //   iconvisibility = 'shown'
  // }


  console.log(props)

  return (
    <div className='container'>
      <div className={gridClasses}>
        {props.squares.map((square, index) => {


          return <div key={index} onClick={props.clickHandler} className={squareClasses} >
            <div  name={square.name}>

              {props.active &&  <img name={square.name} src={square.image} />}

            </div>
          </div>

        })}
      </div>

    </div>
  )
}

export default Gameboard
