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

  const[diceArray, setDiceArray] = useState([]);
  // const[die, setDie] = useState({});

  // const DiceImage = ({roll}) => {
  //   if (roll === 1) {
  //     return <img src={One} alt="1" />;
  //   } else if (roll === 2) {
  //     return <img src={Two} alt="2" />;
  //   } else if (roll === 3) {
  //     return <img src={Three} alt="3" />;
  //   } else if (roll === 4) {
  //     return <img src={Four} alt="4" />;
  //   } else if (roll === 5) {
  //     return <img src={Five} alt="5" />;
  //   } else if (roll === 6) {
  //     return <img src={Six} alt="6" />;
  //   }
  // };

    // 1: <img src={One} />,
    // 2: <img src={Two} />,
    // 3: <img src={Three} />,
    // 4: <img src={Four} />,
    // 5: <img src={Five} />,
    // 6: <img src={Six} />

  useEffect(() => {
    setUpDiceArray()
  }, []);

  const setUpDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = 'id' + (i + 1);
      diceArray[i].value = i + 1;
      if (diceArray[i].value === 1) {
        diceArray[i].picture = {One}
      };
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
      diceArray[i].value = Math.floor((Math.random() * 6) + 1);
      arr.push(diceArray[i]) 
    }
    setDiceArray(arr)
  }
  
  const diceList = diceArray.map((die) => {
    return (die.image)
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
