
Bowling Challenge
=================

Design
======

The solution has two classes which between them handle all of the logic for play a match of 10 frames. It handles all of the following according to the rules for Bowling found at: https://en.wikipedia.org/wiki/Bowling

* [ ] Gutter game
* [ ] One frame
* [ ] Multiple frames
* [ ] Spares
* [ ] Strikes
* [ ] Final Frame
* [ ] Bonus logic


User interface
==============

The design (but not the code) for the score buttons was influenced by http://www.bowlinggenius.com/. Only buttons which apply to a particular game will be displayed i.e. if 8 pins go down on the first go only buttons 0, 1 and 2 will be visible for the second.   


Current state - what hasn't been implemented
============================================

* The css is minimal and could be improved substantially.

* The buttons should show -, X or / as appropriate instead of numbers

* The scores should be displayed using -, X or / as appropriate instead of numbers



To Run jasmine tests
=======================

```
$ git clone git@github.com:philb56/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
```

To run
======

```
git clone https://github.com/philb56/bowling-challenge.git
bundle install
open index.html in browser
```

Specification
=============

See ./docs/specification.md
