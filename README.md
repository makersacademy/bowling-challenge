Bowling Challenge
=================

This is an app which counts and sums the scores of a ten pin bowling game for one player (in JavaScript).

![screenshot](images/Screenshot 2016-12-29 11.08.10.png)

Features
----------
* Interface using jQuery
* Bowler can only knock down remaining amount of pins on second roll
* Feature

Usage
-------------
First clone the repo.
```
$ git clone https://github.com/cjcoops/bowling-challenge.git
```
To run, open the index.html file in the browser.
```
file://path/to/bowling-challenge/index.html
```
To test, open the SpecRunner.html in the browser.
```
file://path/to/bowling-challenge/SpecRunner.html
```

Technologies Used
----------

* Javascript
* jQuery

#### Testing
* Jasmine

Project
----------------
#### Objectives
Objectives objectives objectives

#### Motivations
Objectives objectives objectives

#### Thinking
Objectives objectives objectives

#### Design
Objectives objectives objectives

#### Issues
Objectives objectives objectives

#### Alternatives
Objectives objectives objectives



Bowling Challenge
=================


* Challenge time: rest of the day and weekend, and the entire of Makersbnb week if you need it, until Monday 9am
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

Task:
-----

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
