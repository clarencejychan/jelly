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
        let gameBasicInfo = homeCode + " " + homeScore + " - " + visitorScore + " " + visitorCode;


        let gameMetaInfo; 
        // Live
        if (game.period_time.period_status !== "Final" && game.period_time.period_value !== "") {
            gameMetaInfo = game.period_time.period_status + " with " + game.period_time.game_clock + " to go | @" + game.arena;  
        } else {
            // FInished or hasn't started
            gameMetaInfo = game.period_time.period_status + " | @" + game.arena;  
        }
        return gameBasicInfo + " | " + gameMetaInfo;
    }

    // Pass the selected game to the top level to render the game 
    function onSelectGame() {

    }

    return (
        <list 
            left='center'
            top='center'
            width='100%'
            height='100%'
            border={{type: 'line'}}
            label= "Games today "
            keys
            vi
            focused
            style={
                {
                    selected: {
                      bg: '#804FB3', 
                      fg: 'white'
                    }
                }
            }
            items={games.map(parseData)}
            onSelect={() => onSelectGame()}
        />
    )
}

export default Schedule;