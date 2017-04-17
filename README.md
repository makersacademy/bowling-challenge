
Bowling Challenge
=================

#### Instructions for use:
  - Clone repo local
  - Run tests by opening ```jasmine-standalone-2.5.2/SpecRunner.html``` in your browser
  - Start bowling...

#### Technologies used:
  - JavaScript
  - Jasmine
  - JQuery

Task:
-----

In this project I implemented a simple bowling scorecard, which accepts a score of knocked down pins for each frame bowled.  
The frame constructor is responsible for handling the current roll and knocked over pins.  
The game constructor handles the running score, adding bonus scores for strikes and spares where appropriate.  
The user interface is unfinished, and if I were to come back to this project it would be relatively straightforward to link up to the game logic. I have started by randomising the number of pins bowled when the user clicks 'bowl' so this currently acts as a bowling game, rather than a scorecard where the user can track their live bowling score.


## Rules
-----
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
