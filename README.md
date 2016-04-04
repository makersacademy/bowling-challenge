Bowling Challenge
=================

Introduction :bowling:
----------
This is a little web app that counts and sums the scores of a bowling game, written in JavaScript and test-driven using Jasmine.

![Imgur](http://i.imgur.com/KPQCkyT.png)

Features :star2:
-----------
* A bowling framework of 10 frames, each with 10 pins and 2 rolls maximum.
* Calculates the score of each frame, which is the number of each pins knocked down plus bonuses for strikes or spares.
* When strike (10 pins knocked down in one roll), the frame ends immediately and the bonus will be the scores of the next two rolls.
* When spare (1p pins knocked down in two rolls), the bonus will be the scores of the next roll.
* Allows additional rolls when there is a strike or spare in the 10th frame, but a player can never roll more than 3 balls.

How to use Bowling :page_with_curl:
-------------------
To clone this repo:
```
$ git clone git@github.com:junyuanxue/bowling-challenge.git
```
To interact with user interface:
```
$ cd bowling-challenge
$ open index.html
```

Testing :white_check_mark:
---------
This project is tested using Jasmine. To run all the unit tests, type in Terminal:
```
$ cd bowling-challenge
$ open SpecRunner.html
```

Tools used :wrench:
-----------
* JavaScript
* Jasmine
* jQuery

Author :cat:
----------------------
Junyuan Xue

[github](https://github.com/junyuanxue)  [blog](https://spinningcodes.wordpress.com/)
