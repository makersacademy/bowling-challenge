
Bowling Challenge
=================

This is a programme that simulates a bowling scorecard that takes the user's input as rolls from a game and calculates the total score from those rolls. Initially, the score of each frame is calculated and then used to calculate the total score of the game. The user interface was written using readLine and takes each roll at a time from the user and updates the scorecard, one frame at a time.

### Getting Started

To begin, clone this repository:
```
git clone https://github.com/jmcnally17/bowling-challenge-javascript.git
```
Next, carry out the necessary commands to setup jest in order to setup the test environment:
```
npm init -y
npm add jest
npm install -g jest
```

### How To Use

To use this program, simply run the interface file in the [lib](https://github.com/jmcnally17/bowling-challenge-javascript/tree/main/lib) folder:
```
node scorecardInterface.js
```
then begin entering the rolls for each frame. This will give you an array of all frames together as well as a total score for the game that is submitted.

### Tests

In order to run the tests for each class, in the [main](https://github.com/jmcnally17/bowling-challenge-javascript) directory, simply run:
```
jest
```
These tests in the [test](https://github.com/jmcnally17/bowling-challenge-javascript/tree/main/test) folder were written using the TDD process and cover each function present in the classes including their edge cases.

*Note: the user interface was not test driven and was tested purely through trial and error.*

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
