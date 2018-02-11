
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

I attempted to complete this challenge in a test driven environment.

Given more time I would have worked to clean up the code. I would have separated game logic from the framelog and given further consideration to the single responsibility principle.

I would spend more time refactoring the code to reduce the need for complex conditionals within the code. I would also review unit tests, whilst some elements have comprehensive testing, score calculation outcomes relies heavily on feature testing presently. 

I would also take more time to ensure the code meets conventions.

## Getting started
* clone https://github.com/Leigan0/bowling-challenge.git
* cd bowling-challenge
* open index.html

## Tests
* Unit and Feature test focus within the project
* To run tests open SpecRunner.html

## Usage
* To add rolls to to the scorecard simply click the bowling ball which represents the number of pins for each roll
* The scorecard will create the frames as required and stop when correct number of rolls entered
* The scorecard will not allow you to add extra rolls to each frame or add rolls which will amount to more than MAX_SCORE for each frame

## What does it look like?

![alt text](https://i.imgur.com/BSnNiYG.jpg)
![alt text](https://i.imgur.com/YzpQsRY.jpg)

## Technologies used
* JavaScript
* Jasmine
* html
* CSS
* Jquery

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
