
Bowling Challenge
=================

## Analysis of Approach

In order to undertand the logic of the scoring in bowling, I spent time researching how other's had solved bowling kata. After deconstructing their methods, I started from scratch, using TDD to drive the development of the game. 
However, I ran into issues as my logic seems to only work with a "complete game". This led to problems with my user interface, as clicking the button to knock pins down "didn't do anything" (it may or may not have added the pins to the rolls array, but as I wanted to update the score each time I rolled, it ended the game. Since there was only one number in the array, the score was not updated as it needed at least two rolls to return the result.)
To solve this I started again on another branch, this time linking with the interface from the start. The simplest way was to use a counter, which simply added the number of pins knocked down to the total after each roll. Again, I ran into problems linking in the complex logic. 

I have chosen to submit a pull request with both solutions, "game.js" includes the complex logic and passes all tests assuming a complete game. "notProperGame.js" includes simple logic to tally pins knocked over. The User Interface is based around "notProperGame.js" as I wanted to practice html / css skills without being hindered by the complex logic not working correctly with the interface. 

Having spoken with other members of my cohort, many of them have used a "frame" class, which given more time and a chance to discuss ideas with a coach, I may have employed too.  I think I could have eventually solved my problems without a frame class, but I can see the benefit of employing the single responsibity principle even in small applications as good practice for the future. 

## Questions

How to approach a challenge when the logic seems baffling - there are certain elements in this challenge that I simply couldn't have solved without looking at the solutions of others and breaking it down first. During this course, we are "learning to learn" and breaking down correct answers into easily understandable chunks before applying them is a vital learning tool. However, this is not always going to be available, its just by chance that bowling kata are so well documented. 


## The Task

* Challenge time: rest of the day and weekend.
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

Also, don't generate random rolls. Trust us on this one.

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
