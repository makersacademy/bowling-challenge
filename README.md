
Bowling Challenge
=================

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

You might even want to start with ESLint early on in your work — to help you
learn Javascript conventions as you go along.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

# My attempt

## Approach

* User stories
* General project setup
    * eslint
        * set up to use AirBnB base style guide
    * jasmine
        * although this is a web-based project, in order for Travis to be able to run tests, jasmine needs to be set up as a node package. Testing will cover both bases

## User Stories

```
As a bowler
So that I can keep track of the game
I want to enter the scores I get as I'm playing

As a bowler
So that I can see how well I am playing
I want the scorecard to update whenever I enter a score

As a bowler
So that I don't make mistakes or have to worry
I want the scorecard to automatically keep the right score

As a bowler
So that I can be entertained while I"m playing
I want the scorecard to highlight special scores like strikes, spares, gutter games and perfect games

As a bowler
So that the scorecard is easy and interesting to read
I want it to be graphically well designed and interesting to look at
```

1st story

- Added a Game function and tested addScore method. Soon realised that node and standalone jasmine were incompatible due to standalone not recognising node module syntax. Found guide to setting up grunt to run standalone from commandline so it can be triggered by Travis, and set this up
- Created the simplest possible interface for inputting scores, and linked this with Game class using a game-controller script

2nd story

- The biggie. Started with unit tests for Game

