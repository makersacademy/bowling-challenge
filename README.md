
Bowling Challenge
=================

![Screenshot](https://path_to_your_image)

## The Task

To make a bowling scoreboard in javascript.

## My Approach

- I started off making sure the model of the game worked. I initially started simple with one game object, then went far too deep down the OOP rabbit hole, so retraced back to an old commit and finalised from there.
- bowling.js has 4 main functions ``` enterBallScore(score) ``` 
```calculateTotalScore() ```
```newGame()```
```isGameOver()```
- Tests are using Jasmine
- Having completed the task, I decided to have a go at a UI, for which I used HTML, CSS & Jquery.  Seems to all be working fine.

### Installation

- In your terminal
```
git clone git@github.com:Timdavidcole/bowling-challenge.git
cd bowling-challenge
//TO LAUNCH//
open index.html
//OR HOST IT LOCALLY//
rackup
open http://localhost:9292/
```
- I've tried to host it on herokuapp but unfortunately it doesn't seem to be loading the css/jQuery.
```
https://bowlingscorecardtim.herokuapp.com/
```
- If you're feeling extra curious you can load my Jasmine tests.
```
open SpecRunner.html
```

## How to use the site

- It's extremely simple 

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
