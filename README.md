
Bowling Challenge
=================

* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. 

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

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

## Code Review

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.

##  Challenge Notes

High level plan
===============

1.  Fork
2.  Create README and update as you go along
3.  Identify features
4.  Draw up UI
5.  Create user stories
6.  Create a business logic model
7.  TDD business logic / features using Jasmine and JS
8.  Refactor code

User Stories
============

As a player
So I can play a single frame
I’d like to see what I scored for a frame

As a player
So I know my total score
I’d like to view my total score for up to 10 frames

As a player
So that I can have a gutter game
I’d like to bowl 20 zero scores.

As a player
So I can get bonus points for a spare
I’d like to have my spare bonus points added to my total

As a player
So I can get bonus points for a strike
I’d like to have my spare bonus points added to my total

As a player
So that I can play a perfect game
I’d like to be able to enter 10 strikes in a row.

As a player
So that I can get 30 points in the 10th frame
I’d like to be able to score 3 strikes in a row in the final frame only.

As a player
So that I can get 20 points in the final frame
I’d like to be able to knock over 10 pins in the first two rolls and then get a strike.

Notes
============

So far I have:

1.  Forked
2.  Created a README
3.  Identified features
4.  Drawn up UI
5.  Created user stories
6.  Created a partial business logic model
7.  Done TDD some of my business logic model / features using Jasmine and JS

Reflection

I chose to move forward with the user interface before I had completed the business logic because I wanted to spend some time on this rather than using all of my allocated time on logic.  This has meant I got more familiar with JQuery and linking up JS with a HTML page.  

I don't think to move on to the front end before a basic backend is complete is something I'd do as a regular process but in this case, it was helpful to get practice in both areas.  Even for learning purposes, I think having a more basic but complete game logic would have been a better idea than moving on to the front end with incomplete logic.

To complete this challenge I would first write a more detailed model with complete (pseudo) logic for the game.  This will likely mean some of my existing tests and functions may not be required.  There is also already a lot of refactoring to do.  For example, doing multiple rolls when testing game scenarios such as a perfect game and gutter game.  However, going through this process has made me much more aware of how I can write more elegant tests focused on the user stories I created.  This will be more efficient compared to what I initially did b testing the individual functions which would be built up for later tests.  I already knew this but carried away with the challenge.

Once the logic is written I'd expect to have fewer tests then I have now. Linking the UI to the JS with Jquery should also require much fewer queries then what I am currently on track to have.

I'd finish off with getting more familiar with Travis CI and ESLint.

To conclude whilst it was good to get more exposure to using Jquery and developing a front end it's become very clear why it's a good idea to start with a clear model and good understanding of how the logic will work before starting.
