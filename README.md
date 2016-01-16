Bowling Challenge
=================

Author: Emma Beynon

Github: https://github.com/emmabeynon

Email: emma.beynon@gmail.com


This is my submission for the Makers Academy Week 4 Weekend Challenge: https://github.com/makersacademy/bowling-challenge


Overview
---------
We have been asked to count and sum the scores of a bowling game for one player in JavaScript.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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

Instructions
------------
1. Fork this repo and clone to your local machine.
2. Open SpecRunner.html in Chrome.
3. Launch Chrome Dev Tools and click on the Console tab.
4. Enter your bowling scores are per below:
```
> game = new Bowling();
> game.play(score1, score2); # adds your score to the frame. In case of a strike, add score as (10, 0).
> game.completeFrame(); # completes a frame and creates a new one
```
5. Repeat until you have completed 9 frames.  Enter your scores as usual for the 10th frame ```> game.play(3,4);``` however if you score a spare or strike, do not complete the frame yet.  
6. If you have scored a strike:
```
> game.bonusRoll(bonus); # plays your first bonus roll
> game.thirdRoll(bonus); # plays your second bonus rolls
> game.completeFrame();
```
7. If you have scored a spare:
```
> game.thirdRoll(bonus); # plays your bonus roll
> game.completeFrame();
```
8. To complete the game and see your final score:
```
> game.calculateTotalScore();
```

Further Work
-------------
* Create a nice interactive animated interface with jQuery.
