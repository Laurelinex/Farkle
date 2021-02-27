import React from'react';
import { useState } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import css from "./game.css"

const Game = () => {

    const dicePicturesMap = {
      1: <img src={One} />,
      2: <img src={Two} />,
      3: <img src={Three} />,
      4: <img src={Four} />,
      5: <img src={Five} />,
      6: <img src={Six} />
    }
      // 2: "2.png", 3: "3.png", 4: "4.png", 5: "5.png", 6: "6.png"}
    
    const[diceArray, setDiceArray] = useState([1, 2, 3, 4, 5, 6]);
    



        const onClickButton = () => {
        const dice = getDiceArray(6);
        console.log(dice);
        setDiceArray(dice.map(die => dicePicturesMap[die]));
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

  // const loadPictures = diceArray.map(die => {
  //   return (
  //            <li >
  //               {/* <img src={die} width="10px"/>     */}
  //           </li>
  //           )
  // })
  
  return (
      <div className="dice-code">
        <h1>Dice</h1>
        <button className="button" onClick={onClickButton}>Roll Dice</button>
        <h3>{diceArray}</h3>
        
      </div>
  );
}


export default Game;
