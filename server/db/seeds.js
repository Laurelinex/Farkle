use farkle; 
db.dropDatabase();

db.players.insertMany([
    {
        playerName: 'Jan',
        wins: 40,
    },
    {
        playerName: 'Henry',
        wins: 30,
    },
    {
        playerName: 'Helen',
        wins: 9,
    },
    {
        playerName: 'Dominic',
        wins: 7,
    },
    {
        playerName: 'Kathleen',
        wins: 17,
    },
    {
        playerName: 'Laureline',
        wins: 3,
    },
])

// db.games.insertMany([
//     {
//         playerOneName: "Jan",
//         playerTwoName: "Henry",
//         winner: "Jan",
//         date: ISODate('2020-03-21')

//     },
    
//     {
//         playerOneName: "Jan",
//         playerTwoName: "Henry",
//         winner: "Henry",
//         date: ISODate('2020-03-22')
    
//     }
// ])