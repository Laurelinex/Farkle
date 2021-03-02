import Player from "../components/Player";
import { useState, useEffect } from 'react';
import {fetchAll} from '../services/PlayersServices';

const Leaderboard = () => {

    const [players, setPlayers] = useState([]);

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
        return <Player player={player} key={index}/>;
    });

    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <>
                {playerList}
            </>
        </div>
    )
}

export default Leaderboard;