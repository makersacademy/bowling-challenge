# Bowling Challenge

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
git clone ggit@github.com:nyahehnagi/bowling-challenge.git
~~~~


## Testing
-----------------------
To run jest tests
~~~~
$> npx jest
~~~~

## In the Node REPL
-----------------------
Start your node REPL
~~~~
$> node
~~~~
In the REPL
~~~~
// load the code in the REPL
> .load ./lib/scorecard.js

// create an instance of scorecard
> scorecard = new ScoreCard(Frame, LastFrame)
ScoreCard {
  frameClass: [class Frame],
  lastFrameClass: [class LastFrame extends Frame],
  frames: []
}

// Play the game
> scorecard.logRoll(3)
undefined
> scorecard.logRoll(7)
undefined
> scorecard.logRoll(4)
undefined
> scorecard.score()
14
And so forth until the game ends

~~~~