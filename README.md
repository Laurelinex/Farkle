# Project Brief

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