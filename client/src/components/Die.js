import './Die.css'

const Die = ({die, onSelectedDie}) => {
    console.log("Die component")
    
    return (
        <div className="die">
            {/* <p>{die.value}</p> */}
            <i onClick={() => {onSelectedDie(die)}} className="Die">{die.picture}</i>
            {/* <button onClick={() => {onSelectedDie(die)}}>{die.picture}</button> */}
        </div>
    )
}

export default Die;