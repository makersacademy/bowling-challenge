# Bowling Challenge

To check the scores are following the rules of bowling I use this tool: https://www.bowlinggenius.com/

The rules of bowling can become complex when you start adding the bonuses and the 10th frame.

For the folder structure I asked ChatGPT and searched on google which led me to this: https://stackoverflow.com/questions/5178334/folder-structure-for-a-node-js-project

## Diagram

INSERT DIAGRAM HERE

## Readline feature

Implement a readline feature to get the user input.

## How to use

1. Clone this repo
2. Run `npm install`
3. Run `userInterface.js` in the terminal with `node userInterface.js`

## Classes
frame.js: Single frame of the bowling game.
Methods: isStrike, isSpare, isFinalFrame

scorecard.js: Handles the calculation of the scores.
Methods: addFrame, getScore, calculateStrikeBonus, calculateSpareBonus, isPerfectGame, isGutterGame

game.js: Represents a bowling game with 10 frames.
Methods: roll, startGame, endGame

userInterface.js: Provides the user interface for the terminal.
Methods: displayWelcomeMessage, getUserInput, displayScore, displayError