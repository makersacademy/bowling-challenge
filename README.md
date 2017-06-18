Bowling Challenge :bowling:
=================

[![Build Status](https://api.travis-ci.org/marioribeiro/bowling-challenge.svg?branch=master)](https://travis-ci.org/marioribeiro/bowling-challenge)

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll).

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame.


### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## How to Use

Create a new game instance:

```javascript
game = new Game()
```

Register a roll
The roll method accepts an array as the argument. The array contains the score for the first and second roll.

```javascript
game.roll([3,1])
```

In this example the number of pins knocked were 3 in the first frame and 1 in the second frame.
## To Do

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.


### Strike Bonus
The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spare Bonus
The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).






