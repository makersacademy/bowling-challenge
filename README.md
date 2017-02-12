
Bowling Challenge
=================
N.B. I would not have been able to complete this challenge on my own without consulting the same repo of another Makers Academy student, https://github.com/louisaspicer.

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

User Stories:
```
As a bowler
So that I know my score
I want the score of the frame to be recorded

As a bowler
So that I can keep track of my score
I want the total score for each frame to be recorded

As a bowler
So that I can play a complete game
I want a game to have 10 frames

As a bowler
So that I know my final score
I want to be able to record the total of all 10 frames

(Strikes)
As a bowler
So that its possible for me to have a perfect game
I want to be able to bowl a strike

As a bowler
After I bowl a strike
I want to calculate the score, including the strike

(Spares)
As a bowler
After I bowl a spare
I want to include that spare frame in next frame
```

Domain Model

![](http://i.imgur.com/cBad6nq.png)

To Play:
enter `var game = new Game();` in the console

![](http://i.imgur.com/Xq5kGbf.png)

To begin bowling:
enter `game.bowl(<your score here>)`

![](http://i.imgur.com/NbQMoEb.png)

Until the game is over:

![](http://i.imgur.com/tGOlXKx.png)

To receive the total score:
enter `game.checkFinalScore()`

![](http://i.imgur.com/AMgZZZQ.png)


### Optional Extra

Create a nice interactive animated interface with jQuery.

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
