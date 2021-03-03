// import Player from "../components/PlayerOne";
import { useState, useEffect } from 'react';
import {fetchAll} from '../services/PlayersServices';
import './Leaderboard.css';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

const Leaderboard = () => {

    const [players, setPlayers] = useState([]);
    // const [selectedPlayerOne, setSelectedPlayerOne] = useState(0); 

    // const handleSelectedPlayerOne = (selectedPlayerOne) => {
    //     setSelectedPlayerOne(selectedPlayerOne)
    // }

    const sortPlayersByWins = players => {
        const len = players.length;
        for (let i = len - 1; i >= 0; i--) {
            for (let j = 1; j <= i; j++) {
                
                const playerScorex = players[j - 1].wins / players[j - 1].losses === Infinity ? players[j - 1].wins : players[j - 1].wins / players[j - 1].losses || 0;
                const playerScorej = players[j].wins / players[j].losses === Infinity ? players[j].wins : players[j].wins / players[j].losses || 0;
                if (playerScorex < playerScorej) {
                    const temp = players[j - 1];
                    players[j - 1] = players[j];
                    players[j] = temp;
                }
            }
        }
        return players;
    };

    useEffect(() => {
        fetchAll()
        .then(players => {
            const sortedPlayers = sortPlayersByWins(players);
            setPlayers(sortedPlayers);
        });
    }, [])

    const playerList = players.map((player, index) => {
        const playerScore = player.wins / player.losses === Infinity ? player.wins : player.wins / player.losses || 0;
        return (
            <div key={player.playerName}>
                <h4 className="player-name">{index + 1}. {player.playerName}</h4>
                <div className="player-score">{player.wins} 🏆</div>
                <div className="player-score">{player.losses} ☠️</div>
                <div className="score-">Score ({playerScore.toFixed(2)})</div>
                <br></br>
            </div>
        );
        // return <Player player={player} key={index}/>;
    });

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <div className="player-list-sorted">
                {playerList}
            </div>
        </div>
    )
}

export default Leaderboard;