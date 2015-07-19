Bowling Challenge
=================

## Synopsis

Using JavaScript count and sum the scores of a bowling game for one player, to create a bowling scorecard.

* 10 frames per game
* 2 throws in each frame (except the 10th where there is a possibility of 3 throws if a strike or spare was thrown in the 9th)
* 1 - 9 frames
* strike - if all 10 pins are knocked down on the 1st throw
* spare - if 10 pins are knocked down on the 2nd throw


# Technologies used
* Javascript
* HTML, CSS (minimal)
* Jasmine


# Scoring
* strike - add 10, plus the number of pins knocked down by the next two balls to the score of the previous frame
* spare - add 10, plus the number of pins knocked down by the next ball to the score of the previous frame
* regular - add the total of pins knocked down by the two throws to the previous frame. If no pins knocked down = gutter ball = zero points

--------------------

* 1 - 9 frames
* 10th frame - if strike or spare thrown in previous go - 3 throws, if not - disable third throw




### Optional Extra

Create a nice interactive animated interface with jQuery.
