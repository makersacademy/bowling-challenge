
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extra

Create a nice interactive animated interface with jQuery.

Strikes
----
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares
----
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame
----
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## User Stories

Based on the spec above, I worked out the following user stories that my scoring programme should fulfil.

```
As a player
So I can keep track of my score
I want to fill in the number of pins I knocked down after each roll

As a player
So I can see if I'm winning or losing
I want to be able to see my total score

As a player
So I know how many turns I have left
I want to see which frame I am on

As a player
So I know whether my next roll will count towards a bonus
I want to be alerted if I win a strike or a spare

As a player
So I can win bonus points
I want bonus points for strikes and spares to be calculated and added to my score

As a player
So I can see how well I played
I want to see a list of scores for all previous frames
```
