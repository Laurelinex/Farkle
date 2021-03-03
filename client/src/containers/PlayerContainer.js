import React from 'react';
import PlayerForm from '../components/PlayerForm';
import PlayerOneSelector from '../components/PlayerOneSelector';
import Game from '../components/Game';
import { useState, useEffect } from 'react';
import {fetchAll} from '../services/PlayersServices';

const PlayerContainer = () => {

    const [players, setPlayers] = useState([]);
    const [selectedPlayerOne, setSelectedPlayerOne] = useState(0); 

    const handleSelectedPlayerOne = (selectedPlayerOne) => {
        setSelectedPlayerOne(selectedPlayerOne)
    }

    useEffect(() => {
        fetchAll()
        .then(data => setPlayers(data))
    }, [])

    return (
        <div className="player-selection-container">
            <div>Player One</div>
            <PlayerOneSelector players={players} onPlayerSelected={handleSelectedPlayerOne} />

            <PlayerForm />
        </div>

    )
}

export default PlayerContainer;