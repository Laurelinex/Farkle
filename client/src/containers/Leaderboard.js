import Win from "../components/Win";
import { useState, useEffect } from 'react';
import GameServices from '../services/GameServices';

const Leaderboard = () => {

    const [wins, setWins] = useState([]);

    useEffect(() => {
        GameServices.getGames()
        .then(games => setWins(games));
    }, [])

    const winnerList = wins.map((win, index) => {
        return <Win win={win} key={index}/>;
    });

    return (
        <div className="leaderboard">
            <h1>Leaderboard container</h1>
            <>
                {winnerList}
            </>
        </div>
    )
}

export default Leaderboard;