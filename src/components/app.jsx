import React, { Component } from 'react'
import Schedule from './schedule/schedule'
import getDateToday from './util/date'
import NBA from './util/api'


class App extends Component {
    render() {
      return (
        <box top="center"
            left="center"
            width="70%"
            height="70%"
            border={{type: 'line'}}
            style={{border: {fg: 'red'}}}>

            // Add the schedule
            <Schedule />
        </box>
      );
    }
  }

export default App;