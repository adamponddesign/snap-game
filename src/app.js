import React from 'react'
import ReactDOM from 'react-dom'
import Scoreboard from './components/Scoreboard'
import Gameboard from './components/Gameboard'
import './style.scss'
import emoji1 from './assets/03_EmoticonsHDcom.png'
import emoji2 from './assets/05_EmoticonsHDcom.png'
import emoji3 from './assets/18_EmoticonsHDcom.png'
import emoji4 from './assets/19_EmoticonsHDcom.png'
import emoji5 from './assets/22_EmoticonsHDcom.png'
import emoji6 from './assets/26_EmoticonsHDcom.png'
import emoji7 from './assets/38_EmoticonsHDcom.png'
import emoji8 from './assets/40_EmoticonsHDcom.png'
import emoji9 from './assets/55_EmoticonsHDcom.png'
import emoji10 from './assets/64_EmoticonsHDcom.png'
import emoji11 from './assets/70_EmoticonsHDcom.png'
import emoji12 from './assets/73_EmoticonsHDcom.png'
import emoji13 from './assets/75_EmoticonsHDcom.png'
import emoji14 from './assets/76_EmoticonsHDcom.png'
import emoji15 from './assets/80_EmoticonsHDcom.png'
import emoji16 from './assets/iconfinder_garden_bonsai_gardening_tree_growth_japanese_leaf_5296657.png'
import emoji17 from './assets/iconfinder_japan_culture_traditional_sumo_japanese_sport_5296659.png'
import emoji18 from './assets/iconfinder_japan_monkey_japanese_onsen_hot_spring_5296664.png'




class App extends React.Component {

  state = {
    level: 2,
    moves: 0,
    squares: [],
    iconsLevel1: [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8],
    iconsLevel2: [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10, emoji11, emoji12, emoji13, emoji14, emoji15, emoji16, emoji17, emoji18]
  }


  componentDidMount = () => {
    this.buildGame()
  }

  // adds the correct amount of squares to the squares array based on the difficulty level number
  buildGame = () => {
    switch (this.state.level) {
      case 1:{
        let count = 1
        while (count <= 16) {
          this.pickRandomIconLevel1()
          count += 1
        }
        break
      }
      case 2:{
        let count = 1
        while (count <= 36) {
          this.pickRandomIconLevel2()
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
  }



  pickRandomIconLevel1 = () => {
    const randomNum = Math.floor(Math.random() * 8)
    // use that number to reference the icons array on state and select a random icon
    const selectedIcon = this.state.iconsLevel1[randomNum]
    // copy the squares state array to work with within the function
    const squaresTemp = this.state.squares
    // check if the selected icon is already in the squares array 2 times or more
    let dupCount = 0
    for(var s = 0; s < squaresTemp.length; ++s){
      if(squaresTemp[s] === selectedIcon ) {
        dupCount++
      }
    }
    if (dupCount >= 2 ) {
      // if it appears twice of more pick another icon
      this.pickRandomIconLevel1()
    } else {
      // otherwise add the icon to the array
      squaresTemp.push(selectedIcon)
      // add the new array to state
      this.setState({ squares: squaresTemp })
    }
  }











  pickRandomIconLevel2 = () => {
    const randomNum = Math.floor(Math.random() * 18)
    // use that number to reference the icons array on state and select a random icon
    const selectedIcon = this.state.iconsLevel2[randomNum]
    // copy the squares state array to work with within the function
    const squaresTemp = this.state.squares
    // check if the selected icon is already in the squares array 2 times or more
    let dupCount = 0
    for(var s = 0; s < squaresTemp.length; ++s){
      if(squaresTemp[s] === selectedIcon ) {
        dupCount++
      }
    }

    if (dupCount >= 2 ) {
      // if it appears twice of more pick another icon
      this.pickRandomIconLevel2()
    } else {
      // otherwise add the icon to the array
      squaresTemp.push(selectedIcon)
      // add the new array to state
      this.setState({ squares: squaresTemp })
    }
  }










  render() {

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
