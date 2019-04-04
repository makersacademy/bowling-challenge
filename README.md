Bowling Score
=============

## Description

This JavaScript app simulates a bowling scorecard, allowing a user to enter their scores per roll, and calculating the running total.


#### Technologies used

- JavaScript
- jQuery
- Jasmine


#### Personal motivation

- 


------

## Steps to download



## To run tests



## My approach




#### Structure




#### Problem breakdown

[Problem breakdown and models](https://github.com/mattTea/bowling-challenge/blob/master/problem/problem_breakdown.md)

(Link to problem breakdown, with requirements, user stories and models)





------

## Rules

1. A bowling game consists of 10 frames.

2. In each frame the player tries to knock down the 10 pins

3. The player can roll one or two times per frame, depending on whether the player has scored a `strike`.

4. The score of a frame is the number of knocked down pins plus bonuses for a `strike` or `spare`.

5. After every frame the 10 pins are reset.


### Strike

- The player has a `strike` if they knock down all 10 pins with the first roll in a frame.

- The frame ends immediately (since there are no pins left for a second roll).

- The bonus for that frame is the number of pins knocked down by the next two rolls (the 2 rolls of the the next frame, unless the player rolls another strike).


### Spare

- The player has a spare if they knock down all 10 pins with their two rolls in a frame.

- The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).


<!-- Update beyond here -->

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



### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.




[Link to original repo and readme](https://github.com/makersacademy/bowling-challenge)
