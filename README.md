# Bowling Challenge - JavaScript

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD PROGRAM. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times, apart from in frame 10 when they can have up to 3 rolls. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

[Bowling Rules](bowling_rules.md)

## Planning the Task

In [last weekend's challenge](https://github.com/stringiest/bowling-challenge-ruby) I worked through the logic of bowling to create a scorecard tool in Ruby.  In the README for that project I discussed the outstanding functionality for my code.  

Having previously undertaken the exercise in logic and planning, I have chosen to use this weekend's challenge purely to practice translating code from Ruby to JavaScript, and to practice creating an interactive interface with jQuery.

Whilst the logic of the Ruby code that I had written was mostly sound, it was also convoluted.  In order to maximise the time available for the JavaScript & jQuery elements of the challenge, I have used the Ruby code from [this video](https://www.youtube.com/watch?v=wrr16PdgHPM) as my start point.

## Technical Information

This project has been written in JavaScript, linted with JSHint and tested using Jasmine.

## Outstanding Tasks

* Set up Travis CI
* Work through Ruby Bowling Game video, and create Ruby code
* Translate to Javascript, in a TDD way.
* Use jQuery to create an interactive interface.
