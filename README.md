
Bowling Challenge
=================

## The Task

Create a bowling scorecard. Count and sum the scores of a bowling game for one player (in JavaScript).

## My Approach

1. Write out the rules of the game to ensure I understand the logic and can see a clear layout. I used this link to help: https://bowlinggenius.com/
2. Look into which would be the best diagram to use for the logic and which would be best for the interface.
3. Create user stories from step 1 and decide on the classes I will need. Possible classes: frame, totalScore.

After following those steps, I found planning for this challenge difficult as I couldn't envision how it would all work. I tried various diagrams but they confused me more as I couldn't separate the components in my head. Instead I found it easier to start this project with a simple feature test (the total score is 0 if I only roll 0 pins twenty times) and build from there.

## Bowling — how does it work?

* The games consists of 10 frames.
* In each frame, the player can roll twice to knock down all ten pins.  
* After each frame, the 10 pins are reset.
* The points for each frame are determined by how many pins are knocked down.
* If the player knocks down all ten pins in the first frame, that is called a strike and the frame ends immediately as there are no more pins to knock down in that frame.
* When a strike is rolled, an 'X' (10 points) will appear on the scorecard instead of the score number.
* The score number will not appear on that frame until the next frame has been rolled because the total score from the strike is dependant on the points won from the following frame.
* The points won from the next frame (consisting of two rolls), will be added as bonus points to the score from the strike. For example, if a player rolls a strike in one frame, then will have ten points. If the player then knocks down 2 and then 3 pins in the following frame, the score from their strike will now equal 15.
* If the player rolls a second strike, the 'X' would appear again without any numbers.
* If the player knocks down all ten pins with the two rolls of the frame, that is called a spare.
* The first roll of the next frame is added twice to the overall score as a bonus for rolling a spare.
* In the 10th frame, if the player scores a strike on the first roll, or a spare on the second roll, they can play a third roll. The number of pins knocked down with the third roll will be added as bonus points to the score.
* A player cannot roll more than 3 times during the 10th frame.  
* A Gutter Game is when the player never hits a pin (20 zero scores).
* A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## User Stories


Object | Message
-|-
User | Input score
Scorecard | Calculate total score

Object | Message
-|-
Frame | Calculate score
Roll |


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
