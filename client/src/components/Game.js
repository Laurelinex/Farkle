import React from'react';
import { useState } from 'react';

const Game = () => {
    
    const[diceArray, setDiceArray] = useState([]);
        const onClickButton = () => {
        getDiceArray();
  }

  function getDiceArray(length){
    const diceArray = [];
    for (var i = 0; i < length; i++) {
        var randomInt = getRandomInt(1, 7)
        diceArray[i] = randomInt;
        // const diceArray[i].id = i+1
        // const diceArray[i].value = i+1;
        // const diceArray[i].status = false;
    }
    return diceArray;
  }
        
    // const randomInt = getRandomInt(1, 7){
    //     for (var i=0; i < 6; i++) {
    //         diceArray[i].value(randomInt)
    // }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }


  
  return (
      <div className="dice-code">
        <h1>Dice</h1>
        <button className="button" onClick={onClickButton}>Roll Dice</button>
        <h3>{diceArray}</h3>
      </div>
  );
}


export default Game;
