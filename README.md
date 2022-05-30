Bowling Scorecard Tracker
==================

This program is designed to input Bowling scores.


This system was built using the following [TDD](https://en.wikipedia.org/wiki/Test-driven_development#:~:text=Test%2Ddriven%20development%20(TDD),software%20against%20all%20test%20cases.).

## Installation
Fork or download this repo.\
Use `node` to install the correct libaries to use and test this code. You can require the code from terminal, or copy & paste it in Node.\

## How To Use
Make a new instance of Scorecard with `const scorecard = new Scorecard;`.\
Call `frameInput` to input the score.\
Call `.score` to show your current total score after 1 completed frame.\
Call `.frame` to show which frame you are on.\

## How To Test
Run `jest` to run through tests.\

## Bugs/Future Changes To The Code
* Have not implemented logic for strikes, spares, gutter games or frame 10 logic.
* Fixed edge-case for inputting a score greater than 10 in one or both rolls.
