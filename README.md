## Bowling Scorecard

A commadline program in Javascript that calculates the score of a [10-pin bowling game](https://en.wikipedia.org/wiki/Ten-pin_bowling) for one user based on their score input per roll.

## Rules

- The game has ten frames and each frame has two rolls. If 10 pins are knocked in the first roll, the frame is a strike. If 10 pins are knocked in the total of both rolls, the frame is a spare.

- If a strike is rolled, the next two rolls are added as bonus points. If the next frame is also a strike, the first roll of the next-next frame counts towards the bonus.

- If a spare is rolled, the first roll of the next frame is added as a bonus point.

- If a strike or spare is rolled in the tenth frame, extra rolls are granted and count only towards the bonus of the tenth frame.

## Solution

The solution is based on two classes, `ScoringTable` and `Frame`.

`ScoringTable.addFrame(currentFrame)` calculates the bonus awarded by the `currentFrame` and adds it retroactively to the previous frames.

If both `prevFrame` and `twoPrevFrame` are `isStrike()`, the first roll of the current frame gets added as a bonus to the `twoPrevFrame`.

The last bonus rolls awarded if the 10th frame is a strike or spare, gets added as an 11th frame, and such it's bonuses are added to the 10th and possibly 9th rolls. When calculating the total score, the 11th frame is ommitted as these rolls count only as bonus points.

## Use

Clone this repo and run:

`npm install`

Then, to use the program:

`node run.js`

To test the program:

`jest`

# Tests

Tests cover only logic. `frame.js` and `scoringTable.js`. User input and formatting has not been covered in the tests.

A perfect game of 12 strikes scoring 300 and a mixed game of strikes, spares and other frames scoring 133 are tested.
