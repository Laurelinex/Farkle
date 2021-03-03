import { useState } from 'react';
import { addPlayer } from '../services/PlayersServices';

const PlayerForm = () => {
    const [player, setPlayer] = useState('');
    // const [playerTwo, setPlayerTwo] = useState('');

    const handlePlayerName = event => {
        setPlayer(event.target.value);
    };
    // const handlePlayerTwoName = event => {
    //     setPlayerTwo(event.target.value);
    // };

    const handleSubmit = event => {
        event.preventDefault();
        addPlayer({
            playerName: player
        });
        // verifyPlayer({
        //     playerName: playerTwo
        // })
        setPlayer("");
        // setPlayerTwo("");
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
            <label htmlFor="player-form">New Player Name:</label>
                <input
                    maxLength={20}
                    className="input"
                    type="text"
                    name="player1input"
                    value={player}
                    onChange={handlePlayerName}
                    required
                />
                <input type="submit" name="submit" value="Save" />
            </div>
        
            {/* <div className="player-input">
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
            <input type="submit" name="submit" value="Save" /> */}
            
        </form>
    );
};

export default PlayerForm;