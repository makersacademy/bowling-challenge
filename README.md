
Bowling Challenge
=================

## The Task

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

### Initial Thoughts:

* Expecting to have two classes: Game and frame.
* Responsibilities of Frame:
    - Knowing if first bowl is a strike - return 10
    - Knowing if second bowl is a spare - return 10
    - If neither, adding scores for bowl one and two
    - Strike bonus calculation
    - Spare bonus calculation
    
 * Responsibilities of Game:
    - Initialises with an empty array to add frames to
    - Controlling the flow of scoring from frame to frame
    - If it is the 10th frame, calculating the final score correctly
    - Calculating score based on user input of bowls
    


## Class Diagram:

<p align="center">
<img src=/images/ClassDiagram.png width=30%>
</p><br><br>

I expect to add more functionality or amend these intial thoughts once I begin to create first tests and write some code.
