# Bowling Challenge

![alt text](https://github.com/nyahehnagi/bowling-challenge/blob/main/docs/end_bowling.png)

This is a program which calculates the score of a game of 10 pin bowling

The following API is exposed from the ScoreCard class

* `currentFrameNumber()` - shows the current frame
* `logRoll(pinsDowned)` - logs a roll from the player, pass in a number from 0-10
* `score()` - shows the current score at any point in the game
* `gameComplete()` - returns true if the game has finished, false otherwise
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

* Start of a game

![alt text](https://github.com/nyahehnagi/bowling-challenge/blob/main/docs/start_bowling.png)

* During a game

![alt text](https://github.com/nyahehnagi/bowling-challenge/blob/main/docs/mid_bowling.png)

* End of the game

![alt text](https://github.com/nyahehnagi/bowling-challenge/blob/main/docs/end_bowling.png)


The game will end when 10 Frames have been completed.
~~~~
Game Over, you scored: 300
~~~~
