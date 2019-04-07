# The Bowling Challenge

This weekend (and next) the focus is on JavaScript. This is a totally new language and concept for me. My weekend challenge will be focusing on what have I learned about JavaScript this week, and how can I continue to use the same process to learn more about it. The challenge itself this week is complex so I am going to focus on understanding the business logic first, implementing the user interface second.

## Technologies used

- JavaScript for most of the functionality
- HTML and CSS for the web page
- Jasmine for the tests
- ESLint for the linter

## Setting up the project
- `git clone `
- `bundle install`
- `npm i -g eslint` to install the linter

## Using the project

#### To run the project

- `open -a "Google Chrome" index.html` in the console

#### To run tests

- To run Jasmine tests, type `open -a "Google Chrome" SpecRunner.html` into the console

#### To run the linter (eslint)

- To run the linter, type `eslint src/**`

## Limitations

- This project is not finished. After many hours of trying to get this all to work, it doesn't! :-)
- You can play bowling through index.html as long as you don't expect bonus points when you score a spare or a strike, or expect any special behaviour in frame 10. In fact the interface only allows you to play up to frame 4.

## My approach

After some very basic setup of a git repo so that I can make notes and feel ready to build, the first step this week was for me to understand the rules of bowling and model how that all works.

### User Stories

I extracted the following user stories:

```
As a player
So that I can record my turn at bowling
I want to be able to enter the number I scored on a roll of the ball"

As a player
So that I can see what I scored for the frame
I want to be able to enter up to two rolls for the frame"

As a player
So that I can correctly score my turns
I want to be limited to only one entry if I score a strike"

As a player
So that I don't incorrectly enter information
I want to be restricted to entering a maximum of 10 points for one frame"

As a player
So that I can see how I am doing
I want to be able to see my current score at all times"

As a player
So that I can see how I am doing
I want to be able to see the score for each frame"

As a player
So that I can see the correct score
I want bonus points to be added for a strike"

As a player
So that I can see the correct score
I want bonus points to be added for a spare"

As a player
So that I can end the game on a high
I want to be able to enter up to 3 rolls on the final frame"

As a player
So that I can see the correct score
I want the points to be added correctly for a final frame"

As a player
So that I can see how many pins I could knock down
I want to be able to see how many pins are still remaining in the current frame"

As a player
So that I don't feel especially bad about my bowling
I want to see an amusing animation when I score zero for the whole game"

As a player
So that I feel really good about winning
I want to see a celebratory animation when I score strikes on every ball for the game"
```

### Objects

Once I understood the user stories, I modelled the objects and their methods, using a sequence diagram (which I abandoned because it didn't seem to tell me much) and then a class diagram. **INSERT LINK**

- Game object - to control the overall scorecard
- Frame object - to control the score per frame
- Bonus object - to keep track of required bonus points because of a strike or a spare

### Data structures

- The game holds:
  - A list of frames for the game
  - A list of currently active bonus objects
- A frame holds:
  - Details of the balls rolled and the scores for those
  - A frame total which will include bonus points
  - The number of pins left in the frame so we can check that the player doesn't exceed 10
- A bonus is made up of: (a bonus is stored as a hash object)
  - The type of bonus - strike or spare
  - If it is a strike, it will hold the first bonus point
  - The frame in which the bonus started accruing

## Let's TDD
- Next I started to build my code using TDD. Or so I thought. I went straight to unit tests, first to set up the initial game and then second to start building frames
- About an hour into my merry TDD process, Ed posted in the slack channel a recommendation to write a feature test for the gutter game first. Doh! Feature tests!!
- As it turned out, a bit of my game spec seems to be a bit of a feature test anyway but my next step was to build the proper feature test. It's now late on Friday and I am having a little sulk that I completely forgot about feature tests... Maybe time for bed!!!


****

THE ORIGINAL Bowling Challenge
=================


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
