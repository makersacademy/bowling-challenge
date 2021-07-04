
![Screenshot](images/screenshot.png)

Personal notes:

For the bowling challenge i'm generally happy with how it went, although at times (very) challenging, i'm happy with the progress as a few weeks ago I wouldn't have been able to start a project like this. I started by breaking the requirements into user stories (user stories can be found below) then focussed on the logic. The Javascript logic for the game was fiddly but it achieves the brief and after various round of refactoring - I stuck as closely as possible to SRP. 

Logic: A user can input two numbers and the score for that frame is calculated whether it's a regular score, spare or strike. The difficulty was working out how to add the next bowl to the score, if the next bowl hasn't been played yet. For this, I introduced a 'switch spare/strike/ bonus on' function with conditions if the user had bowled two bowls resulting in 10(spare) or one bowl is 10 (strike). 

Front end: For the second weekend I focussed on taking the input from the text box, executing the logic and iterating over the scorecard array so each result would display on the page, in the correct table cell. Ensuring the table updates on each submit was the difficult part as the spares and strikes needed to update as well as the current frame. Once that was achieved, I introduced bootstrap for styling and layout. 

Thanks,
Jo


User stories: 

- As a player
So that I can keep scores
I want the scorecard to be blank 
Done

- As a player
So that I can record the scores
I want to input my rolls for each round
Done

- As a player
So that I can see my score for that round
I want the knocked down pins to total score
Done

- As a player
So that I can see my score when i get a spare
I would like my frame score to add my score + next bowl
Done

- As a player
So that I can see my score when i get a strike
I want to my frame score to add my score + the next two bowls
Done


Scorecard responsibilities:

- Takes in 2 numbers
- Calculates scores per frame
- Remembers if the last bowl was a spare or a strike
- Shows scores so far


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
