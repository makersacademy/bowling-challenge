
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

### My steps

This week I will not be creating a User class, instead I will be creating a Game class and a Frame class rather than just a single Scorecard Class.

#### Domain Modelling
This week I used a flowchart alongside a miro board to help me navigate the complex structure of Bowling, Using this I decided I would want a Game class that has the responsibility of co-ordinating that entire game from start to finish.

I would also have a Frame class, its responsibility is to calculated the score for that frame.

I would like the program to run like this:
```
const game = new Game();

game.addRollScore(5);
game.currentScore(); // Returns 5 

game.addRollScore(5);
game.currentScore(); // Returns 10

game.addRollScore(7);
game.currentScore(); // Returns 24  --> This is because we got a spare in the last roll, which gave us a bonus of 1 roll, so the bonus is 7 which gives us 17, then add on this rolls score which gives 24

game.addRollScore(1);
game.currentScore(); // Returns 25 

game.whatFrame(); // Returns 'Current Frame is 3'

game.addRollScore(10);
game.currentScore(); // Returns 35

game.whatFrame(); // Returns 'Current Frame is 4' --> Should move to 4th frame because we got a strike

game.addRollScore(5);
game.currentScore(); // Returns 45 --> total added is BONUS of 5 + score of 5

game.addRollScore(3);
game.currentScore(); // Returns 51 --> total added is BONUS of 3 + score of 3 Remember Strikes have a bonus of next 2 rolls
```

For now that is how I want the game to run

#### Lets start

To begin, I will test drive the creation of a Game and Frame class, It should:

- [x] Should create a Frame object when its instantiated
- [x] Allow the user to add a score via addRollScore() method
- [x] For now lets just have addRollScore() call a method on the Frame object called analyseScore() and pass an integer as an argument to it.

analyseScore() is responsible to directing the program to the correct function depending on the score

- [x] Use a conditional to check if a strike has happened, this should call the strike function which will is responsible for handling strikes
    - In strike() I decided to add 10 to the frame score
    - It will mark the frame as completed, we need some way of sending this info to the game object so that it knows to create the next frame
    - In the future after the basic logic is completed this will deal with bonus scores

- [x] create a method called calculateScore() which is responsible for returning the current score at any point in the game.


After we have completed this, the Game should be capable of handling strikes and displaying this score to the user.

Now lets handle the remaining logic for:
- [x] handling spares, should add the first roll to the frame score but not end the current frame 
- [x] less than 10 over the entire frame, this has the same logic but doesn't have any bonus
    - Most likely we are not going to get DRY code the first time round, but lets get the logic sorted and then we can refactor.

At this point, all the basic logic if working, when the users gets a strike the current frame ends and the next begins, anything less than a strike does not end the frame, rather it waits until the second roll to end the frame.

Therfore, the logic for strikes, spares and less than spares has been completed.

Now I want to begin by tackling the Bonus added for strikes, this causes the score of the next two rolls to be added to that frames score as a bonus. I will attempt to create a class called Bonus which should be responsible for issuing bonus scores

Unforunately, I was not able to complete the bonus section of the Bowling challenge, this had been due to lack of testing and time constrainsts which led to errors in the code.