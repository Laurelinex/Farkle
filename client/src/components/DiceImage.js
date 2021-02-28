const DiceImage = ({die, onSelectedDie}) => {
    console.log("Die component")
    
    return (
        <>
            <p>{die.value}</p>
            <button onClick={() => {onSelectedDie(die)}}><img src={die.picture} /></button>
        </>
    )
}

export default DiceImage;