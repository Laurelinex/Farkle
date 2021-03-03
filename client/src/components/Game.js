import React from'react';
import { useState, useEffect } from 'react';
import { FaDiceOne } from "react-icons/fa";
import { FaDiceTwo } from "react-icons/fa";
import { FaDiceThree } from "react-icons/fa";
import { FaDiceFour } from "react-icons/fa";
import { FaDiceFive } from "react-icons/fa";
import { FaDiceSix } from "react-icons/fa";
import "./Game.css";
import Die from "./Die";
import PlayerOneSelector from './PlayerOneSelector';
import PlayerTwoSelector from './PlayerTwoSelector';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import PlayerForm from './PlayerForm';
import {fetchAll} from '../services/PlayersServices';

const Game = () => {

  const [players, setPlayers] = useState([]);
  const [selectedPlayerOne, setSelectedPlayerOne] = useState({}); 
  const [selectedPlayerTwo, setSelectedPlayerTwo] = useState({}); 
  const [diceArray, setDiceArray] = useState([]);
  const [rollScore, setRollScore] = useState(0);
  const [roundScore, setRoundScore] = useState(0);
  const [player1Total, setPlayer1Total] = useState(0);
  const [player2Total, setPlayer2Total] = useState(0);
  const [player1Turn, setPlayer1Turn] = useState(true);
  const [message, setMessage] = useState("Roll them dice.");
  const [playerOneName, setPlayerOneName] = useState("Player One")
  const [playerTwoName, setPlayerTwoName] = useState("Player Two")

  const dicePicturesMap = {
    1: <FaDiceOne />, 2: <FaDiceTwo />, 3: <FaDiceThree />, 4: <FaDiceFour />, 5: <FaDiceFive />, 6: <FaDiceSix />
  }

  useEffect(() => {
    setUpDiceArray();
    playerToPlay();
    fetchAll()
      .then(data => setPlayers(data));
  }, []);

  const handleSelectedPlayerOne = (selectedPlayerOne) => {
    setSelectedPlayerOne(selectedPlayerOne)
    setPlayerOneName(selectedPlayerOne.playerName)
    // console.log("name", selectedPlayerOne.playerName);
  }

  const handleSelectedPlayerTwo = (selectedPlayerTwo) => {
    setSelectedPlayerTwo(selectedPlayerTwo)
    setPlayerTwoName(selectedPlayerTwo.playerName)
  }

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

  // To change for a set message state
  const playerToPlay = () => {
  	if (player1Turn === true) {
      return " One start your round by rolling the dice.";
    } else {
      return " Two start your round by rolling the dice.";
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
    getFarkleStatus();
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
    // console.log("die passed in", die)
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

    // console.log("modified dice", dice)
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
    setPlayer1Total(player1Total + bankTotal);
    } else {
      setPlayer2Total(player2Total + bankTotal);
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

  // To change for a set message state
  const alertWinner = () => {
    if (player1Total >= 1000){
      return ("Player One Triumphs")
    } else if (player2Total >= 1000) {
      return ("Player Two Prevails")
    } else if (player1Total < 1000 && player2Total < 1000) {
      return (" still all to play for")
    }
  }

  const findTriples = () => {
      
    let counts = {};
    for (let i = 0; i < 6; i++) {
      if (diceArray[i].active === 0){
        let num = diceArray[i].value;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
  }
 
     for (const [_, frequency] of Object.entries(counts)) {
        if (frequency >= 3) {
            console.log("triples", true)
            return true;
        }
     }
     console.log("triples", false)
    return false;
}

  const checkOne = () => {
    for (let i = 0; i < 6; i++) {
      if (diceArray[i].active === 0) {
        if (diceArray[i].value === 1){
          console.log("checkOne", true)
          return true;
        }
      }
    }
    console.log("checkOne", false)
    return false;
  }

  const checkFive = () => {
    for (let i = 0; i < 6; i++) {
      if (diceArray[i].active === 0) {
        if (diceArray[i].value === 5){
          console.log("checkFive", true)
          return true;
        }
      }
    }
    console.log("checkFive", false)
    return false;
  }

  // To change for a set message state align with top messages
  const getFarkleStatus = () => {

    let isFarkle = !findTriples() && !checkOne() && !checkFive();
    if (isFarkle === true) {
      console.log("you farkled it up");
      setMessage("you farkled it up");
      console.log("switching to player2")
      switchPlayer();
      setUpDiceArray()
    } else {
      console.log("valid score");
      setMessage ("choose dice to score");
    }
}

  return (
      <div className="game">
        <div className="player-selectors">
          <div>Player One</div>
          <PlayerOneSelector players={players} onPlayerSelected={handleSelectedPlayerOne} />
          <div>Player Two</div>
          <PlayerTwoSelector players={players} onPlayerSelected={handleSelectedPlayerTwo} />
        </div>
        
        <PlayerForm />    

        <h3>Player{playerToPlay()}</h3>
        <p className="winner">Winner: {alertWinner()}</p>  

        <p>Roll: {rollScore}</p>
        <p>Round: {roundScore}</p>

        <p>{message}</p>

        <div className="game-box-flex">
          
          <div className="all-dice">
            {diceList}
          </div>

          <div className="roll-n-bank-buttons">
            <button className='button' onClick={onClickRollDice}>Roll Dice</button>
            <button className='button' onClick={onClickBankScore}>Bank Score</button>
          </div>

        </div>
        <div className="player-scores">

            <div className="P-score">
              <div>{playerOneName}</div>
              {/* <PlayerOne playerOne={selectedPlayerOne}/> */}
              {/* <h4>{playerOneName}</h4> */}
              <br></br>
              <p>Total: {player1Total}</p>
            </div>

            <div className="P-score">
            <div>{playerTwoName}</div>
            {/* <PlayerTwo playerTwo={selectedPlayerTwo}/> */}
              <br></br>
              <p>Total: {player2Total}</p>
            </div>

        </div>
        <hr></hr>
        <div>
          <button className='button' onClick={onClickResetGame}>New Game</button>
        </div>
      </div>
      )
};
export default Game;








