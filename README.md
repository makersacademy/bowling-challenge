[![Build Status](https://travis-ci.org/kevinpmcc/bowling-challenge.svg?branch=master)](https://travis-ci.org/kevinpmcc/bowling-challenge)


Bowling Challenge
=================

In this challenge we had to count and sum the scores of a bowling game for one player (in JavaScript).

Functionality
------------
Bowlers can roll all gutterballs and get a score of 0.
Bowlers can roll all 1s and get a score of 20.
Bowlers can roll a mix of strikes and spares and get correct score.
Bowlers can roll a perfect game (11 strikes) and get a score of 300.

The game will not accept non-integers or negative numbers or numbers above 10.

Installation Instruction
-----
Set up your directory  
On Mac   
Cmd+Space "Terminal"  
On Windows  
Search for and open Command Prompt  

make a directory  
``    mkdir bowling-challenge``  
clone the project  
``    gitclone https://github.com/kevinpmcc/bowling-challenge.git``  

open the tests  
``    open SpecRunner.html``  
open console in your browser  
http://webmasters.stackexchange.com/questions/8525/how-to-open-the-javascript-console-in-different-browsers  

in the console create a new game  
``    game = new Game();``  

to roll a ball put rollBall(numberofpins)  
``    game.rollBall(7);``  
to get the score  
``    game.score();``  

to roll a perfect game  
``    for (var i = 0; i < 12; i++){  
    game.rollBall(10);  
    }``  
 
Technologies Used  
---------  
JavaScript for business logic  
Jasmine for testing  




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
