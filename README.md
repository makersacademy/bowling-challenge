
Bowling Challenge
=================


This project aims to build a bowling scorecard using Javascript. It was built test-first using Jasmine.

At the moment, the program doesn't include the following functionalities:

* Bonus points for Strikes and Spares
* Behavior of the 10th frame
* Messages for Gutter and Perfect Games
* A nice interface with jQuery
* Set up [Travis CI](https://travis-ci.org) to run the tests
* Add [ESLint](http://eslint.org/) to the codebase and make the code conform.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

## User stories

```
As a player,
So that I can know my score,
I want to input the number of knocked down pins for each roll and get the score.

As a player,
So that I can count my score for each frame,
I want to sum the score of both rolls.

As a player,
So that I can remember my score,
I want the score of each frame displayed on a scoreboard.

As a player,
So that I can improve myself,
I want to see the total score of my game.
```




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
