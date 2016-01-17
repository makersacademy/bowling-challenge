Bowling Challenge
=================

This is a solution to a challenge given by Makers Academy on week 5, part of Learn
to code in 12 weeks course.

The aim of the challenge.
-------------------------

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)


Technologies used
-----------------

  * Testing
    * Jasmine

  * Back end framework
    * JavaScript

  * Front end framework
    * jQuery


Functionalities requested
-------------------------

- Count and sum the scores of a bowling game for one player (in JavaScript).

- A bowling game consists of 10 frames in which the player tries to knock down the
10 pins.

- In every frame the player can roll one or two times.

- The actual number depends on strikes and spares.

- The score of a frame is the number of knocked down pins plus bonuses for
strikes and spares. After every frame the 10 pins are reset.


Setting up testing environment
------------------------------

In order to play around with this app you need to clone the repo shown below and
execute the following commands to be functional.

```sh
$ git clone git@github.com:Willibaur/bowling-challenge.git
```

If you want to run all tests written previously, you need to execute:

```sh
$ username/bowling-challenge/open SpecRunner.html
```

This will open a window in your default browser when you can see all info related
to the tests written in Jasmine.

Web access application
-----------------------

[![Build Status](https://travis-ci.org/Willibaur/bowling-challenge.svg?branch=master)](https://travis-ci.org/Willibaur/bowling-challenge)

Contributors
------------

* [William Bautista](https://github.com/Willibaur)
