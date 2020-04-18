# Bowling Challenge

Create a bowling scorecard to count and sum the scores of a bowling game for one player (in JavaScript).

## Bowling Rules

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike (in which case it will be the strike and the bonus is refreshed because of that strike).

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

- 10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
- 1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## Development Journal

### Development approach

I approached this project using Test Driven Development strategies:

- Only write the most basic test you need to fail.
- Only write production code to pass a failing test.
- Only write the most basic production code to pass the test.

I approached this project with object oriented programming in mind:

- Objects should encapsulate methods that are related to one another in purpose.
- Methods should have a single responsibility, so they do not do too much, and are concise.

### Domain Modelling

I created a calculator in google sheets. It handles all aspects of the rules including the more complex logic of the 10th frame. It also calculates the perfect game properly.

![Scorecard table logic model](images/scorecard_table_model.png)

This serves as a good guide for me to understand the logic I need to implement, and with JavaScript it is possible to hide away all the logic and simply show the frames, the rolls, and the running total.

### Project Setup

Installed Jasmine as my testing framework.

### Inputting some rolls

Created a spec file ScorecardSpec.js

Wrote a test that after calling record with 1 on scorecard, the scorecard's frame1 roll1 should be 1. Red.

- Created a file Scorecard.js, and sourced in SpecRunner.html.
- Created a scorecard constructor with a property frame1 object literal with a property roll1 assigned with 1.
- Added a record method.

Green.

Wrote a test that after calling record with 2 on scorecard, the scorecard's frame1 roll1 should be 2. Red.

- Adjusted record method to assign frame1.roll1 with the passed score.

Green.

- Refactored for record to create roll1 in an empty frame1 object literal.

Wrote a test that after calling record 1 twice, frame1 roll2 and roll1 should be 1. Red.

- Added a property to the scorecard, currentRoll set to 1.
- Added an if statement to record to assign roll1 with score passed if currentRoll is 1, then set currentRoll to 2.
- Added an else to assign roll2 with score passed.

Green.

Wrote a test that after calling record 1 twice, frame1 runningTotal should be 2. Red.

- added a runningTotal method to the frame1 object literal that returns 2.

Green.

Wrote a test that after calling record 2 twice, frame1 runningTotal should be 4. Red.

- rewrote runningTotal to return the sum of roll2 and roll2.

Green.

Refactored to use ES6 class syntax, as I find it easier to read.

Wrote test that after calling record 1 three times, frame2 roll1 should be 1. Red.

- Added a currentFrame property to the scorecard, set to frame1.
- Added a new object literal for frame2, empty for now.
- Added to the record else statement to reset the currentRoll to 1 and set the currentFrame to frame2.

Green.

Wrote test that after calling record 1 four times, frame2 runningTotal is 4. Red.

- Hard coded frame2,runningTotal() to return 4.

Green.

Wrote a test that after calling record 2 four times, frame2 runningTotal is 8. Red.

At this point i need to be able to return the sum of frame2's rolls and the runningTotal of frame1. In its current form, the program has no way to reference the previous frame's total, so a different solution is needed.

- Created Frame object constructor, and the scorecard frames is now an array of new Frames.
- Reworked the runningTotal method not to belong to the frame, but to belong to scorecard. It takes an argument of which frame to calculate for, then loops up through the frames until that frame, collecting their individual totals (roll1 + roll2).

Green.

- Refactored frame into its own file, Frame.js.
- Sourced that in SpecRunner.html.

_Frames will now be referred to by their index in the frames array._

Now for spares. Wrote a test that recording 5 three times should result with runningTotal(0) returning 15 (5 + 5 + 5 on the first roll of the next frame as bonus). Red.

In order to help pass this test the frame should know if its score is a spare.

Created FrameSpec.js and wrote a test for frame.isSpare to return true if the rolls are five and five. Red.

- Wrote the isSpare method returning true hardcoded.

Green.

Wrote a test for isSpare to return false if the rolls are 1 and 1. Red.

- Updated isSpare to return a boolean based on if the total is equal to 10.

Green.

Now back to the runningTotal for spares. The running total needs to account for the first roll in the next frame and include that in the total of the frame as a bonus.

The scoreboard needs to be able to calculate that for the frame and give it as a property.

- Added to record method a variable for the frame, and previousFrame if it exists (i.e. frames[this.currentFrame - 1]), otherwise set to false.
- In the if statement for the currentRoll is 1, if the previousFrame is not false and if previousFrame was a spare then assign the roll1 score as the previousFrame spareBonus.
- Finally, add spareBonus as part of Frame.total (which is defaulted to 0 in the Frame's constructor)

Green.

- Refactored with a variable for frame similar to previousFrame to make the record method more readable.

Now on to strikes. 