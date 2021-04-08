
Bowling Challenge
=================

BOWLING SCORECARD PROGRAM


Count and sum the scores of a bowling game for one player.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.
In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

---
## Bowling rules

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

---

### modelling

|     class      |   constructor                      |   function                                     |
|----------------|------------------------------------|------------------------------------------------|
|  BowlingGame   |  this.current_frame = 1            | roll_1(players_score)                          |
|                |  this.strike = false               | roll_2(players_score)                          |
|                |  this.spare = false                | roll_3(players_score)                          |
|                |  this.scorecard = Scorecard.new    | roll_2(players_score)                          |
|                |                                    | next_frame                                     |
|                |                                    | update_roll_1_score(players_score)             |
|                |                                    | update_roll_2_score(players_score)             |
|                |                                    | update_roll_3_score(players_score)             |
|                |                                    | update_bonus(players_score)                    |
|                |                                    | update_scorecard                               |
|                |                                    | view_scorecard                                 |
|                |                                    | end_of_game                                    |
|  Scorecard     |   this.scorecard = []              | update_bonus(players_score)                    |
|                |   this.roll_1_score = 0            | update_scorecard(current_frame, strike, spare) |
|                |   this.roll_2_score = 0            | running_total(current_frame)                   |
|                |   this.roll_3_score = nil          |                                                |
|                |   this.bonus_score = 0             |                                                |
|                |   this.total_game_score = 0        |                                                |


----
### To-do:
[ ]
[ ]
[ ]
[ ]
[ ]



### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.
