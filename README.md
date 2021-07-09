
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

## My Solution
A Makers Week 6 solo weekend challenge - Bowling Challenge in JS

* **Languages used**: JavaScript
* **Testing frameworks**: Jasmine
* **Linting**: 

### Domain Model
| Class | Game |
| --- | --- |
| **Properties:** | frames: Array (9 frames and 1 finalframe) |
| **Actions:** | roll(pins : Int) : Nil |
| | score() : Int |
| | finalScore() : Int |

| Class | Frame |
| --- | --- |
| **Properties:** | rolls : Array (of Ints) |
|  | PINS : 10 |
| **Actions:** | isEnded() : Boolean |
| | add(roll : Int) | 
| | score() : Int | 
| | isSpare() : Boolean | 
| | isStrike() : Boolean |
| | pins(turn : Int) : Int | 

| Class | FinalFrame |
| --- | --- |
| **Properties:** | rolls : Array (of Roll instances) |
|  | PINS : 10 |
| **Actions:** | isEnded() : Boolean |
| | add(roll : Roll) | 
| | score() : Int | 
| | isSpare() : Boolean | 
| | isStrike() : Boolean |
| | pins(turn : Int) : Int | 
| | bonusScore() : Int | 
| | resetPins() |

**Relationships**
* Game & Frame: 1 to 9
* Game & FinalFrame: 1 to 1

### My approach
* I looked at my previous solution to bowling-challenge-ruby for inspiration.
* This time I need to create a Game class that is able to roll a number of pins, calculate a score after each frame ends, and calculate the final_score.
* Next I adjusted my Domain Model:

  **Game**
  * Each Game has 10 frames, Game stores 9 different instances of Frame, and 1 instance of the FinalFrame
  * Game should be able to `roll()`, `score()`, and calculate the `finalScore()`.
  * The Game should iterate through each Frame and sum each frame's `score()` plus `bonusScore()`s to calculate `finalScore()`.

  **Frame**
  * Normal Frames end when 2 rolls have been made, or if there is a strike. So it needs to know if it `isEnded()`. Each roll is an integer stored in a `rolls` property.
  * Each Frame has a `score()`, but excluding the bonus scores which would be calculated by the `finalScore()` function in Game, this is because the bonus scores are dependent on future frames. 

  **FinalFrame**
  * The FinalFrame is a special Frame that has **upto** 3 integers stored in the `rolls` property. The game ends with 2 rolls if the first two rolls are less than 10. It can calculate it's own `score()` excluding the bonus score.

  **Please see above final Domain Model (Class Diagram)**
* Next step here!

### How to use


### Improvements
