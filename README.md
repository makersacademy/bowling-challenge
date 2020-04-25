
Bowling Challenge
=================

## Current Status

- [X] Player bowl ball
- [X] When a player has bowled twice or has a strike, a new frame is generated
- [X] The Game can return a score
- [X] A strike applies a bonus score
- [X] A strike applies a bonus score
- [X] A Strike Bonus is removed once to bonus has been added
- [X] A game is complete after 10 frames
- [X] Interactive animated display
- [X] Game shows when complete
- [x] ESLint setup
- [X] Spares and Strikes displayed Visually
- [X] Player can only knock over available pins
- [X] Game can be restarted

![bowling](process/images/bowling.gif)
# Features I would like to add

- [ ] The 10th Frame allows for bonus rolls
- [ ] A gutter game is declared
- [ ] a perfect score is declared
- [ ] Travis set up
- [ ] Player can choose names
- [ ] Player can record high scores
- [ ] Multiple Players can be added
- [ ] Scores stored in database 
- [ ] Leaderboard shows history of high scores

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

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
