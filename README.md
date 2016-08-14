
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Directions

### Setup

* Clone the repository
```
git clone git@github.com:richo225/bowling-challenge.git
```
* Update/install gems
```
bundle install
```
* Run node
```
node
```
* Load required project files
```
.load ./src/Game.js
.load ./src/Frame.js
.load ./src/Score.js
```

### First frame

```
> game = new Game()
Game {}

> game.begin()
Game {
  frame:
   Frame {
     currentFrame: 1,
     currentRoll: 1,
     pinsStanding: 10,
     firstPinsDown: 0,
     secondPinsDown: 0 },
  score: Score { total: 0, frameScores: [] } }

> game.frame.firstRoll()
Game {
  frame:
   Frame {
     currentFrame: 1,
     currentRoll: 2,
     pinsStanding: 7,
     firstPinsDown: 3,
     secondPinsDown: 0 },
  score: Score { total: 0, frameScores: [] } }

> game.frame.secondRoll()
Game {
  frame:
   Frame {
     currentFrame: 1,
     currentRoll: 2,
     pinsStanding: 3,
     firstPinsDown: 3,
     secondPinsDown: 4 },
  score: Score { total: 0, frameScores: [] } }

> game.saveScore()
Game {
  frame:
   Frame {
     currentFrame: 1,
     currentRoll: 2,
     pinsStanding: 3,
     firstPinsDown: 3,
     secondPinsDown: 4 },
  score: Score { total: 7, frameScores: [ [Object] ] } }

> game.score
Score { total: 7, frameScores: [ { first: 3, second: 4 } ] }

> game.nextFrame()
Game {
  frame:
   Frame {
     currentFrame: 2,
     currentRoll: 1,
     pinsStanding: 10,
     firstPinsDown: 0,
     secondPinsDown: 0 },
  score: Score { total: 7, frameScores: [ [Object] ] } }
```
### Second frame
```
> game.frame.firstRoll()
Game {
  frame:
   Frame {
     currentFrame: 2,
     currentRoll: 2,
     pinsStanding: 2,
     firstPinsDown: 8,
     secondPinsDown: 0 },
  score: Score { total: 7, frameScores: [ [Object] ] } }

> game.frame.secondRoll()
Game {
  frame:
   Frame {
     currentFrame: 2,
     currentRoll: 2,
     pinsStanding: 1,
     firstPinsDown: 8,
     secondPinsDown: 1 },
  score: Score { total: 7, frameScores: [ [Object] ] } }

> game.score
Score { total: 7, frameScores: [ { first: 3, second: 4 } ] }

> game.saveScore()
Game {
  frame:
   Frame {
     currentFrame: 2,
     currentRoll: 2,
     pinsStanding: 1,
     firstPinsDown: 8,
     secondPinsDown: 1 },
  score: Score { total: 16, frameScores: [ [Object], [Object] ] } }

> game.score
Score {
  total: 16,
  frameScores: [ { first: 3, second: 4 }, { first: 8, second: 1 } ] }

> game.score.getFrameScores(2)
{ first: 8, second: 1 }

> game.score.getFrameTotal(2)
9
>
```


# User stories

```
As a player
So that I can play a frame of bowling
I can roll a ball
```
```
As a player
So that I know how well I'm doing
I can see how many pins I knocked down
```
```
As a player
So that I can get bonus points
Scoring a strike adds a bonus equal to the points from my next two rolls
```
```
As a player
So that I can get bonus points
Scoring a spare adds a bonus equal to the points from my next roll
```
```
As a player
So that any strike or spares are carried over in the 10th frame
I can roll one/two additional balls for the bonus
```
```
As a player
So that I can start a new game
I am given my total score after 10 frames
```
```
As a player
So that I can get better
I am notified of a gutter game when I score no points
```
```
As a player
So that I can be a baller
I am notified of a perfect game when I score the max 300 points
```

### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
