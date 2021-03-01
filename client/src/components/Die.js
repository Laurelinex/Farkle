const Die = ({die, onSelectedDie}) => {
    console.log("Die component")
    
    return (
        <div className="die">
            <p>{die.value}</p>
            <button onClick={() => {onSelectedDie(die)}}><img alt="die" src={die.picture} /></button>
        </div>
    )
}

export default Die;