const baseURL = 'http://localhost:5000/api/players/';

// export const verifyPlayer = (playerName) => {
//     /* 
//         Verifycation method posting the current user
//         to the back end (where it will be decided whether
//             to create new user or fetch an existing one)
//     */
//     return fetch(baseURL + 'verify-user', { 
//         method: 'POST',
//         body: JSON.stringify({ playerName }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(res => res.json()) // returning the result of the first promise (just the request) 
//     .catch(console.error);
// };

export const addPlayer = (newPlayer) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(newPlayer),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json());
};

export const fetchAll = () => {
    return fetch(baseURL).then(res => res.json());
};

export const increaseWinOrLosses = (player) => {
    /* 
        This function updates the back-end user object
        so as to either increase the wins or the losses
        of the user.
    */
    return fetch(baseURL + player._id, { 
        method: 'PUT',
        body: JSON.stringify(player),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json()) // returning the result of the first promise (just the request) 
    .catch(console.error);
};

// export const increaseWinOrLosses = (playerName, type, updatedScore) => {
//     /* 
//         This function updates the back-end user object
//         so as to either increase the wins or the losses
//         of the user.
//     */
//     return fetch(baseURL + playerName, { 
//         method: 'PATCH',
//         body: JSON.stringify({ [type]:  updatedScore}),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then(res => res.json()) // returning the result of the first promise (just the request) 
//     .catch(console.error);
// };

// const baseURL = "http://localhost:5000/api/players/";

// const PlayersServices = {
    
//     getPlayers() {
//         return fetch(baseURL).then((res) => res.json());
//     }


// };

// export default PlayersServices;