
Bowling Challenge
=================

## Overview

This is a Bowling Scorecard created using JavaScript for the logic and HTML + jQuery for the User Interface.

You can easily play with the UI here: http://robertclayton.me/bowlingScorecard

Otherwise to install please follow these steps:
1. open your terminal or equivalent program.
2. enter: 'git clone https://github.com/RobertClayton/bowling-challenge.git'.
3. enter: 'cd bowling-challenge'.
4. enter: 'open public/views/index.html'.
5. If you wish to view the tests please enter: 'open public/SpecRunner.html'.

### Functionality
- To enter a score, click the corresponding button and the score will be input into the score box.
  - When a strike has been entered the second roll's scoring box will automatically be skipped.
- Totals will be updated automatically.
- Strikes and Spares will calculate automatically.
  - This includes the additional bonus rolls at the end of the game if a spare or strike/s have been scored.
- To reset the game please refresh the page.

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares.

* Create a nice interactive animated interface with jQuery.

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
