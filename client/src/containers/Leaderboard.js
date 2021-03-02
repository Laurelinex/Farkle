import Player from "../components/Player";
import { useState, useEffect } from 'react';
import {fetchAll} from '../services/PlayersServices';

const Leaderboard = () => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchAll()
        .then(players => {setPlayers(players));
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