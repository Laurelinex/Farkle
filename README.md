# Farkle Project Brief

<p align="center">
<img height="150" src="https://github.com/Laurelinex/W9_FarkleProject/blob/main/client/src/images/Farkle_logo.png">
</p>

Hear ye, hear ye! From medieval times comes a Bohemian game of chance for peasants and noblemen alike.

## Introduction

Create a browser game based on an existing card or dice game. Model and test the game logic and then display it in the browser for a user to interact with.

Write your own MVP with some specific goals to be achieved based on the game you choose to model.

You might use persistence to keep track of the state of the game or track scores/wins. Other extended features will depend on the game you choose.

### MVP

A user should be able to play a game of Farkle:
- See 6 dice and roll the dice
- Select and add dice to hand (highlight or circle - not animated) 
- See the score of selected dice
- Two buttons: Roll Dice (not selected only) + Bank Points
- Score adding up as dice get added to hand but only added to total score if saving turn (banking)
- Save/Bank score and hand turn to computer
- Loss of points if remaining dice aren’t returning 1 or 5, three of a kind (FARKLE)
- Points adding up as per rules
- See a result message: eg P1 wins 
- Max 6 rounds - banks automatically

### Extensions

- Adding instructions component
- Name input for players
- Adding scores/wins and keeping track in db
- Score added to leaderboard
- OnHover animations for win details
- Dice animations
- Styling page 
- Design a wee game logo
- Add to scoring logic: small and large straight
- Scrap max 6 rounds - implement Hot Dice
- Play against computer

<h3>Instructions to run the app</h3>

- Clone repo
- cd client
- npm install
- npm start (should run at localhost:3000)
- cd server
- npm run seeds
- npm run server:dev

<h3>Technologies Used</h3>
JavaScript, HTML, CSS, React, Express, MongoDB

<h3>Screenshots of application</h3>

<img src="https://github.com/Laurelinex/W9_FarkleProject/blob/main/client/src/images/f_1_intro.png">
<img src="https://github.com/Laurelinex/W9_FarkleProject/blob/main/client/src/images/f_2_scoring.png">