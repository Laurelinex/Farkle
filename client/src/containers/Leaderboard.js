import Win from "../components/Win";
import { useState, useEffect } from 'react';
import GameServices from '../services/GameServices';

const Leaderboard = () => {

    const [wins, setWins] = useState([]);

    useEffect(() => {
        GameServices.getGames()
        .then(wins => setWins(wins));
    }, [])

    return (
        <div className="leaderboard">
            <h1>Leaderboard container</h1>
        </div>
    )
}

export default Leaderboard;