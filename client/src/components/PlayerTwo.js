import './Player.css'

const PlayerTwo = ({playertwo}) => {
    if(!playertwo) {
        return(null)
    }

    return (
        <div className="player-item">
            <h4>{playertwo.playerName}</h4>
        </div>
    )
}

export default PlayerTwo;