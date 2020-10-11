
Bowling Challenge
=================

## My App
This app is a bowling scorecard. 
You can use it here: http://veronica-bowling.surge.sh

Rolls will be displayed on the scorecard as they are entered.

The running frame scores will display once they are able to be calculated - in the case of a spare or a strike, this will be after the following 1 or 2 rolls.




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


![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Domain Modelling & Design

### Process Flows
![Bowling scorecard process flows](https://app.lucidchart.com/publicSegments/view/0fed0ca6-b8b2-4dca-be69-fbc4d3ff04ab/image.png "Bowling Scorecard Process Flows")

#### Scorecard
* calculates a running total score, which is the sum of all frame scores up to the given frame number
* knows the current frame
* takes user input of pins bowled and stores them in the correct frame
* displays the bowls, frames and score

#### Frame
* has a frame number
* can have 1-2 rolls, with the exception of frame 10 which can have up to 3.
	* Frames 1-9
		* If bowl 1 of frame == 10 then it will only have one bowl
		* Else will have 2 bowls
	* Frame 10
		* if bowl 1 is a strike or 2 is a spare then the player has a third bowl
		* Else player has 2 bowls
* has a frame score, which is calculated based on the rolls:
	* if frame total is < 10 and count of rolls == 2
		* then frame score = total pins of frame rolls
	* if frame total == 10 and count of rolls == 2 (i.e. SPARE)
		* then frame score = total pins of frame rolls + bonus of the pinfall of the next roll
	* if frame total == 10 and count of rolls == 1 (i.e. STRIKE)
		* then frame score = total pins of frame rolls + bonus of the pinfall of the next 2 rolls

#### Roll
* has a pin score of 0 - 10

#### UI
I have used the linked example for the table styling, but all coding of the logic and populating of the data is my own: 
https://codepen.io/owenjam/pen/reeLWN