Bowling Challenge [![Build Status](https://travis-ci.org/omajul85/bowling-challenge.svg?branch=master)](https://travis-ci.org/omajul85/bowling-challenge)
=================

**Author:** Omar Alvarez

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset. 

Installation and usage
----------------------

From a user's perspective, you can download and run the test using the commands below:

```sh
$ git clone git@github.com:omajul85/bowling-challenge.git
$ cd bowling-challenge
$ google-chrome SpecRunner.html
```
The last command above can be changed in order to use the browser of your preference. The command will open the tests on the browser as you can see in the image below:

![Jasmine](http://s19.postimg.org/o6cfhak1f/Jasmine.png)

In order to test the application locally, you can use the command:
```sh
$ ruby server.rb 
```
Then, open your browser and visit `localhost:4567`.

Deployment
----------

The application has been pushed to Heroku using Git. You can play <a href="https://bowling-omajul85.herokuapp.com/" target="_blank">here</a>.


Ten-pin bowling rules:
----------------------

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

For more information about the game visit this wikipedia <a href="https://en.wikipedia.org/wiki/Ten-pin_bowling" target="_blank">link</a>.

Solution
--------

This solution is based on the Finite-state machine modeling. See the wikipedia <a href="https://en.wikipedia.org/wiki/Finite-state_machine" target="_blank">article</a> for further details.

The image below is a state diagram for a bowling game: 

![Diagram](http://s19.postimg.org/408xieodv/Graph.png)