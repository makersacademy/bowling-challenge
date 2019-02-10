
Bowling Challenge
=================

## Setup

1. Clone or Fork the repo (eg: `git clone https://github.com/nkhil/bowling-challenge.git`)
2. CD into the directory (eg: `cd bowling-challenge`)
3. Install dependencies via `npm install` (you will need node for this).
4. Use any modern browser to open the `index.html` file from the `./public` folder

## Testing

This project uses Jasmine (installed via npm) for testing. To run the test suite, please run `npm test`.

## Approach

⚠️**Please Note**:⚠️ This project is only partially complete (as of February 10, 2019). This is a very rudimentary version of the brief. I have started refactoring into multiple classes locally (`scoreCard, frame, firstRoll, secondRoll`) howevever this is not part of the repo. 

I've tried to follow a strict TDD process throughout writing this, although I felt the '_writing only enough code to make the tests pass_' approach led me to painting myself into a corner where re-starting was more practical than re-factoring. I'm unsure about where domain modeling should trump over the `red-green-refactor` approach. 


### Application data flow

1. The scores are input by the user using `<select>` dropdowns and clicking on 'submit'. Currently, it will throw an alert if a player selects a second roll after a strike, however, there are many edge cases that will currently be accepted without an error (for eg: changing a previous round, adding a score that adds up to more than 10 etc). 
2. This data is intercepted by the `interface.js` file, via `eventListeners` placed on all forms that are listening for the submit. **Note** that this has been written in vanilla JS (and not JQuery as suggested in the walkthroughs). 
3. `interface.js` initialises an instance of the business logic (`ScoreCard`) and passes in the score via the `scoreCard.recordScore()` function (which stores it in `scoreCard.scoreArray`).
4. The score is then rendered out (or not) to the UI using the results of the `scoreCard.experiment()` function (yes, its named extremely poorly). If it's a strike, or a spare, it will wait till the next roll has been entered before rendering out the score. 


## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


## Bowling - the rules

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
