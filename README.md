# Bowling Challenge

This challenge was to create a scorecard to count and sum the scores of a bowling game, for one player, in JavaScript.

You can try out the scorecard [here](https://htmlpreview.github.io/?https://github.com/alittlecross/bowling-challenge/blob/master/src/index.html).

It should look like this:

![Bowling Scorecard](images/bowlingScorecard-1.png)

Clicking `Add another player` will append an additional line to the scorecard.

![Bowling Scorecard](images/bowlingScorecard-2.png)

The player enters their name where is says to.

Clicking `Start game` will highlight whose turn it is to throw.

![Bowling Scorecard](images/bowlingScorecard-3.png)

They then click the numbered buttons to record the number of pins knocked down.

### Testing

All code has been tested with Jasmine. To test on your own machine:

```git clone git@github.com:alittlecross/bowling-challenge.git```

Then run `SpecRunner.html` from that folder.

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

## Still To Do

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.
