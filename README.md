
Bowling Scorecard
=================

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. THERE ARE NO RANDOMLY GENERATED ROLLS. THE USER INPUTS THE ROLLS.**

<img src="/images/Screen Shot 2018-07-19 at 09.06.12.png" />


# The Challenge Set:

* Count and sum the scores of a bowling game for one player (in JavaScript).


## Bowling — The Rules?

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

## How to Install and Use the Code (and inadvertedly run the tests)

1. To install, first clone this repository.
2. Open the file `SpecRunner.html` from the project root in the browser (you'll see all tests passing in Jasmine), then inspect - and access the console.
3. Type `var bowling = Bowling.new();` into the console to start a new game.
4. Type `var bowling.roll(number);` using a number of your choice, 20 times
5. Type `bowling.totalScore();` to view the total score of the scorecard including those for spares and strikes

### Optional Extras I am still working on!

* Create a nice interactive animated interface with jQuery. Half way there! See image:

<img src="/images/Screen Shot 2018-07-19 at 09.07.19.png" />

* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.
