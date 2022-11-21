
Bowling Challenge
=================

## The Task
This was a solo coding challenge that I completed during the Makers bootcamp.
It calculates the correct scores for each round in a game of ten-pin bowling.
I followed the TDD method to write this program - therefore I always know what works and have lots of tests to refer to when something doesn't.  
I built a basic version of the program first that calculates the scores without strikes or spares and then gradually built on that.
Then I refactored again and again - generalising behaviours and organising my code into reusable classes and functions. I followed the principle of Object-Oriented-Programming.


## Bowling — Rules
These are the standard ten-pin bowling rules I implemented.

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
