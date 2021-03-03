import './Player.css';
// import {useState} from 'react';

const PlayerOne = ({playerOne}) => {

    // const [playerOneName, setPlayerOneName] = useState("Player One")

    if(!playerOne) {
        return(null)
    }

    return (
        <div className="player-item">
            <h4>{playerOne.playerName}</h4>
        </div>
    )
}

export default PlayerOne;