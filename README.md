Bowling Challenge
=================

## Approach by Claire Nelson

#### Break down the requirements using tables that follow techniques learnt in Intro to TDD workshop and in Domain Modelling workshop

- Capture the nouns in the user stories as objects and verbs in user stories as messages. Use the techniques learnt in the first week of Makers to create [object model tables and CRCs](https://github.com/nelsonclaire/bowling-challenge/blob/master/task_stories/user_stories.md) which should assist with how to create the tests, classes and methods. 


## Technologies used

- Javascript
- Jest (test framework)



## Steps to download

1. Install node if required, which will execute the javascript, from [here](https://nodejs.org/en/)

2. Fork this [repo](https://github.com/nelsonclaire/bowling-challenge)

3. `git clone git@github.com:<userName>/bowling-challenge.git` onto your local machine


## To run tests

1. After cloning run `npm init -y`

2. run `npm install jest`

2. Run `jest` directly in root of your local project


## My approach

1. Break down into simple steps - consider the options for each frame as you move through the game, there appear to be three sections, what happens at the start, what can happen in the frames 2-9 with regards strikes and spares and finally what can happen on the last frame

2. Write first unit test - at the start of a game the score is zero

3. Follow red, green, refactor cycle for each test with commits before a refactor

4. Continue with simple tests for the first frame and when complete move to the next section of frames and options

5. Repeat until basic user story functionality is covered

#### Structure
- Specs: `.test.js`
- Models: `.js`

#### What I know I need to work on

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
