use farkle; 
db.dropDatabase();

db.players.insertMany([
    {
        playerName: 'Jan',
        wins: 40,
        losses: 1
    },
    {
        playerName: 'Henry of Skalitz',
        wins: 30,
        losses: 50
    },
    {
        playerName: 'Helen',
        wins: 9,
        losses: 8
    },
    {
        playerName: 'Dominic',
        wins: 7,
        losses: 3
    },
    {
        playerName: 'Kathleen',
        wins: 17,
        losses: 2
    },
    {
        playerName: 'Laureline',
        wins: 3,
        losses: 98
    },
    {
        playerName: 'averagestudent',
        wins: 10,
        losses: 10
    },
    {
        playerName: 'crazy_cat_lady',
        wins: 10,
        losses: 5 
    },
    {
        playerName: 'Mojo Jojo',
        wins: 0,
        losses: 67 
    },
    {
        playerName: 'unfinished_sentenc',
        wins: 12,
        losses: 8 
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