import React from'react';
<<<<<<< HEAD
import { useState, useEffect } from 'react';
// import One from "../images/1.png";
// import Two from "../images/2.png";
// import Three from "../images/3.png";
// import Four from "../images/4.png";
// import Five from "../images/5.png";
// import Six from "../images/6.png";
// import css from "./game.css"

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
    setUpDiceArray()
  }, []);

  const setUpDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = 'id' + (i + 1);
      diceArray[i].value = i + 1;
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
=======
import { useState } from 'react';
import One from "../images/1.png";
import Two from "../images/2.png";
import Three from "../images/3.png";
import Four from "../images/4.png";
import Five from "../images/5.png";
import Six from "../images/6.png";
import Tooltip from '@material-ui/core/Tooltip';
import css from "./game.css"

const Game = () => {

  const dicePicturesMap = {
    1: <button><img src={One}  /></button>,
    2: <button><img src={Two}  /></button>,
    3: <button><img src={Three}/></button>,
    4: <button><img src={Four} /></button>,
    5: <button><img src={Five} /></button>,
    6: <button><img src={Six}  /></button>
  }
    
  const[diceArray, setDiceArray] = useState(setupDiceArray(6));

  const onRollDice = () => {
    const numDiceAvailable = diceArray.filter(die => die.enabled === true).length
    const dice = getDiceArray(numDiceAvailable);
    console.log(dice);
    setDiceArray(dice);
  }

  function setupDiceArray(numOfDice) {
    let initDiceArray = [];
    for (var i = 0; i < numOfDice; i++) {
      initDiceArray[i] = {};
      initDiceArray[i].value = dicePicturesMap[i + 1];
      initDiceArray[i].id = "die" + (i+1);
      initDiceArray[i].enabled = true;
    }
    return initDiceArray;
  }

  function getDiceArray(length){
    const dice = [];
    for (var i = 0; i < length; i++) {
        var randomInt = getRandomInt(1, 7)
        dice[i] = {};
        dice[i].id = "die" + (i+1);
        dice[i].value = dicePicturesMap[randomInt];
        dice[i].enabled = true;
    }
    return dice;
>>>>>>> feature/set-aside-dice
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
        
<<<<<<< HEAD


  const rollDice = () => {
    for (let i = 0; i < 6; i++) {
      diceArray[i].value = Math.floor((Math.random() * 6) + 1);
    }
    diceArray.map((die) => {
      return(
        <li>die.value</li>
      )
    })  
  }

  return (
      <div className="dice-code">
        <h1>Dice</h1>

        
        <button className='button' onClick={onClickButton}>Roll Dice</button>


=======
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  function toggleActive(selectedId) {
    var newDiceArray = [].concat(diceArray); 
    var die = newDiceArray.find(die => die.id === selectedId);
    die.enabled = !die.enabled;
    setDiceArray(newDiceArray);
  
  }

  return (
      <div className="dice-code">
        <h1>Dice</h1>
        <button className="button" onClick={onRollDice}>Roll Dice</button>
        <button className="button" onClick={() => setDiceArray(setupDiceArray(6))}>Reset</button>
        <DieList dice={diceArray} toggleActive={toggleActive} />
>>>>>>> feature/set-aside-dice
      </div>
  );
}


<<<<<<< HEAD
export default Game;
=======
class DieList extends React.Component{
  render() {
    let _this = this;
    
    return (
      <ul className="dice-list">
        {this.props.dice.map(function(die) {
          
          return (
            <li key={die.id}>
              <a href="#">{die.value}</a>
              <span>{die.enabled ? 'Active' : 'Not Active'}</span>
              <button onClick={_this.props.toggleActive.bind(null, die.id)} >
                Set Aside
              </button>
            </li>
            );
        })}
      </ul>
      );
  }
};


export default Game;
>>>>>>> feature/set-aside-dice
