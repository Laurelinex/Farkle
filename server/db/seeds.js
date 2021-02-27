use farkle; 
db.dropDatabase();

db.games.insertMany([
    {
        playerOneName: "Jan",
        playerTwoName: "Henry",
        winner: "Jan",
        date: ISODate('2020-03-21')

    },
    
    {
        playerOneName: "Jan",
        playerTwoName: "Henry",
        winner: "Henry",
        date: ISODate('2020-03-22')
    
    }
])