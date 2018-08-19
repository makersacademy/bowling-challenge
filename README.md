
:bowling: Bowling Scoreboard Challenge :bowling:
=================

## Makers Weekend Challenge, Weeks 5 & 6

### Using: Javascript, JQuery, Jasmine, DOM

![The Big Lebowski](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1526749202/theDude4_orkwwr.png)

 It seems that this year's all about tenpin bowling. [Here's a fun little "The Big Lebowski"-themed quote generator](https://daniellebooysen.com/random-quote-machine) I made a few months ago as part of the freeCodeCamp frontend development course.

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

## My User Stories:

:white_check_mark: I want 10 frames per game   
:white_check_mark: I want to roll twice per frame   
:white_check_mark: I want each roll to be added to my frame’s total   
:white_check_mark: I cannot roll more than the sum of 10 in one frame     
:white_check_mark: I want to be able to roll in the gutter (0 points)    
:white_check_mark: I want to be able to roll a strike (1 roll === 10)   
:white_check_mark: If I roll a strike, I want 2 more rolls as a bonus    
:white_check_mark: I want to be able to roll a spare (1 frame (2 rolls) === 10)   
:white_check_mark: If I roll a spare, I want an extra roll (first roll in next frame = doubled as a bonus)  
:white_check_mark: At the end of 10 frames, I want my total to be added up into a final score   
:white_check_mark: If I roll a strike in frame 10, I want 2 more rolls   
:white_check_mark: If I roll a spare in frame 10, I want one more roll   
:white_check_mark: I want to be able to have a perfect game with strikes only (300 points)     
:white_check_mark: I want to be able to have a gutter game (0 points) 

## Jasmine tests results:

![Jasmine tests page 1](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1534715650/Screen_Shot_2018-08-19_at_22.49.03_itqyzc.png)

![Jasmine tests page 2](http://res.cloudinary.com/dani-devs-and-designs/image/upload/v1534715650/Screen_Shot_2018-08-19_at_22.49.47_sxxhtv.png)

### Optional Extras

In any order:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform. (I'm using [Prettier](https://prettier.io/) with VSCode)

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

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.
