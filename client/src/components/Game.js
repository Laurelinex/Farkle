import React from'react';
import { useState } from 'react';

const Game = () => {

    const[randomNumber, setRandomNumber] = useState(0)
        const onClickButton = () => {
        const diceCode = getDiceCode(6);
        setRandomNumber(diceCode);
  }

  function getDiceCode(length){
    const code = [];
    for (var i = 0; i < length; i++) {
      var randomInt = getRandomInt(1, 7);
      code.push(randomInt);
    }
    return code.join(" ");
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  
  return (
      <div className="dice-code">
        <h1>Dice</h1>
        <button className="button" onClick={onClickButton}>Roll Dice</button>
        <h3>{randomNumber}</h3>
      </div>
  );
}


export default Game;
