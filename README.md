![Travis CI](https://travis-ci.org/kittysquee/bowling-challenge.svg?branch=master)

# Bowling Challenge

## User Stories

```
As a player,
So I can play a game of bowling,
I would like to knock down some pins.

As a player,
So I can adhere to the normal convention in bowling,
I would like to bowl twice per frame.

As a player,
So I can adhere to the normal convention in bowling,
I would like there to be 10 frames per game.

As a player,
So I can score a spare,
I would like to knock down 10 pins over two bowls.

As a player,
So I follow the rules,
If I get a strike I don't get a second bowl in my frame.

As a player,
So I can see if I get a gutterball,
I would like to get 0 points.

As a player,
So I can get extra points,
If I get a strike or spare in the 10th frame I get 3 bowls.

As a player,
So I can score more points,
If I get a spare the first bowl score from the next frame is added to my spare score.

As a player,
So I can score more points,
If I get a strike the next two bowls scores are added to my strike score.

As a player,
So I can get a gutter game,
I would like to score 0 points for the entire game (20 0 scores).

As a player,
So I can score a perfect game,
I would like to get all strikes (score 300/12 strikes) for the entire game.

BONUS:

As a player,
So I can have an amazing visual experience,
I would like to have a stunning animated interface.
```

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
