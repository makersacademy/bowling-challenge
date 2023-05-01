# Bowling Challenge

To check the scores are following the rules of bowling I use this tool: https://www.bowlinggenius.com/

The rules of bowling can become complex when you start adding the bonuses and the 10th frame.

## Classes
frame.js: Single frame of the bowling game.
Methods: isStrike, isSpare

scoreCard.js: Handles the calculation of the scores.
Methods: addFrame, getScore

game.js: Represents a bowling game with 10 frames.
Methods: play

userInterface.js: Provides the user interface for the terminal.
Methods: displayWelcomeMessage, getUserInput, displayScore, displayError