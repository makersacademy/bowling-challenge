# Bowling Challenge in JavaScript

The project is a translation of last weeks weekend challenge which was written in Ruby to JavaScript.<br>
The program acts as a electronic score card for a game of bowling which allows users to input the pins they<br>
knock down in a frame frame over 2 rolls and displays the score on a per frame and culmulative basis.

## Project Planning

[Project Planning Draft Notes Page 1](https://github.com/Battery0/bowling-challenge/blob/main/public/planning1.jpg)

[Project Planning Draft Notes Page 2](https://github.com/Battery0/bowling-challenge/blob/main/public/planning2.jpg)

## To Do

1. Account for spares bonus points
2. Account for strike bonus points
3. Include stubs & doubles to issolate tests
4. Add test for console output on 'game over'

## Getting started

`git clone https://github.com/Battery0/bowling-challenge.git`

## Usage

Open SpecRunner.html inside the project directory in chrome. Open the dev tools in chrome.<br>
under the Console or Sources tab, enter the following method calls:

1. Create a new game instance

    `game = new Game`

2. Enter the number of pins knocked down in both rolls for your frame. Eg:

    `game.frameRolls(5, 1);`

3. Keep adding frame rolls. If at any time you want to see your current frame score

    `game.frameScore();`

3.  If you want to see your culmulative score for the frames played so far

    `game.totalScore();`

4. The game will output 'Game Over' after you've entered your last 2 rolls for the 10'th frame


## Running tests

Open SpecRunner.html inside the project directory in chrome. Jasmine tests will automatically run




Bowling Challenge
=================

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. 

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

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
