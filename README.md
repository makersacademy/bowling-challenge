Bowling Challenge in JavaScript
=================

For this challenge I followed a TDD approach to write a program that calculates the total score for a game of bowling, of a single player from a total of all rolls in each frame.

Although my program correctly calculates the score from a total game, I would like to ammend my code to include a frame class that can calculate the score per frame, as and when the frame is played. This would allow the user to see their score at any point during the game.

Instructions
------------

- Clone this repo to your machine and run `node`
- Within node, type `const BowlingGame = require('./bowling_game.js')`
- Create a new instance of BowlingGame with `game = new BowlingGame`
- Log each roll score with `game.roll(4)` (the number representing the amount of pins knocked over)
- Run `game.score()` to get the final score for the game.

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
