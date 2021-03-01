const Die = ({die, onSelectedDie}) => {
    console.log("Die component")
    
    return (
        <>
            <p>{die.value}</p>
            <button onClick={() => {onSelectedDie(die)}}><img alt="die" src={die.picture} /></button>
        </>
    )
}

export default Die;