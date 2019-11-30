import React, { Component } from 'react'
import NBA from '../util/api'
import getDateToday from '../util/date'


class Schedule extends Component {
    componentDidMount() {
        logger.log({
            level: 'info',
            message: this.getScheduleData()
        });
    }

    async getScheduleData() {
        let date = getDateToday();
        let listOfGames = await NBA.getGames(date);

        return listOfGames;
    }

    render() {

    }

}

export default Schedule;