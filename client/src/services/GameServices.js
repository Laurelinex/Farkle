const baseURL = "http://localhost:5000/api/games/";

const GameServices = {
    
    getGames() {
        return fetch(baseURL).then((res) => res.json());
    }
};

export default GameServices;