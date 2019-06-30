
RACHEL GRIFFITHS
=================

## CHALLENGE: BOWLING SCORECARD
------------

##### BUSINESS LOGIC
* Create a Bowling Scorecard
* User enters score between 0 and 10 for each roll
* Each pin knocked down accounts for one point
* The game consists of 10 frames and each frame consists of 2 rolls
* Bonus points are awarded for a strike or a spare
* A strike occurs if all 10 pins are knocked down in roll 1 of the frame
* A spare occurs if the total frame score is equal to 10

##### WEB INTERFACE
* Create a nice interactive animated interface with jQuery.

### GETTING STARTED
------------
* JavaScript
* gitclone: git@github.com:rachjgriff/bowling-challenge.git

### USAGE
------------

### TESTING
------------
* jasmine 3.4.0
* To run from command line:
```
cd jasmine
open SpecRunner.html
```

### WEBSITE SPECIFICATION (REQUIREMENTS)
------------
* User enters roll score
* Add roll score to frame score
* Add frame score to total score
* Allow only 2 rolls to be added to a frame score
* Allow only 10 frame scores to be added to the total score
* Count number of rolls
* Count number of frames
* If roll score 1 = 10, add it to the frame score and automatically set roll score 2 = 0
* If roll score 1 in previous frame = 10, add current frame score twice to total score (Strike Bonus)
* if roll score 1 in previous frame < 10 and previous frame score = 10, add roll score 1 of current frame twice to total score (Spare Bonus)
* If frame count = 10 and roll 1 score of frame 10 = 10, allow 2 more rolls and add these to frame 10 score
* if frame count = 10 and frame 10 score = 10, allow 1 more roll and add this to frame 10 score

### USER STORIES
------------
USER STORY 1: Roll score set to 0

As a bowler
So that I can start bowling
The roll score is set to 0 in the beginning

USER STORY 2: Add roll score

As a bowler
So that I can record the score of my roll
I can enter how many pins I have knocked down

USER STORY 3: Add roll score to frame score

As a bowler
So that I can record the score of the frame
My roll score is added to my frame score


### APPROACH
------------

### FOLLOW UP
------------
Bowling Challenge
=================


* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

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
