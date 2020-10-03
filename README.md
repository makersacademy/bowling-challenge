
Bowling Challenge
=================

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


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

## Design (WIP)
The below are rough notes (WIP) on potential design, likely to change as I develop the scorecard program.

Scorecard
* has a running total score, which is the sum of all frame scores
* knows the current frame
* takes user input of pins bowled and stores them in the correct frame
* displays the bowls, frames and score

Frame
* has a frame number
* can have 1-2 rolls, with the exception of frame 10 which can have up to 3.
	* Frames 1-9
		* If bowl 1 of frame == 10 then it will only have one bowl
		* Else will have 2 bowls
	* Frame 10
		* if bowl 1 and 2 are strikes or 2 is a spare then the player has a third bowl
		* Else player has 2 bowls
* has a frame score, which is calculated based on the rolls:
	* if frame total is < 10 and count of rolls == 2
		* then frame score = roll 1 + roll 2
	* if frame total == 10 and count of rolls == 2 (i.e. SPARE)
		* then frame score = roll 1 + roll 2 + bonus of the pinfall of the next roll
	* if frame total == 10 and count of rolls == 1 (i.e. STRIKE)
		* then frame score = roll 1 + roll 2 + bonus of the pinfall of the next 2 rolls

Roll
* has a pin score of 0 - 10