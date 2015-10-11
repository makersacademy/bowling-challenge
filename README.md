Bowling Challenge
======================

Synopsis
-----

The task set was to build a scoreboard which would record the scores of a bowling game. Each bowling game consists of 10 frames. For each frame there are two balls to be rolled. The game has special rules which are explained below:

Strike:
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares:
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame:
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.


Approach towards solving the challenge
--------------------------------------

This challenge was difficult to start because I had to understand the rules of bowling. I firstly went over the rules and understood how the strike, spare and 10th frame effected the scoreboard. Once I had understood this, it made it much easier to execute the challenge.

I used Jasmine to carry out TDD. This allowed me to progress quicker through the production of the scoreboard and also reduced the likliness of any bugs.

The bowling scoreboard is fully functional; however if you feel that there are any errors please let me know.


Tests passed
---------------------------------
```
11 specs, 0 failures

Game -
should start with zero points
should be able to increase the score when ball is rolled
should change frame after two rolls
should be able to tell how many pins were hit on each ball
frame changes after a strike
doubles score on next throw after a strike
doubles score if multiple stikes in a row
can double score on next roll if spare
can double score if spare is hit twice
can only roll one additional ball if strike on last frame
can only roll one additional ball if spare on last frame
```
