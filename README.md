
Bowling Game
=================
Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling



Interface
-----------

![snap1](./app/public/images/interface1.png)
![snap2](./app/public/images/interface2.png)


Approach
-----------
1. Task seemed quite confusing at first, however, following excellent tutorial: http://www.butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata in Java, translated the Game into JavaScript
2. Nonetheless, I wanted to do something more, especially to seperate the concerns into more classes as it seemed Game had too many responsibilities
3. Created Frame class and working on incorporating this class to the Game - this step is still unfinished
4. Created the UI, working to incorporate jQuery to the greater extend, some basic options work (accordion on the Rules page, for example, see above)
5. However, there is still a lot work to do to finish off the Game, I feel like I have touched upon many different contexts, so that should be not a problem to work in future to complete the task successfully

