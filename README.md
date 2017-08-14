
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## To use the scorecard

Currently, you can run the app from the repository:  
$ git clone   git@github.com:Alexander-Blair/bowling-challenge.git  
$ cd bowling-challenge  
$ open index.html

Enter your roll! 

![main page](app/images/screenshot.png)

## Approach

The page interacts with a number of Javascript objects in order to process the game, as follows:

- Game (holds the player (or players, at some point));
- Player (has a scorecard and will have a name);
- Scorecard (holds an array of rounds);
- ScoreCardParser (parses scoreCard results into arrays);
- Round (holds the scores and verifies the entries)
- ScoreGenerator (calculates the score for each round and the whole game)

The number of pins you are able to choose is tightly controlled on the view and inside the round object.

The basic logic - if the sum of the current round is a multiple of 10 (or empty), the next roll can be up to 10, otherwise it's 10 minus the previous throw.

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
