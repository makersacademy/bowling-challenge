
Bowling Scorecard
=================

## The Task 

Counts and sums up the scores of a bowling game for one player (in JavaScript). The user is the one inputing the rolls.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## My approach

The game works as intended - I would like to refactor the calculateScores method in Game as it's quite challenging to read (even though I've tried to use suggestive variable names to make it easier to go throgh). The refactoring would involve some of the code moving to the Frame class which would in turn mean that Frame would have to be made aware of the full array that Game is receiving (not ideal). One option would be to use one class (the code was initially split into two classes to meet the single responsibility principle).

I've aimed for good test coverage which helped quite a bit when I kept on adjusting the code towards the end to properly manage the 10th frame and its bonuses.

ESLint is also installed - there are a few warnings left around the lenght of some of the lines. 
I've tried running Travis as well but faced some challenges configuring it so will need to come back to that. 

## Running the app and tests

App: 
1. clone the repo : git@github.com:AlinaGoaga/bowling-challenge.git and cd into the project
2. play around with it in the console

Tests: 
1. run open SpecRunner.html in the terminal
2. a window will open containing the below

![Tests Jasmine](https://github.com/AlinaGoaga/bowling-challenge/blob/master/tests_passing.jpeg)

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
