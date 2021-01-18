
Bowling Scorecard (JavaScript)
=================
## Brief

The purpose of this project was to build a bowling scorecard in JavaScript, which sums the scores across ten frames of a game of ten pin bowling for a single player.

## Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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

## Getting Started

This program runs in the terminal console allowing for user input.

To begin,clone the repository from GitHub:
```
$ git clone ...
$ cd bowling-challenge
```
Create a new scorecard:
```
var scorecard = new Scorecard();
```
### Completed
- Calculates correct cumulative scores for ten frames(inc bonus rolls)

### To action
- Build the interface

### Queries
- Originally planned to use one or two other classes, although with the approach I took, I ended up keeping it to a single class
