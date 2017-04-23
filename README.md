
- HOW TO
- BUSINESS LOGIC
- APPROACH
- RESOURCES


HOW TO
=======
Final roll is required to calculate total score and finish game. This roll does not count towards score.



1. BUSINESS LOGIC
=================

GAME
- A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.
- After every frame the 10 pins are reset.

FRAME
- In every frame the player can roll one or two times. The actual number depends on strikes and spares.

SCORE
- The score of a frame is the number of knocked down pins plus bonuses for strikes and spares.


SCORING
## Strikes

- The player has a strike if he knocks down all 10 pins with the first roll in a frame.
- The frame ends immediately (since there are no pins left for a second roll).
- The bonus for that frame is the number of pins knocked down by the next two rolls.
- That would be the next frame, unless the player rolls another strike.

## Spares

- The player has a spare if the knocks down all 10 pins with the two rolls of a frame.
- The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

- If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus.
- But they can never roll more than 3 balls in the 10th frame.
- The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

- A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame).
- The Perfect Game scores 300 points.



APPROACH
MVP - 1 player



RESOURCES
[Latest jasmine build](https://github.com/jasmine/jasmine/releases)
[Setting up jasmine](https://github.com/makersacademy/course/blob/master/thermostat/walkthroughs/setting_up_jasmine.md)

BACKGROUND INFO / READING
- [Using Strict Mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- ['this' in Javascript](http://javascriptissexy.com/understand-javascripts-this-with-clarity-and-master-it/)
- [Bowling score calculator] (http://www.bowlinggenius.com/)
