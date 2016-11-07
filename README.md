# TEN PIN BOWLING SCORECARD

## AIM:
Count and sum the scores of a bowling game for one player (in JavaScript).  
Create a nice interactive animated interface with jQuery.  
Provide messages for `Gutter Game` and "`Perfect Game`.  


## HOW TO PLAY:
Click a button representing the value of the first roll.  
If the first roll is a strike, that frame is complete and you move on to the first roll of the next frame.  
After entering the value of the 1st roll (assuming it wasn't a strike), click a button representing the value of the second roll.  
X = strike - This button is only available on the first ball of a frame.  
/ = spare - This button is only available on the second ball of a frame and represents the value remaining to make a spare (i.e. score 10), e.g. if the 1st roll of the frame knocked down 2 pins, then the value of "/" will be 8 when you enter the number of pins knocked down by the 2nd ball of the frame.  
If you get a strike in a frame, the score of the next 2 rolls is added retrospectively to the score in that frame.  
If you get a spare in a frame, the score of the next roll is added retrospectively to the score in that frame.  
If you get a strike in the 10th frame, you are given 2 more rolls which add (retrospectively) to the score of the 10th frame.  
If you get a spare in the 10th frame, you are given 1 more roll which add (retrospectively) to the score of the 10th frame.  
A `Gutter Game` is when the player does not knock down a single pin in the whole game (20 rolls with zero scored for each roll).  
A `Perfect Game` is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). A `Perfect Game` scores 300 points.  

## REVIEW EXPECTATIONS:
All tests passing  
The code is elegant: every class has a clear responsibility, methods are short etc.  

## Outstanding:
New game functionality does not work properly.  
Some of the tests fail although the score is correct.  

## LAYOUT:

![alt tag](https://www.dropbox.com/s/7ydue0dthexq7o9/Screenshot%20from%202016-11-07%2008-15-03.png?raw=1)  
I copied the layout from sportcalculators.com
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Bowling Challenge
=================


* Challenge time: rest of the day and weekend, and the entire of lab week if you need it, until Monday 9am
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.


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

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

Code Review
-----------

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.

CI
--

We are running JSHint on our CI server - save yourself having to wait for a build to happen by linting your code on your machine first. [Here are installations for most popular editors](http://jshint.com/install/). Grab the `.jshintrc` from this repo and have better JS!

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
