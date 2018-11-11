
Bowling Challenge
=================

- [The Task](#the-task)
  * [Optional Extras](#optional-extras)
- [Bowling — how does it work?](#bowling---how-does-it-work-)
- [User stories](#user-stories)
- [My approach](#my-approach)
  * [Things I want to look at/fix](#things-i-want-to-look-at-fix)
  * [Technologies used](#technologies-used)
- [Setup instructions](#setup-instructions)
  * [To run the app:](#to-run-the-app-)
  * [To run tests:](#to-run-tests-)

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

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

## User stories

```
As a player
I want to be able to enter the score of my rolls in a frame
so that I can track my scores

As a player
I want to be able to see what frame I am on
so that I can keep track of my progress

As a player
I want to be able to see a cumulative score of a game as I go
so that I can see how well I am doing

As a player
I want to be able to enter when I have scored a strike
so that I will be able to add bonuses

As a player
I want to be able to get bonus points when I have scored a strike
so that my total score is calculated correctly

As a player
I want to get bonus points when I have scored a spare
so that my total score is calculated correctly

As a player
I want to be able to enter the score for 10 frames
so that I can complete the game

As a player
I want to be able to play 2 bonus balls in the 10th game if I have scored a strike
so that my total score is calculated correctly

As a player
I want to be able to play 1 bonus ball in the 10th game if I have scored a spare
so that my total score is calculated correctly
```

## My approach

I really enjoyed the challenge of working in javascript after such a short time.  And actually found the hardest thing about this to be the logic of the scoring rather than having to use javascript.

For a long time I was fixated on having frame 10 allow for 3 rolls but then this broke my bonus calculation.  Last minute I rearranged this to have frame 10 function the same as the other frames, but just to allow for a bonus to be set manually rather than automatically as with the other frames

I am pleased with the way I have done the interface - with the buttons and table being created programatically rather than being part of the html - was good practice in using jquery

### Things I want to look at/fix

The scorecard works pretty consistently.  Some final things I want to do:
- make the front end responsive
- have messaging around the end of game, when getting a strike and spare
- there may be an issue if you score a 0 on your first bonus of frame 10 so need to fix that

### Technologies used
- javascript
- JQuery
- HTML
- CSS
- Jasmine
- eslint (a tiny bit)

## Setup instructions

### To run the app:

  ```
 run index.html in a browser
 ```

 You can try it out at https://clarejolly.github.io/bowling-challenge/index.html

### To run tests:

 ```
 run SpecRunner.html in a browser
 ```
