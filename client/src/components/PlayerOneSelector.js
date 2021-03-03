import React from 'react';

const PlayerOneSelector = ({players, onPlayerSelected}) => {

    const options = players.map((player, index) => {
        return(
            <option value={player.PlayerName} key={index}>{player.playerName}</option>
        )
    })

    const handleChange = (event) => {
        const foundPlayer = players.find((player, index) => {
            return player.index === event.target.value
        })
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