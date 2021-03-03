import React from 'react';

const PlayerTwoSelector = ({players, onPlayerSelected}) => {

    const options = players.map((playerTwo, index) => {
        return(
            <option value={playerTwo.playerName} key={index}>{playerTwo.playerName}</option>
        )
    })

    const handleChange = (event) => {
        const foundPlayer = players.find((playerTwo) => {
            return playerTwo.playerName === event.target.value
        })
        // console.log("value", event.target.value);
        // console.log("found", foundPlayer.playerName);
        onPlayerSelected(foundPlayer)
    }

    return(
        <>
        <select onChange={handleChange} defaultValue="default">
        <option disabled value="default">Select Player Two...</option>
        { options }
        </select>
        </>
    )
}

export default PlayerTwoSelector;