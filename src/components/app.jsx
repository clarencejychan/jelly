import React, { Component } from 'react'
import Schedule from './schedule/schedule'

class App extends Component {

    // Use context for current game so it's more easily updatable
    constructor(props) {
        this.state = {
            currentGame : {}
        }
    }
    
    renderScheduleOrGame() {
        // If currentGame is empty then 
        if (!this.state.currentGame) {
            return <Schedule />
        } else {
            // Pass in information to game info.
            return <GameInfo />
        }
    }

    render() {
      return (
        <box 
            top="center"
            left="center"
            width="70%"
            height="70%"
            border={{type: 'line'}}>
                renderScheduleOrGame()
        </box>
      );
    }
  }

export default App;