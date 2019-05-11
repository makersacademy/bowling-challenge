
Bowling Challenge
=================

## How to use

1. Clone this repository;

2. Install Jasmine (if not already globally install) or type ```npm install``` to install packages;

3. Open ```node```

4. Type, in sequence:
``var Bowling = require('./bowling/js')```
``var bowling = new Bowling();```

5. To play, type ``` bowling.roll(<pin>)``` replacing the pin with the number of pins you wish to knock down.

6. At anytime, to see your scorecard, type ```bowling.getScorecard()```.


### System

Developed in JavaScript.
Testing framework: Jasmine node.js

### Next Steps

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

### User Stories Still to be implemented

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.
