import React from 'react';

const PlayerOneSelector = ({players, onPlayerSelected}) => {

    const options = players.map((playerOne, index) => {
        return(
            <option value={playerOne.playerName} key={index}>{playerOne.playerName}</option>
        )
    })

    const handleChange = (event) => {
        const foundPlayer = players.find((playerOne) => {
            return playerOne.playerName === event.target.value
        })
        // console.log("value", event.target.value);
        // console.log("found", foundPlayer.playerName);
        onPlayerSelected(foundPlayer)
    }

    return(
        <>
        <select onChange={handleChange} defaultValue="default">
        <option disabled value="default">Select Player One...</option>
        { options }
        </select>
        </>
    )
}

export default PlayerOneSelector;