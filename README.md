
Bowling Challenge
=================

##Approaches to learning a new language

When learning JavaScript, I have relied on the following approaches:

  * Started with the recommended resources (resources for the Module on the Makers apprenticeship course, links on Slack);
  * Knowing the key concepts of the language previously studied (such as what are variables, methods, objects, data types etc.), I have tried to work out what their equivalents are in the new language;
  * Attempting simple exercises (Exercism, ES6 tutorial, W3 Schools) helped me to get familiar with the language and writing expressions;
  * Translating FizzBuzz code from Ruby into JavaScript trying to remember the syntax without relying on reference materials;
  * Reading Makers pills articles (very useful, especially about functions) and working through the afternoon challenge;
  * Trying to understand code written in JavaScript (Count exercise);
  * To check whether I have retained any knowledge, I have tried to implement the Friday challenge (Bowling) relying mostly on my memory and only going back to the reference materials when stuck.

##Set-up and approach

To complete the challenge, I have decided to start with a simplified scoring method as follows:
  * There are 10 frames in the game;
  * Each frame has 2 rolls:
  * A player rolls a ball on each roll;
  * A player scores between 0 and 10 on each roll;
  * If a player scores 10 on the first roll, they move to the next frame;
  * Total score is calculated (i.e. no special rules for 10th frame, spares or strikes so far).

When finished, the game will be accessible from a webpage which will contain a scoring card, and a "Roll" button which a player presses to roll a ball (as an aside, I'm not really grasping what "DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS." means - surely, if the user puts any desired number of pins knocked on each roll, it's not much fun to play? Therefore, when a player hits the "Roll" button, the resulting score for the roll will be randomly generated). Also, the webpage will contain a tableau with the current frame, roll and current score displayed.

To complete this simplified first-attempt challenges, the following user stories are devised:

###User story 1:
  * As a player;
  * So that I can enjoy the game;
  * I need to roll a ball and see how many pins I hit.

###User story 2:
  * As a player;
  * So that I can keep progress of my game;
  * I need to know what frame and roll I currently play.

###User story 3:
  * As a player;
  * So that I can play the whole game;
  * I need to be able to play all 10 frames.

###User story 4:
  * As a player;
  * So that I can visualise my game;
  * I need to play a game and see my scorecard on a webpage.

A note: Before moving to more complicated scoring, I would like to create a dynamically updated webpage with a score card, tableau and a "Roll" button so that a game can be played.

While developing the interface, I realised I need additional functionality to keep track of the frames to update the score card. Instead, I have decided to return to developing the scoring model.


###User story 5:
  * As a player;
  * So that I can get bonus points for spares;
  * I need to add these bonus points to my total score.




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
