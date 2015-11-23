Bowling Challenge
=================

The functions in this file all converge into one final function:
`bowlingScore()`
This takes one argument, a `scorecard` which is an array of nested arrays (two-dimensional array).
Each nested array represents one bowling frame. 

The `scorecard` is validated on entry for an invalid length - more than 10 frames is not permissible. 

The `scorecard` is also validated for an invalid number of pins per roll/frame being entered. This is done using `pinCheck()` which is validates frames 1-9 for rolls of greater than 10 pins supplied and frame 10 for rolls greater than 30 being supplied. 

The `bowlingScore()` function walks across the `scorecard` and in each roll, checks for a spare and strike using `isSpare()` and `isStrike()` respectively before appending the appropriate score (+ bonus) to a new array. At the end, this array is flattened into a one dimensional, and the points are summed by reduction.

Later functionality of a front-end interface are yet to be implemented, but a tabled interface can be used to enter pins per roll. The entered values can then be used to construct the array of arrays - `bowlingScore()` can returns the correct score on a frame-by-frame basis, it does not require a complete game's scores. 

A game engine can be used to manage player instances and turns to create a full-fledged bowling scoring system. 

Installation:
-----

Download this repo:

`git clone git@github.com:djtango/bowling-challenge.git`

Running tests:

From the root project directory you can run

`open SpecRunner.html`


CI
--

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
