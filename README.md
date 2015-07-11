Bowling Challenge
=================

## Synopsis

Using JavaScript count and sum the scores of a bowling game for one player.

* 10 frames per game
* 2 throws in each frame (except the 10th where there is a possibility of 3 throws if a strike or spare was thrown in the 9th)
* 1 - 9 frames
* strike - if all 10 pins are knocked down on the 1st throw (throw1) - second throw is disabled
* spare - if 10 pins are knocked down on the 2nd throw (throw2)
* score if total pins knocked down in a frame is less than 10, the num of pins knocked down is throw1 + throw2 (returns a numeric score rather than a spare / or strike X)

# Scoring
* strike - add 10, plus the number of pins knocked down by the next two balls to the score of the previous frame
* spare - add 10, plus the number of pins knocked down by the next ball to the score of the previous frame
* regular - add the total of pins knocked down by the two throws to the previous frame. If no pins knocked down = gutter ball = zero points


will need to hold the result of the ball throw somewhere - where?


--------------------

* 1 - 9 frames
* 10th frame - if strike or spare thrown in previous go - 3 throws, if not - disable third throw


frameScore = number of pins knocked down, pluc bonuses for strikes and spares

frameNumber = 10;

NOTE: after every frame the 10 pins are reset.

Game - has 10 Frames
Frame - can have 2 or 3 rolls, depending on the frame



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
