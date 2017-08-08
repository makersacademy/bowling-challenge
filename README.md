
Bowling Challenge
=================

Makers Academy week 5 weekend challenge.

![Bowling Scorecard App Image](images/bowling.png)

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Technologies
- HTML, CSS and Bootstrap for display
- JavaScript for BowlingScorecard and Frame functions and JQuery for interface controller.
- Deployed as a ruby and sinatra on heroku.
- Jasmine for test framework

The Frame function keeps track of the scores in a frame as well as whether it is a strike or spare.

The BowlingScorecard function tracks the current state of play. The rules for adding bonuses in bowling are a little complex so the `addScore` function has checks to see whether it is the frame's first or second roll, and whether to add bonus scores for strikes and spares. I tried taking as much out of this method as I could, such as functions to check for bonus scores.

The `interface.js` is uses JQuery to interact with the BowlingScorecard instance for the current game, as well as updating the display by updating the html in the display.

## Instructions

Use the app online at [bowling-scorecard-app.herokuapp.com](https://bowling-scorecard-app.herokuapp.com/).

To use locally:
```
git clone git@github.com:ryandav/bowling-challenge.git
cd bowling-challenge
rackup
```

To run the tests `open SpecRunner.html`. The using tests are in the `spec` folder and feature tests in the `spec/features` folder.

## Bowling — how does it work?

Click on the number of pins knocked down for each bowl. Instructions are below as well as accessed by clicking on the `Bowling - Rules` button in the app.

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

[code review rubric](docs/review.md)
