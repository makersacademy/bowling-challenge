[![Build Status](https://travis-ci.org/GJMcGowan/bowling_challenge.svg?branch=master)](https://travis-ci.org/makersacademy/bowling_challenge)

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

My Solution: 
-----

I used two class constructors to make a frame and a bowling object.

To use it, you make a bowling object and use object.bowl(score) to record what your bowl scored. If you want to know your total score you run finalScore. If you want to know the score of every frame you have bowled, you run allFramesScore.

Testing was done using jasmine. To run tests:
  * Run bundle install in the root directory
  * Run rackup and navigate to localhost:9292

### Ongoing

Creation of a nice user interface in jquery/css.
Refactoring, for example to prevent Frames from being completely coupled to Bowling.