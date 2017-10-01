Bowling Challenge
=================

[![Build Status](https://api.travis-ci.org/diaryofdiscoveries/bowling-challenge.svg?branch=master)](https://travis-ci.org/diaryofdiscoveries/bowling-challenge)

- Implementation of a bowling scorecard in JavaScript

Technologies used
----
- JavaScript

Tested using:
----
- Jasmine

How to run tests
----
```sh
$ git clone https://github.com/diaryofdiscoveries/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```
- Refresh browser to run tests

How to Use
----
#### Create a new game instance:
```
var game = new Game()
```
#### Register a roll

The roll method accepts an array as the argument. The array contains the score for the first and second roll.
```
game.roll([5,4])
```
In this example the number of pins knocked were 5 for the first roll and 4 for the second roll.

The Rules
----
A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

To Do
----
### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.
