
Bowling Score Card
==================

Getting started
---------------

Open [index.html](https://github.com/DataMinerUK/bowling-challenge/blob/master/index.html) in your browser. Enter the number of pins you hit per roll. Or you can use the hosted version [here](http://datamineruk.github.io/bowling-challenge/).

Technologies
------------

JavaScript [backend](https://github.com/DataMinerUK/bowling-challenge/blob/master/src/bowling2.js) (because I enjoy pulling out my hair). Tests using [Jasmine](https://github.com/DataMinerUK/bowling-challenge/blob/master/spec/bowlingSpec.js). [Application](https://github.com/DataMinerUK/bowling-challenge/blob/master/src/app.js) using a mixture of JQuery and vanilla JavaScript. [Web page](https://github.com/DataMinerUK/bowling-challenge/blob/master/index.html) made with basic HTML.

Functionality
-------------

Counting and summing the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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

## Lessons Learnt

* `null + null` is evaluated to `0`. If you force `null` to be interpreted in a numeric context then it is treated like `0`
* Never use `eval()`. It will bite you in the butt.
* Try and incorporate as much knowledge into objects rather than trying to build it all out as functions. See [bowling.js](https://github.com/DataMinerUK/bowling-challenge/blob/master/src/bowling.js) versus [bowling2.js](https://github.com/DataMinerUK/bowling-challenge/blob/master/src/bowling2.js)
* JavaScript functions can get unwieldy long pretty quickly, especially if there are a lot of control flow statements.
