
Bowling Challenge
=================

Design
======

The solution to date has two classes which between them handle all of the logic for play a match of 10 frames. It handles all of the following according to the rules for Bowling found at: https://en.wikipedia.org/wiki/Bowling

* [ ] Gutter game
* [ ] One frame
* [ ] Multiple frames
* [ ] Spares
* [ ] Strikes
* [ ] Final Frame
* [ ] Bonus logic



To Run jasmine tests
=======================

$ git clone git@github.com:philb56/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html


To run
======

open in console
match = new Match(Frame);
repeat:
  match.play(<score>) // where <score> can be -, /, X, 0..10
match.score() // provides score to date


Specification
=============

See ./docs/specification.md
