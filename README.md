Bowling Challenge
=================

The Task:
-------

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

Getting started
------

1. Clone this repo 'git clone git@github.com:emanuelegorga/bowling-challenge.git'
2. Change directory 'bowling-challenge'

Run the tests
------
1. Open 'SpecRunner.html' which will take you on your browser to display the result of each test.

How to use it
------
1. game = new Game();
2. game.roll(number of pins) - Repeat this process for all the 10 frames;
3. game.getScore() - will give you the end score of your game;

Technical Approach and technologies I used:
-----
* JavaScript
* Jasmine

In this challenge I was focusing on my tests and tried to be driven from them;

# Bowling — how does it work?


Strikes
-----

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares
-----

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame
-----

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

Gutter Game
-----

A Gutter Game is when the player never hits a pin (20 zero scores).

Perfect Game
-----

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
