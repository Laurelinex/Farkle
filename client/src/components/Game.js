import React from'react';
import { useState, useEffect } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import css from "./game.css"

const Game = () => {

  const[diceArray, setDiceArray] = useState([]);
  const[die, setDie] = useState({});

  // const dicePicturesMap = {
  //   1: <img src={One} />,
  //   2: <img src={Two} />,
  //   3: <img src={Three} />,
  //   4: <img src={Four} />,
  //   5: <img src={Five} />,
  //   6: <img src={Six} />
  // }

  useEffect(() => {
    initialDiceArray()
  }, []);

  const initialDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = 'id' + (i + 1);
      diceArray[i].value = i + 1;
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
  }



    
  // const onClickButton = () => {
  //   const dice = getDiceArray(6);
  //   console.log(dice);
  //   setDiceArray(dice);
  // }



  // function getDiceArray(length){
  //   const diceArray = [];
  //   for (var i = 0; i < length; i++) {
  //       var randomInt = getRandomInt(1, 7)
  //       diceArray[i] = randomInt;
  //       // const diceArray[i].id = i+1
  //       // const diceArray[i].value = i+1;
  //       // const diceArray[i].status = false;
  //   }
  //   return diceArray;
  // }
        


  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min);
  // }

  
  return (
      <div className="dice-code">
        <h1>Dice</h1>

        <h3>{diceArray.value}</h3>

      </div>
  );
}


export default Game;
