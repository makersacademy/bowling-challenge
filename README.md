
Bowling Challenge
=================

This is a scorecard programme. The user enters their rolls as an array of arrays, with each array representing a frame, and receieve their score back.

## EXAMPLE INPUT / OUTPUT
--------------
[[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]]=> 'Gutter Game: 0 points' \
[[0, 2], [6, 0], [1, 0], [0, 8], [0, 0], [0, 0], [0, 1], [1, 4], [5, 3], [4, 2]] => 'You scored 37 points' \
[[2, 8], [6, 2]] => 'You scored 24 points' \
[[10, 0], [6, 2]] => 'You scored 26 points' \
[[2, 8], [10, 0], [4, 5]] => 'You scored 48 points' \
[[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10] => 'Perfect Game: 300 points' \
[[0, 2], [6, 0], [1, 0], [0, 8], [0, 0], [0, 0], [0, 1], [1, 4], [5, 3], [4, 2], [5] => THROWS AN ERROR (too many scores) \

## What I completed

The score is correctly calculated for a full length or incomplete game, including strikes and spares. You get a different message for a gutter game or a perfect score.

If I had more time, I would:
* account for if the strike is entered as [10] rather than [10,0] or [0,10]
* create a user interface
* add errors for invalid inputs (e.g. the array is too long, too many frames in total)

## To run on your computer
* fork and clone this repo
* open node with `node`
* `const Scorecard = require('./Scorecard');`
* `const myScorecard = new Scorecard([YOUR ROLLS HERE, AS AN ARRAY OF ARRAYS])`
* `myScorecard.giveFinalScore()` will return your score

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.
* Create a UserInterface class, allowing you to run a game from the command line.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
