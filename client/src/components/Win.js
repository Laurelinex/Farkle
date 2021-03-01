const Win = ({win}) => {
    console.log("Win component")

    return (
        <div className="win-item">
            <p>{win.winner}</p>
        </div>
    )
}

export default Win;