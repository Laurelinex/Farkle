import { useState } from 'react';
import { verifyPlayer } from '../services/PlayersServices';

const PlayerForm = () => {
    const [playerOne, setPlayerOne] = useState('');
    const [playerTwo, setPlayerTwo] = useState('');

    const handlePlayerOneName = event => {
        setPlayerOne(event.target.value);
    };
    const handlePlayerTwoName = event => {
        setPlayerTwo(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        verifyPlayer({
            playerName: playerOne
        });
        verifyPlayer({
            playerName: playerTwo
        })
        setPlayerOne("");
        setPlayerTwo("");
      }

    // const onButtonPress = () => {
    //     if (!player.trim()) {
    //         return
    //     }
    //     return verifyPlayer(player)
    //     .catch(console.error);
    // }

    return (
        <form onSubmit={handleSubmit} className="player-form">
            <div className="player-input">
            <label htmlFor="player1-form">Player One:</label>
                <input
                    maxLength={20}
                    className="input"
                    type="text"
                    name="player1input"
                    value={playerOne}
                    onChange={handlePlayerOneName}
                    required
                />
            </div>
            <div className="player-input">
            <label htmlFor="player2-form">Player Two:</label>
                <input
                    maxLength={20}
                    className="input"
                    type="text"
                    name="player2input"
                    value={playerTwo}
                    onChange={handlePlayerTwoName}
                    required
                />
                
            </div>
            <input type="submit" name="submit" value="Save" />
            
        </form>
    );
};

export default PlayerForm;