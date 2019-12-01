import React, { useEffect, useState } from 'react'
import NBA from '../util/api'
import getDateToday from '../util/date'
import log from '../util/log'


function Schedule() {
    const [games, setGames] = useState([]);

    // Similar to componentDidMount;
    useEffect(() => {
        async function getScheduleData() {
            try {
                let date = getDateToday();
                let gameData = await NBA.getGames(date);
                let listOfGames = await gameData.sports_content.games.game;
                setGames(listOfGames);
            } catch (err) {
                log.info(err);
            }
        } 
        getScheduleData();
    }, []);

   
    function parseData(game) {
        let visitorCode = game.visitor.abbreviation;
        let visitorScore = game.visitor.score;
        let homeCode = game.home.abbreviation;
        let homeScore = game.home.score;
        let gameString = homeCode + " " + homeScore + " - " + visitorScore + visitorCode;
        return gameString;
    }

    return (
        <list 
            left='center'
            top='center'
            width='80%'
            height='80%'
            border={{type: 'line'}}
            label=' Select a game '
            items={games.map(parseData)}
        />
    )
}

export default Schedule;