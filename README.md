
Bowling Challenge.
=================
Count and sum the scores of a bowling game for one player (in JavaScript).


#Player(@frames=[], @pins=[], @score=int)

INPUT                   |   OUTPUT(score=)
# 1st frame = 2x throws(0)
no pins hit each throw  | 0     > gutter game
# Test: player can throw twice per frame
1 pin hit each throw    | 2
2 pins hit each frame   | 4
1 then 2 pins hit       | 3

# 2nd frames = 4 throws in total
# Test: player can throw twice per frame



# If in two throws he knocks them all down > “spare” and the score for that frame is ten plus the number of pins knocked down on his next throw (in his next turn).

## The Task
**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

A bowling game consists of :
- 10 frames in which the player tries to knock down the 10 pins. 
- In each frame the player can roll one or two times. 
- The actual number depends on strikes and spares. 
- The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. 
- After every frame the 10 pins are reset.

![](https://miro.medium.com/max/970/1*AwRfqPQFozt7q1jUR6PzNg.png)

## Bowling — how does it work?

### Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

### Spares
Spare if the knocks down all 10 pins with two rolls in a frame. 
The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. 
The frame ends immediately (since there are no pins left for a second roll). 
The bonus for that frame is the number of pins knocked down by the next two rolls. 
That would be the next frame, unless the player rolls another strike.


### 10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.