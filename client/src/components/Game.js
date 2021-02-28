import React from'react';
import { useState, useEffect } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import "./game.css";
import DiceImage from "./DiceImage";

const Game = () => {

  // const dicePicturesMap = {
  //   1: <button><img src={One}  /></button>,
  //   2: <button><img src={Two}  /></button>,
  //   3: <button><img src={Three}/></button>,
  //   4: <button><img src={Four} /></button>,
  //   5: <button><img src={Five} /></button>,
  //   6: <button><img src={Six}  /></button>
  // }

  const dicePicturesMap = {
    1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six
  }

  const[diceArray, setDiceArray] = useState([]);
  

  useEffect(() => {
    setUpDiceArray()
  }, []);

  const setUpDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = 'id' + (i + 1);
      diceArray[i].value = i + 1;
      diceArray[i].picture = dicePicturesMap[i + 1];
      // if (diceArray[i].value === 1) {
      //   diceArray[i].picture = {One}
      // };
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
  }

 
  const onClickButton = () => {
    rollDice();
    console.log('roll dice');
  };



  // function getDiceArray(length){
  //   const diceArray = [];
  //   for (var i = 0; i < length; i++) {
  //       var randomInt = getRandomInt(1, 7)
  //       diceArray[i] = randomInt;
  //   }
  //   return diceArray;
  // }
        


  const rollDice = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      const randInt = Math.floor((Math.random() * 6) + 1);
      diceArray[i].value = randInt;
      diceArray[i].picture = dicePicturesMap[randInt];
      arr.push(diceArray[i]) 
    }
    setDiceArray(arr)
  }
  
  const diceList = diceArray.map((die) => {
    return  <DiceImage die={die} />
  });


  return (
      <div className="dice-code">
        <h1>Dice</h1>

        
        <button className='button' onClick={onClickButton}>Roll Dice</button>

        <>{diceList}</>
        

      </div>
  );
}


export default Game;
