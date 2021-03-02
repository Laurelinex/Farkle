const Die = ({die, onSelectedDie}) => {
    console.log("Die component")
    
    return (
        <div className="die">
            {/* <p>{die.value}</p> */}
            <button onClick={() => {onSelectedDie(die)}}>{die.picture}</button>
        </div>
    )
}

export default Die;