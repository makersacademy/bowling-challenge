Bowling Challenge
=================
[![Build Status](https://travis-ci.org/emmabeynon/bowling-challenge.svg?branch=master)](https://travis-ci.org/emmabeynon/bowling-challenge)

Author: Emma Beynon

Github: https://github.com/emmabeynon

Email: emma.beynon@gmail.com


This is my submission for the Makers Academy Week 5 Weekend Challenge: https://github.com/makersacademy/bowling-challenge


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
> game.play(score1, score2); # adds your score to the frame. In the case of a strike, add score as (10, 0).
> game.completeFrame(); # completes a frame and creates a new one
```
5. Repeat until you have completed 9 frames.  Enter your scores as usual for the 10th frame e.g. ``` game.play(3,4);``` however if you score a spare or strike, do not complete the frame yet.  
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

Approach
---------
This project was built in JavaScript and test-driven using Jasmine.  I started by creating a Bowling object constructor function which has a totalScore variable and an empty frames array.  A play function allows the player to enter their scores, which are pushed into the currentFrame array, and then stored in the frames array.  I later added an error which is thrown if the player enters scores of which the sum is greater than 10. The score of the current frame is then added to the totalScore variable.  However this approach didn't allow for bonuses, which were an important requirement when scoring strikes and spares, and it didn't allow us to calculate a score for individual frames, so I extracted a Frame object constructor function into a new file.  The Frame function now contained an array to store the scores for each roll, and I created a function to calculate the score of the frame.  I also created a function for Bowling to call the frame's score calculation function, and reset to an empty frame ready for the next roll.  A function was created to sum the scores of each frame. The Frame objects are stored in Bowling's frames array, and an error is raised if the player tries to enter scores for more than 10 frames.  

In order to deal with strikes and spares, I added a bonus variable to the Frame function.  I then created a checkBonus function for Bowling which checks if the previous frame has scored 10, in which case it is assigned a bonus from the first score of the current frame.  This was then edited to differentiate between strikes and spares, with the correct bonus assigned depending on what was scored.

I then looked at the 10th frame, which required a 3rd roll if a strike or spare was scored during it.  I decided to create a thirdRoll function in Bowling to call an addThirdRoll function in Frame to add the roll to the rolls array.  I later realised that the 3rd roll was meant to be a bonus, so I changed it to be added to the bonus variable instead.  In order to ensure that the 3rd roll was played appropriately, I created errors that are thrown if a player attempts a third roll when not in the 10th frame, or if they have not scored a strike or spare.  Additionally, I realised that when a player scores a strike in the 10th frame, the second roll is also a bonus, so I created a bonusRoll function to deal with that - it throws and error if a player attempts it when not in the 10th frame or if they have not scored a strike, an adds the score as a bonus to the frame.  In order to better deal with a number of bonuses, I changed the bonus variable to an array.

I then decided that the responsibility for assigning bonuses should lie with the Frame rather than the game, as the Frame is where the bonus is held.  I created an addBonus function which adds the bonuses to the bonus array.  

An important edge case that arose was when a player scores two consecutive strikes.  In this case, the frame should be assigned a bonus from the strike scored in the next frame, and a bonus from the first roll of the frame after that.  I created a function to check for this each time the scores are entered, and assign the appropriate bonuses.  

Finally, in order to refactor the Bowling function I added strike and spare variables to the Frame function which are set to true when they are scored.  This helped clean up some of the logic in Bowling and delegated responsibility for declaring a strike or spare to Frame.

Further Work
-------------
* Create a nice interactive animated interface with jQuery.
