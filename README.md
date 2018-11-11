### Intro

This is a bowling scorecard. User inputs the value of each roll, and the scorecard keeps score. This was created for a weekend project during weeks 5 and 6 of Makers Academy.

![game screenshot](/public/images/scorecard_screenshot.jpg)

### How to Run It

Fork and clone this repo.  Open index.html in your browser. Enjoy!

### Testing

To run tests, open SpecRunner.html in your browser. Your screen should look like this:

![tests screenshot](/public/images/test_results.png)

### Technologies used and my approach to the challenge

The scorecard is created using JavaScript and JQuery. Tests are written using Jasmine.

The business log adds frames to the game and keeps score. I've written additional logic into the interface to limit number of frames and bonus rolls.

### Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

##### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

##### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

##### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

##### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

##### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
