# The Bowling Challenge

This project provides a way for a user to record their bowling scores in a scorecard, including calculating bonus points for spares and strikes.

NOTE: This project does not play a game of bowling or roll the ball for the user.

## Technologies used

- Most of the project is build in JavaScript
- The web page is built in HTML and CSS
- Tests are written in Jasmine
- ESLint is used for the linter
- I have attempted to use Node.js and travis for automated tests on github but this is not currently working
- Karma for running automated tests - note this is not yet working
    - `npm install karma --save-dev`
    - `npm install karma-jasmine karma-firefox-launcher --save-dev`
    - `npm install -g karma-cli`

## Setting up the project
To set up the project on your own machine:

- `git clone `
- `npm i -g eslint` to install the linter

## Using the project

#### To open the user interface

- [MAC] `open -a "Google Chrome" index.html` in the console
- [LINUX] `google-chrome index.html`

#### To run the tests

- [MAC] To run Jasmine tests in the browser, type `open -a "Google Chrome" SpecRunner.html` into the terminal
- [LINUX] To run Jasmine tests in the browser, type `google-chrome SpecRunner.html` into the terminal

#### To run the linter (eslint)

- To run the linter, type `eslint src/**`

## My approach

JavaScript was a totally new language and concept for me when I originally created this project. The logic in the challenge was complex so I initially focused on understanding the business logic. I implemented a user interface second and finally spent a lot of time refactoring to improve what I had written.

Steps I followed:

- Setup of a basic git repo so that I can make notes and feel ready to build
- Understand the rules of bowling and model how that all works
- TDD a game, frame and bonus class
- End of first weekend - basic scores and strikes/spares working but does not work for two strikes in a row

- Beginning of second weekend - rewrite game to not need a bonus class and to instead iterate over frames to calculate bonus points
- Not working - final frame will calculate the first bonus ball as part of a normal role if you roll a strike with the first ball.
- Not working - user interface doesn't allow for 3 balls to be thrown in the final frame

- Later:
  - Refactoring the code to have an MVC model and removing the additional "controller" object which was duplicating code that could be in game or in the index.js (which essentially is the controller)
  - Refactoring the code to extract responsibilities out of game and into frame where appropriate
  - Refactoring the code to have more meaningful variables, new methods to DRY the code and trying to make the bonus points calculation as simple as possible

### Let's TDD
- I started to build my code using TDD. Or so I thought. I went straight to unit tests, first to set up the initial game and then second to start building frames
- About an hour into my merry TDD process, Ed posted in the slack channel a recommendation to write a feature test for the gutter game first. Doh! Feature tests!!
- As it turned out, a bit of my game spec seems to be a bit of a feature test anyway but my next step was to build the proper feature test.


### Things I would still like to do

- Make the interface clearer that a strike or spare has been scored
- Update functionality for frame 10 with the additional ball - if a 10 is scored first then don't count the extra point. Also update index.html to allow 3 balls - only make the 3rd appear if relevant?
- Make the user interface pretty including using flash to notify a problem
- Look to see if I could use better syntax anywhere - map or reduce, foreach instead of a for loop for arrays etc
- Add error handling to stop the user adding more than 10 points per frame

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
- Bonus object - to keep track of required bonus points because of a strike or a spare - **NOW REMOVED AS IT WAS TOO COMPLICATED**

### Data structures

- The game holds:
  - A list of frames for the game
  - A list of currently active bonus objects
- A frame holds:
  - Details of the balls rolled and the scores for those
  - A frame total which will include bonus points
  - The number of pins left in the frame so we can check that the player doesn't exceed 10
- A bonus is made up of: (a bonus is stored as a hash object) - **NOW REMOVED**
  - The type of bonus - strike or spare
  - If it is a strike, it will hold the first bonus point
  - The frame in which the bonus started accruing
