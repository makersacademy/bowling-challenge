
Weekend Challenge 6 - Bowling Challenge
=================

This program enables the user to input how many bowling pins they have knocked down. It lets the user know when the game is finished, and if so, they can get the total score of their game.

Functionality:
-----
* User can input a roll, with the number of pins they have knocked down.
* A new Frame is added to the Game when a roll is made.
* If the number of pins knocked down is not a strike, then the next roll will be part of the last Frame.
* If the user rolls a strike, the current Frame will be marked as a Strike and the next roll will create a new Frame.
* If two rolls in the same Frame add up to 10, then the Frame will be marked as a Spare (for calculating the score at the end).
* The tenth frame has special rules. On this frame, if the user inputs a strike on the first or second rolls, they will get another roll, which will add a Bonus Frame to the game.
* The game will finish either after the bonus frame roll or the last roll of the tenth frame has been played.
* User can only check the score after the game has finished. The program calculates the scores based on whether or not the frame is marked as being a Strike or a Spare.

How to Install:
-----
* Clone this repo https://github.com/louisaspicer/bowling-challenge.git
* `cd bowling-challenge`
* Run `open SpecRunner.html` in the terminal to run the tests
* Open the console in your browser where SpecRunner is open.

How to Use:
-----
In the console, to create a new game:
```JS
var game = new BowlingGame();
```

Then to roll:
```JS
game.roll(<add number of knocked pins>);
```

Then once game is finished, to check the score:
```JS
game.checkFinalScore()
```

Improvements to be made:
-----
* Refactor messy code - split into shorter private methods.
* Use the module pattern.
* Implement more tests for edge cases.
* Add 'Game has ended' alert for Gutter Game (No pins knocked down after 10 frames).
* Add an interactive interface using jQuery.
* Make this into a single page web app.

Original Spec:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extra

Create a nice interactive animated interface with jQuery.

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

## Authors
[Louisa Spicer](https://github.com/louisaspicer)
