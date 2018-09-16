Bowling ScoreCard
=================

Introduction
------------

This program keeps track of a players score when bowling
Users Enter their scores as they play a game and the program will calculate the total.

Scoring
-------

* Games consist of 10 rounds
* Players can knock down up to 10 pins in a round
* When a Player hits all ten pins in two bowls it is a Spare
  * When a Spare is scored the next bowl is added to that round score.
* When a player hits all ten pins in the first bowl it is a Strike
  * When a Strike is scored the next 2 bowls are added to that round score.
* A Spare or Strike scored in the last round allows the player another 1 or two bowls respectively
  * Round 10 can have a maximum of three bowls
* Each Round can have a maximum of 30 points
* The maximum possible score (perfect game) is 300

Code
====

Written in JavaScript

Classes
  * Round
    * tracks pins nocked down for up to 2 bowls
    * knows if it's a spare/strike
  * Card
    * contains ten rounds
    * totals score between rounds
    * adds proceeding bowls scores for spares/strikes
    * tracks bonuses to be applied

Each time a player bowls the number of pins knocked down is stored in an array unique to that frame. If the number of pins is too high then the bowl will not be stored. A check is then performed to confirm if a spare or strike has occurred. 

```
Frame.prototype.bowl = function(pins) {
  if (!this.isEnd() && this._isValidBowl(pins)) {
    this.storeScore(pins)
    this.isEnd()
    this._spareOrStrike();
  };
};
```

The scorecard logic was fairly simple, if you suck at bowling. The card checks if the game is over before storing a frames bowls in its own frames array. Now that the current frame is stored, bonuses for the previous frame can be applied, after which the bonuses for the current frame can be tracked.

```
Card.prototype.store = function(frame) {
  if (!this._isEnd()) {
    this.frames.push(frame.bowls)
    // apply bonuses for the last frame before storing bonus for current frame
    this._applyBonuses()
    this._trackBonus(frame)
  } else {
    this._endGame()
  }
};
```

Strikes and Spares
------------------

The scorecard initialises with a bonus tracking array

```
function Card() {
  this.frames = []
  this.bonuses = [0, 0]
};
```

The two elements of this array track the two previous frames, first element for the oldest frame and second for the most recent. The array is modified to ```[0, 2]``` when a strike occurs, and ```[0, 1]``` when a spare occurs. This represents the number of bonus rolls to apply, when the bonuses are applied, the numbers are reset to zero.

### Double Strike ###

When the prvious frame bonus (for a strike) is being applied and the current frame has only one roll in its frame, the first roll from the next frame is added. This requires bonus tracking over three frames. When the bonus for the first strke is tracked the bonus tracker looks like ```[0, 2]```, after the second strike is scored and bonuses havve been applied the tracker looks like ```[1, 2]``` the first element signifies there is 1 roll to add two frames back, the second signifies there are 2 rolls to add one frame back (as explained in the paragraph above). When the next frame is stored the first roll will be added two frames back and both rolls (assuming it's not another strike) will be added one frame back. This works for any number of strikes scored in a row as bonuses will only ever be applied as far back as two frames before the current one.

