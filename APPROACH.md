*Ed's Tip* _for the Bowling Challenge._

1. Start by writing a (failing) feature test for the simplest version of the scorecard.

> If you score 0 on a roll, twenty times (2 rolls for a frame), assert that the scorecard is a) complete, b) the total is 0.

2. Write (failing) unit tests for the units of code you need to write.

3. Write code to pass the unit tests one at time, until the feature passes.

4. Choose next smallest extension. Repeat steps above.

## States to record

the ball number,
last ball was a spare,
the last ball was a strike,
or two balls ago there was a strike.

*do you always assume 20 balls or do you skip balls for strikes*

## Class Diagram

- Game
  - Ball Number
  -
- Frame
- Player

or?

- Game
  - starts game
  - ends game
  - calculates finalScore
- Frame
  - *frame number* ? or ^?
  - calculates frameScore
  -
- Ball ?
  - *ball number* ? or ^?

## USER STORIES

- As a player
- so that I can recored a complete game
- I want to be able to record 20 results and calculate the total
