import './Die.css'

const Die = ({die, onSelectedDie}) => {
    console.log("Die component")

    if (die.active !== 0) {
        return (
            <div className="die-not-active-faded">
                <i onClick={() => {onSelectedDie(die)}} className="Die">{die.picture}</i>
            </div>
        )
    } else {
        return (
            <div className="die">
                <i onClick={() => {onSelectedDie(die)}} className="Die">{die.picture}</i>
            </div>
        )
    }
    
    // return (
    //     <div className="die">
    //         {/* <i onClick={() => {onSelectedDie(die)}} className="Die">{die.picture}</i> */}
    //         <i onClick={() => {onSelectedDie(die)}} id="testDie">{die.picture}</i>
    //     </div>
    // )
}

export default Die;