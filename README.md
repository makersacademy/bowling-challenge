
Bowling Challenge in JavaScript
=================

* Some of the logic, particularly that pertaining to the bonuses is taken from my own attempt for a similar challenge in Ruby: https://github.com/Josenewmano/bowling-challenge-ruby

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. THE USER INPUTS THE ROLLS.**

To use, start by forking this repo. This project relies on Jest for testing. Follow the following instructions to set up the Jest testing environment if you are unsure: https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/setting_up_project.md

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

This project employs two methods to calculate the scores: roll() and show(). Thes methods in turn rely on a number of private methods to ensure that that the roll scores are valid, and are entered in the correct positions on the score card. I believe that the testing covers all of the major edge cases possible. I also believe that this makes the code quite readbale for novices, or those unfamilar to the code.

This project relies on ES lint to ensure standard JavaScript convetions are followed: https://eslint.org/docs/user-guide/getting-started
The conventions I added are based on common js.

Eventually, I intend to add an interactive animated interface with jQuery.


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
