import React from 'react'
import ReactDOM from 'react-dom'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import './style.scss'



class App extends React.Component {

  state = {
    level: 2,
    moves: 0,
    squares: []
  }







  render() {

    // adds the correct amount of squares to the squares array based on the difficulty level number
    switch (this.state.level) {
      case 1:{
        let count = 1
        while (count <= 16) {
          this.state.squares.push(count)
          count += 1
        }
        break
      }
      case 2:{
        let count = 1
        while (count <= 36) {
          this.state.squares.push(count)
          count += 1
        }
        break
      }
      case 3:{
        let count = 1
        while (count <= 100) {
          this.state.squares.push(count)
          count += 1
        }
        break
      }
    }


    return (
      <main>
        <h1>Anything for a Pair</h1>


        <Scoreboard level={this.state.level} moves={this.state.moves} />
        <Gameboard level={this.state.level} squares={this.state.squares}/>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
