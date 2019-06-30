# Bowling Challenge

## About

This is a bowling scorecard!  It will count and sum the scores for a single-player ten-pin bowling game.

> A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

**Strike:**
Knock down all 10 pins with the first roll in a frame. 
 - The frame ends immediately (since there are no pins left for a second roll).
 - The bonus for that frame is the number of pins knocked down in the next frame.

**Spare:**
Knock down all 10 pins with the two rolls of a frame.
 - The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

**10th frame:**
Roll a strike or spare in the 10th frame and roll for the bonus.
 - They can never roll more than 3 balls in the 10th frame. 
 - Additional rolls only count for the bonus not for the regular frame count.

>10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).

>1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

**Gutter Game:**
The player never hits a pin (20 zero scores).

**Perfect Game:**
Roll 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). 
- The Perfect Game scores 300 points.


## User Stories

### Epic:
```
As a bowler,
So that I can keep track of my bowling score,
I want to see a scorecard and my total game score.
```

### Stories:
```
As a bowler,
When I knock down 1 pin in a frame,
I want to be awarded 1 point.
```
<!-- ```
As a bowler,
When I knock down 2 pins in a roll,
I want to be awaded 2 points.
... 3 pins/points
... 4 pins/points
... 5 pins/points
... 6 pins/points
... 7 pins/points
... 8 pins/points
... 9 pins/points
... 0 pins/points
``` -->

<!-- ```
As a bowler,
When I have a gutter game,
I want to score 0 points
``` -->
<!-- 
```
As a bowler,
When I knock down 10 pins in a roll,
I want to score a strike.
``` -->
<!-- 
```
As a bowler,
When I don't have a pinfall of 10 on my first roll,
I want to get a second roll in the frame
``` -->

### Example Scorecard

![Example bowling scorecard](https://thepracticaldev.s3.amazonaws.com/i/xbntvciwnr7khq4p0qyp.png)