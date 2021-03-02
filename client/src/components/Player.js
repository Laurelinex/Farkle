const Player = ({player}) => {
    console.log("player component")

    return (
        <div className="player-item">
            <p>{player.playerName}</p>
        </div>
    )
}

export default Player;