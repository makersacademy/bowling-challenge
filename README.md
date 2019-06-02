
Bowling Challenge
=================

## The Task

Creat a bowling scorecard to count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Specification

* Game score starts at 0
* The player can enter the number of pins they have knocked down as a score
* The player can insert a score for 2 balls per frame
* The maximum number of pins per frame is 10
* If the player rolls a strike, the frame ends immediately
* If the player rolls a strike the player receives the total points of the next 2 balls
* If the player rolls a spare (all 10 pins in 2 balls), they receive the pins knocked down by the next ball
* The player can play ten frames per game
* In frame 10, the player can roll 3 times instead of 2
* The total score should be shown at the end of the game
* If the player doesn't hit a single ball, it's called a gutter game
* If the player scores 12 strikes, it is a perfect game

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.

## How to use

Clone this repo
```bash
open SpecRunner.html
```
Open the console with cmd + option + J

Create a new scorecard in the console:
```js
var scorecard = new Scorecard
```
---
## User Stories
```
As a player
So that I can start a new game
I would like my score to start at 0
```
Object|message
-|-
Scorecard|showScore

### Console test
```js
scorecard.showScore()
  // output should be 0
```
---
```
As a player
So that I can track my score
I would like to be able to enter the number of pins I have knocked down
```
Object|message
-|-
Scorecard|enterScore
```js
scorecard.showScore()
  // output is 0

scorecard.enterScore(3)
scorecard.showScore()
  // output is 3
```
---
```
As a player
So I can have two chances per frame to knock down the pins
I need to be able to add a score twice per frames
```
Object|message
-|-
Scorecard|frame
---
```
As a player,
Because because I have 2 attempts to knock down all the pins
I should be able to enter 2 scores per frame
```
Object|message
-|-
Scorecard|isFrame
```js
scorecard.isFrame()
  //output should be 1
scorecard.enterScore(3)
scorecard.enterScore(3)
scorecard.isFrame()
  //output should be 2
```
---
```
As a player,
Because I only have 10 pins that I am trying to knockdown
I would like a warning if my score for a frame is more than 10
```
Object|message
-|-
Scorecard|enterScore
expect error message
```js
scorecard.enterScore(11)
 // "maximum input per frame is 10"
```
---
```
As a player
Because I can't roll any more balls if I knock all the pins over in one go
I would like a strike to immediately end the frame.
```
Object|message
-|-
Scorecard|enterScore
```js
scorecard.isFrame()
  // output is 1
scorecard.enterScore(10)
scorecard.isFrame()
 // output is 2
