import React from 'react';
// import PlayerForm from './PlayerForm';
// import PlayerOneSelector from './PlayerOneSelector';
// import Game from './Game';
// import { useState, useEffect } from 'react';
// import {fetchAll} from '../services/PlayersServices';

const Header = () => {

    // const [players, setPlayers] = useState([]);
    // const [selectedPlayerOne, setSelectedPlayerOne] = useState(0); 

    // const handleSelectedPlayerOne = (selectedPlayerOne) => {
    //     setSelectedPlayerOne(selectedPlayerOne)
    // }

    // useEffect(() => {
    //     fetchAll()
    //     .then(data => setPlayers(data))
    // }, [])

    return (
        <div className="header">
            <div className="title-logo">
                <h1>Farkle!</h1>
            </div>
            <div className="intro">
                <h4>From medieval times comes a Bohemian game of chance for peasants and noblemen alike. </h4>
                <p>What better way to distract yourself from the sacking of your village by enemy marauders?</p>
            </div>
            {/* <div>Player One</div>
            <PlayerOneSelector players={players} onPlayerSelected={handleSelectedPlayerOne} />

            <PlayerForm /> */}
        </div>

    )
}

export default Header;