# Project title

Bowling challenge: Count and sum the scores of a bowling game for one player
(in JavaScript).

This is the weekend challenge after week 5 at Makers Academy. The first week i
have used Javascript in software development. This is a bowling score card, not
an acutal bowling game - the user will be entering a number.

### Motivation

This project was made to develop Javscript software development skills, along
with all associated skills that will be need to complete the project.

### Build status

The project is currently under construction, it may not be completed as this is
a practice exercise to build my skillset.  

### Screenshots

I will include diagrams clearly labelled within the root folder.

## User Stories

A bowling game consists of 10 frames in which the player tries to knock down the
10 pins. In every frame the player can roll one or two times. The actual number
depends on strikes and spares. The score of a frame is the number of knocked
down pins plus bonuses for strikes and spares. After every frame the 10 pins are
reset.

* 1
As a player in a bowling game,
So that I know when the game is over,
I want my game to end when I have thrown my last ball.

* 2
As a player in a bowling game,
So that I can record my score,
I want all the points in my turns to be totalled up.

* 3
As a player in a bowling game,
So that I can compare myself to others,
I want a to see what my score if after each frame.

* 4
As a player in a bowling game,
-- want to get my bonus points -- if i get a strike.
-- want to get my bonus points -- if i get a spare.
-- want to take an extra turn if i get a strike or a spare in the 10th frame.
-- I dont want to roll a second ball if I scored a strike in the first ball of a frame.
-- I want to thrown two balls per frame, unless i score a strike.

---

## Bowling: how does it work

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a
frame. The frame ends immediately (since there are no pins left for a second
roll). The bonus for that frame is the number of pins knocked down by the next
two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a
frame. The bonus for that frame is the number of pins knocked down by the next
roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the
additional balls for the bonus. But they can never roll more than 3 balls in the
10th frame. The additional rolls only count for the bonus not for the regular
frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).

    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

--- 

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.


# Tech / framework used

An apple macbook was used to write code using VSCode as an editor and;

* Javascript was used as the main language.
* Jasmine 3.4.0 was used for testing.
* ESLint was used for style checking.

### Code style

ESLint was used for linting and stylying the code. To run the lint locally enter ($ ./node_modules/.bin/eslint) in the terminal, after installing dependencies (Node.js) and creating the eslintrc.js file by entering ($ npm install eslint --save-dev) to the terminal. Please see here for further info:

https://github.com/eslint/eslint

### Tests

A TDD process was used in the development of this project, please see the
attached Jasmine files for details of the testing that was carried out.

## Installation

Javascript was used in the construction of the project, if gems were used,
please find attached a gem file listing those gems for installation.

## API Reference

No API used in this project.

## How to use

You should be able to run the code in the console of a web browser, such as chrome. 

## Credits

Full credit given to Makers Academy who suggested the project.

No contributions are required at this time, as this is a training exercise.
