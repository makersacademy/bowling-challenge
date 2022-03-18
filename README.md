
Bowling Challenge
=================
JavaScript | Jest

My bowling scorecard program in JavaScript calculates the scores of a bowling game. For this challenge, I was instructed to focus primarily on the logic for bowling, following the scoring rules detailed below.

#### With more time, I would have...
- added in guard clauses or something similar to stop the user entering invalid rolls e.g. '0' when they should enter '0,0' or entering something that isn't a number

## Instructions and Functionality
1. The user interacts with the Scorecard class only. This class calls on the methods of Frame class.
   - user can input each frame's rolls with the .inputFrame(rolls) method, passing an array of 2 elements (or possibly 3 in the final frame, if a strike or spare is rolled). This method constructs an instance of Frame class and adds each new Frame([roll1, roll2]) to the .rolls property of the scorecard instance.
   - once all frames have been input, user can calculate game's total score using the .score() method
   - a strike would be entered as inputFrame([10]). Final frame 3 strikes as inputFrame([10,10,10])
2. Each instance of Frame class represents an individual frame. 
3. Frame class has only one public method: .score(), which calculates the score of an individual frame. This method relies on private methods within Frame to calculate bonus points etc, including:
   - isStrike or isSpare checks if a frame is a strike or a spare
   - bonus calculcates bonus points
   - isFinalFrame to check if the frame is the 10th frame
4. cli.js file is the user interface. It asks the user to enter the number of pins they rolled for each frame

## Bowling scoring rules
A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes
A strike roll would be input as so: 
``` scorecard.input_frame([10]); ```
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

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

