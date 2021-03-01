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

  const [diceArray, setDiceArray] = useState([]);
  const [rollScore, setRollScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [player1Total, setPlayer1Total] = useState(0);
  const [player2Total, setPlayer2Total] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(true);

  const dicePicturesMap = {
    1: One, 2: Two, 3: Three, 4: Four, 5: Five, 6: Six
  }

  useEffect(() => {
    setUpDiceArray();
    playerToPlay();

  }, []);

  const setUpDiceArray = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      diceArray[i] = {};
      diceArray[i].id = i;
      diceArray[i].value = i + 1;
      diceArray[i].picture = dicePicturesMap[i + 1];
      diceArray[i].active = 0;
      arr.push(diceArray[i])   
    }
    setDiceArray(arr)
  }

  const playerToPlay = () => {
  	if (player1Turn === true) {
      return "player 1 start your round by rolling the dice.";
    } else {
      return "player 2 start your round by rolling the dice.";
    }
  }

  const onClickRollDice = () => {

    let tempRoundScore = 0;
    tempRoundScore = roundScore + rollScore;
    setRoundScore(tempRoundScore);
    setRollScore(0);

    for (var i = 0; i < 6; i++) {
			if (diceArray[i].active === 1) {
				diceArray[i].active = -1;
			}
		}

    rollDice();
    console.log('roll dice');

  };

  const rollDice = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      if (diceArray[i].active === 0){
        const randInt = Math.floor((Math.random() * 6) + 1);
        diceArray[i].value = randInt;
        diceArray[i].picture = dicePicturesMap[randInt];
      }
      // diceArray[i].active = true;
      arr.push(diceArray[i]) 
    }
    setDiceArray(arr);
  }

  const onSelectedDie = (die) => {
    console.log("die passed in", die)
    let arr = [...diceArray]
    console.log(arr)
    let id = die.id;
    let dice = arr[id]

    if (dice.active === 0 || dice.active === 1) {																	
      if (dice.active === 0) {															
        dice.active = 1;
      } else {
        dice.active = 0;
      }
    }


    // if (dice.active === 0) {
    //     dice.active =1;
    //   }
    //     else {
    //       dice.active = 0;
    //     }
    //     }
    console.log("modified dice", dice)
    setDiceArray(arr);
    calculateRollScore();
  }
  
  const diceList = diceArray.map((die, index) => {
    return  <Die die={die} onSelectedDie={onSelectedDie} key={index} />
  });



  const calculateRollScore = () => {
    let tempScore = 0

    var ones = [];
    var twos = [];
    var threes = [];
    var fours = [];
    var fives = [];
    var sixes = [];

    var scoreArray = [];

    for (var i = 0; i < 6; i++) {						
      if (diceArray[i].active === 1) {
        switch (diceArray[i].value) {
          case 1: ones.push(1);
                  break;
          case 2: twos.push(2);
                  break;
          case 3: threes.push(3);
                  break;
          case 4: fours.push(4);
                  break;
          case 5: fives.push(5);
                  break;
          case 6: sixes.push(6);
                  break;
        }
      }
    }
    switch (ones.length) {
      case 1: scoreArray[0] = 100; break;
      case 2: scoreArray[0] = 200; break;
      case 3: scoreArray[0] = 1000; break;
      case 4: scoreArray[0] = 2000; break;
      case 5: scoreArray[0] = 3000; break;
      case 6: scoreArray[0] = 4000; break;
      default: scoreArray[0] = 0;
    }
    switch (twos.length) {
      case 3: scoreArray[1] = 200; break;
      case 4: scoreArray[1] = 400; break;
      case 5: scoreArray[1] = 600; break;
      case 6: scoreArray[1] = 800; break;
      default: scoreArray[1] = 0;
    }
    switch (threes.length) {
      case 3: scoreArray[2] = 300; break;
      case 4: scoreArray[2] = 600; break;
      case 5: scoreArray[2] = 900; break;
      case 6: scoreArray[2] = 1200; break;
      default: scoreArray[2] = 0;
    }
    switch (fours.length) {
      case 3: scoreArray[3] = 400; break;
      case 4: scoreArray[3] = 800; break;
      case 5: scoreArray[3] = 1200; break;
      case 6: scoreArray[3] = 1600; break;
      default: scoreArray[3] = 0;
    }
    switch (fives.length) {
      case 1: scoreArray[4] = 50; break;
      case 2: scoreArray[4] = 100; break;
      case 3: scoreArray[4] = 500; break;
      case 4: scoreArray[4] = 1000; break;
      case 5: scoreArray[4] = 1500; break;
      case 6: scoreArray[4] = 2000; break;
      default: scoreArray[4] = 0;
    }
    switch (sixes.length) {
      case 3: scoreArray[5] = 600; break;
      case 4: scoreArray[5] = 1200; break;
      case 5: scoreArray[5] = 1800; break;
      case 6: scoreArray[5] = 2400; break;
      default: scoreArray[5] = 0;
    }

     tempScore = scoreArray[0] + scoreArray[1] + scoreArray[2] + scoreArray[3] + scoreArray[4] + scoreArray[5];
     setRollScore (tempScore);

  }

  const onClickBankScore = () => {
    let bankTotal = 0;
    bankTotal = roundScore + rollScore;
    if (player1Turn === true){
    setPlayer1Total(bankTotal);
    } else {
      setPlayer2Total(bankTotal);
    }
    setRollScore(0);
    setRoundScore(0);
    switchPlayer();
    setUpDiceArray();
  };

  const switchPlayer = () => {
    if (player1Turn === true){
      setPlayer1Turn(false);
    } else {
      setPlayer1Turn(true);
    }
  };


  const onClickResetGame = () => {
    setUpDiceArray();
    setPlayer1Turn(true);
    setRollScore(0);
    setRoundScore(0);
    setPlayer1Total(0);
    setPlayer2Total(0);
  }

  return (
      <div className="dice-code">
        <h1>Player</h1>
        <p>{playerToPlay()}</p>
        <p>{calculateRollScore}</p>


        <h1>Dice</h1>

        <button className='button' onClick={onClickRollDice}>Roll Dice</button>
        <button className='button' onClick={onClickBankScore}>Bank Score</button>
        
        <>{diceList}</>
        <hr/>
        {/* <>Roll Score: {rollScore}</> */}
        <br></br>
        <div className="player-scores">
          <div className="P-score">
            <h4>Player One</h4>
            <br></br>
            <p>Roll: {rollScore}</p>
            <p>Round: {roundScore}</p>
            <p>Total: {player1Total}</p>
          </div>
          <div className="P-score">
            <h4>Player Two</h4>
            <br></br>
            <p>Roll: {rollScore}</p>
            <p>Round: {roundScore}</p>
            <p>Total: {player2Total}</p>
          </div>
      </div>
      <button className='button' onClick={onClickResetGame}>New Game</button>
      </div>
      )
};
export default Game;








