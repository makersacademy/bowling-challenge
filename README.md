Bowling Scorecard
=================

## Description

This JavaScript app simulates a bowling scorecard, allowing a user to enter their scores per roll, and calculating the running total.


### Technologies used

- JavaScript
- jQuery
- Jasmine


### Personal motivation

- Further improve my test-driving of heavy logic-based problems
- Further learn JavaScript
- Improve my process of learning new languages


#### Outstanding TODOs

- Strike bonus for when 2 previous frames have been strikes
- 10th frame bonuses
- Check possible frame misalignment of strike bonus

------

## Steps to download

1. Fork this [repo](https://github.com/mattTea/bowling-challenge)

2. `git clone git@github.com:<userName>/bowling-challenge` onto your local machine


## To use app

```javascript
scorecard = new Scorecard;

frame1 = new Frame;

frame1.enterFirstRollScore(5, scorecard);
frame1.enterSecondRollScore(3, scorecard);

scorecard;
// => Scorecard {frames: Array(1)}
//      frames: Array(1)
//          0: Frame
//              bonusScore: 0
//              firstRollScore: 5
//              secondRollScore: 4
//              spareFlag: false
//              strikeFlag: false
```


## To run tests

After forking and cloning repo, open the path to `SpecRunner.html` in your browser.


#### Problem breakdown

Links to requirements and problem breakdown, and models

[Problem breakdown](https://github.com/mattTea/bowling-challenge/blob/master/problem/problem-breakdown.md)

Link to first roll [logic flow model](https://github.com/mattTea/bowling-challenge/blob/master/problem/BowlingScorecard%20-%20Basic%20flow%20for%20FIRST%20roll%20in%20frame.png)

Link to second roll [logic flow model](https://github.com/mattTea/bowling-challenge/blob/master/problem/BowlingScorecard%20-%20Basic%20flow%20for%20SECOND%20roll%20in%20frame.png)

[Class diagram](https://github.com/mattTea/bowling-challenge/blob/master/problem/BowlingScoreCard%20-%20Class%20diagram.png)


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


### 10th frame

- If the player rolls a strike or spare in the 10th frame they can roll additional balls for the bonus
  - If a `spare`, the player rolls one more for the bonus.
  - If a `strike`, the player rolls two more for the bonus.

  - These additional rolls only count for the bonus

`10` | `10` | `10` =>  30 points (10 points for the regular first strike and 20 points for the bonus).

`1` | `9` | `10` => 20 points (10 points for the regular spare and 10 points for the bonus).


### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

------

## Optional Extras

* Create an interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run tests.
* Add [ESLint](http://eslint.org/) to codebase and make code conform.

------

## Original README

[Link to original repo and readme](https://github.com/makersacademy/bowling-challenge)
