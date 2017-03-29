##User Stories
```

As a game
So that I follow the rules
I want to have ten frames

As a game
So that I can continue
I want to start a new frame

As a game
So that I can be fair
I want to end the frame if the player gets a strike unless I am at frame ten

As a game
So that I can be fair
I want to end a frame after the second turn unless the player got a strike or I am at frame ten

As a game
So that the game doesn't go on forever
I want to end a game after ten frames

As a frame
So that I can follow the rules
I want to start with ten pins

As a frame
So that I can help keep track of the score
I want to store the number of pins knocked over by a ball

As a game
So that the player can play
I want to be able to bowl a ball

As a game
So that I can award bonus points after a strike in the previous frame in frames 1 to 9
I want to add the score of the next two balls to the score of the previous frame

As a game
So that I can award bonus points after a spare in the previous frame in frames 1 to 9
I want to add the score of the next ball to the score of the previous frame

As a game
So that I can award a bonus throw after a strike on the first ball of the tenth frame
I want to let the player bowl again

As a game
So that I can award a bonus throw after a strike on the first and second balls of the tenth frame
I want to let the player bowl again

As a game
So that I can award a bonus throw after a spare on the two balls of the tenth frame
I want to let the player bowl again

As a game
So the player can be proud
I want to report the score

As a game
If the player scored 0
I want to report a gutter game

As a game
If the player scored 300 points
I want to report a perfect game


As a printer
So that the player can see the current score
I want to report the current score of the game

As a printer
So that the player can see how the frame went
I want to report the score of the frame in a format the player will recognise
```

Bowling Challenge
=================


* Challenge time: rest of the day and weekend, and the entire of Makersbnb week if you need it, until Monday 9am
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
