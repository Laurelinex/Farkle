import React from'react';
import { useState, useEffect } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import "./game.css";
import Die from "./Die";

const Game = () => {


  const dicePicturesMap = {
    1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six
  }

  const[diceArray, setDiceArray] = useState([]);
  const [selectedDie, setSelectedDie] = useState(null);
  

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
      diceArray[i].active = true;
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
  }

 
  const onClickRollDice = () => {
    rollDice();
    console.log('roll dice');
  };



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

  const onSelectedDie = (die) => {
    console.log("Die selected")
    if (die.active)
      {
          die.active = false;
      }
      else
      {
          die.active = true;
      }
    setSelectedDie(die)
  }

  // const toggleActive = (selectedDie) => {
  //   const arr = diceArray.map((die) => { 
    //   if (die.id === selectedDie.id){
    //     die.active = !die.active
    //   }
    // })
  //   setDiceArray(arr);
  // }
  
  const diceList = diceArray.map((die, index) => {
    return  <Die die={die} onSelectedDie={onSelectedDie} key={index} />
  });


  return (
      <div className="game">
        {/* <h1>Dice</h1> */}
        
        <button className='button' onClick={onClickRollDice}>Roll Dice</button>
        
        <div className="all-dice">
          {diceList}
        </div>
        

      </div>
  );
}


export default Game;
