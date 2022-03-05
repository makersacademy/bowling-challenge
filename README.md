# Bowling Challenge

![alt text](https://github.com/nyahehnagi/bowlingr-challenge/blob/main/docs/bowling.png)

This is a program which calculates the score of a game of 10 pin bowling

The following API is exposed from the ScoreCard class

* `#currentFrameNumber` - shows the current frame
* `#logRoll(pinsDowned)` - logs a roll from the player, pass in a number from 0-10
* `#score` - shows the current score at any point in the game

----------------------
## Installation
----------------------
Install node via your favourite package manager if required, see [here](https://nodejs.org/en/ "Node") for more details

To install this code from the latest source
~~~~
git clone git@github.com:nyahehnagi/bowling-challenge.git
~~~~


## Testing
-----------------------
To run jest tests
~~~~
$> npx jest
~~~~

## To run the game in command line
~~~~
$> node .
~~~~
to start the game.

Playing the game, enter rolls at the prompt
~~~~
Welcome to 10 Pin Bowling
Enter Roll> 3
Next Roll 1: Current Score: 0
Enter Roll> 7
SPARE! End of Frame 1: Current Score: 0
Enter Roll> 10
STRIKE! End of Frame 2: Current Score: 20
Enter Roll> 1
Next Roll 3: Current Score: 20
Enter Roll> 3
End of Frame 3: Current Score: 38
Enter Roll> 
~~~~

The game will end when 10 Frames have been completed.
~~~~
Game Over, you scored: 300
~~~~
