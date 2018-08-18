
Bowling Challenge
=================

### Quickstart:
#### How to install the code:
1. Fork this project
2. Use node version 10.4.0
3. Run ```npm install``` to add module dependencies

#### How to use the website:
1. Load the site via ```open index.html```
2. Enter your scores in the interface

#### How to run the tests:
1. Jasmine SpecRunner file includes all spec and source code files.
All tests can be run via a browser, type ```open SpecRunner.html``` in to the terminal.
2. ESLint can be run via ```./node_modules/.bin/eslint src``` and ```./node_modules/.bin/eslint spec```

### Approach to solving the challenge:
1. Set up browser based Jasmine for TDD of the application.
2. Review the bowling game scoring system and break it down into the smallest requirements.
3. Top line diagram for bowling scoring works
4. Excel spreadsheet to check mathematical calculations
5. Diagram for the interaction between each element of the game - score calculation and score score display
6. TDD source code creation.
7. Basic HTML page built
8. Interface created to connect HTML with JavaScript functionality
9. Further refactoring to reduce functions and research object orientated design patterns

### Status at point of push:
1. Total score is calculated and displayed once the user has input the number of pins knocked down in each roll of the game.
2. Minimal CSS styling applied.
3. Travis CI added but don't seem to have admin access to the repo as it's forked from Makers.
4. Functions added for identifying Gutter Game and Perfect Score in the display but not yet implemented in the interface.

![Application Example](images/application_at_point_of_pull_request.png)

### Description of what code does:
This is a bowling score card as per the standard game rules. Top score is 300, gutter game is zero pins hit, bonuses are given for rolling a spare and or strike.

### Code Style:
1. Vanilla JavaScript, with Jasmine syntax for testing.
2. jQuery for page interaction and HTML/CSS styling using Bootstrap.

### Features:
1. Drop down menu for each roll per frame.
2. Submit button calculates the total score of the game
3. Reset button allows reuse of the score calculator without refreshing the page.

### Intended next steps:
1. Implement a Strategy Pattern for calculating the score
2. Cumulative scoring for each frame
3. Http-server for local hosting of the site
4. Cypress feature tests

### Code Example:
Extract from the codebase:
```
ScoreCalculator.prototype.getScore = function() {
  return this.totalScore;
};

ScoreCalculator.prototype.addScore = function(scores) {
  for(var i = 0; i < (scores.length); i++) {
    this.scores.push(scores[i]);
  };
};
```

Instructions Set by Makers Academy
-------

* Challenge time: rest of the day and weekend.
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

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

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
