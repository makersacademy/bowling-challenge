
RACHEL GRIFFITHS
=================

## CHALLENGE: BOWLING SCORECARD
------------

##### BUSINESS LOGIC
* Create a Bowling Scorecard
* User enters score between 0 and 10 for each roll
* Each pin knocked down accounts for one point
* The game consists of 10 frames and each frame consists of 2 rolls
* Bonus points are awarded for a strike or a spare
* A strike occurs if all 10 pins are knocked down in roll 1 of the frame
* A spare occurs if the total frame score is equal to 10

##### WEB INTERFACE
* Create a nice interactive animated interface with jQuery.

### GETTING STARTED
------------
* JavaScript
* Open folder in which you want to download project to

```
git clone git@github.com:rachjgriff/bowling-challenge.git
```

### TESTING
------------
* jasmine 3.4.0
* To run from command line:
```
cd bowling-challenge/jasmine
open SpecRunner.html
```

### USAGE
------------

* Google Chrome - right click - inspect
* Navigate to console
* Follow the below input in order to see how game works and the cumulative score is calculated:

```
var scorecard = new BowlingScorecard
scorecard.rollScore(1);
scorecard.rollScore(4);
scorecard.game();
scorecard.cumScore();
```
* If you want to see which frame you are on:
```
scorecard.frameCount;
```

* If you roll a spare or a strike in frame 10, follow the the below input in order to complete the game:

```
scorecard.rollScore(2);
scorecard.rollScore(8);
scorecard.game();
scorecard.lastFrameSpareBonus(6);
scorecard.cumScore();
```
```
scorecard.rollScore(10);
scorecard.game();
scorecard.lastFrameStrikeBonus(6, 3);
scorecard.cumScore();
```

### WEBSITE SPECIFICATION (REQUIREMENTS)
------------
- [x] User enters roll score
- [x] Add roll score to frame score
- [x] Add frame score to total score
- [ ] Allow only 2 rolls to be added to a frame score
- [ ] Allow only numbers 1 to 10 to be added as a roll score
- [ ] Allow only 10 frame scores to be added to the total score
- [ ] Count number of rolls
- [x] Count number of frames
- [x] If roll score 1 = 10, add it to the frame score and automatically set roll score 2 = 0
- [x] If roll score 1 in previous frame = 10 and current frame roll 1 < 10, add current frame score twice to total score (Strike Bonus)
- [x] if roll score 1 in previous frame = 10 and current frame roll 1 = 10, add current frame roll 1 and next frame roll 1 to total score (Strike Bonus)
- [x] if roll score 1 in previous frame < 10 and previous frame score = 10, add roll score 1 of current frame twice to total score (Spare Bonus)
- [x] If frame count = 10 and roll 1 score of frame 10 = 10, allow 2 more rolls and add these to frame 10 score
- [x] if frame count = 10 and roll score 1 < 10 and frame 10 score = 10, allow 1 more roll and add this to frame 10 score

### USER STORIES
------------
USER STORY 1: Roll score set to 0

As a bowler  
So that I can start bowling  
The roll score is set to 0 in the beginning

USER STORY 2: Add roll score

As a bowler  
So that I can record the score of my roll  
I can enter how many pins I have knocked down

USER STORY 3: Add roll score to frame score

As a bowler  
So that I can record the score of the frame  
My roll score is added to my frame score

USER STORY 4: Roll score automatically added to frame score

As a bowler  
So that my frame score is updated as soon as I enter my roll score  
My roll score should update my frame score automatically

USER STORY 5: Roll Strike

As a bowler  
So that my scorecard shows a strike  
My frame score can only roll 2 should equal 0

USER STORY 6: Add frame score to total score

As a bowler  
So that I can see the total score of my game  
My frame scores get added to my total score  

USER STORY 7: New frame

As a bowler  
So that I can reset the pins  
A new frame will start after 2 rolls

USER STORY 8: Cum Score

As a bowler  
So that I can see my total score after each frame  
All my roll scores and bonus points are added up

USER STORY 9: Frame Count

As a bowler  
So that I can keep track of how many frames I have played  
Each frame has an index number which starts at 1 from frame 1 and increases in increments of 1 so that, for example, frame 3 = 3, frame 8 = 8 etc.

USER STORY 10: Strike Bonus 1

As a bowler  
So that I can receive bonus points for a strike  
My current frame score will be added to my previous frame score as bonus points, if I don't roll a strike in my current frame

USER STORY 11: Strike Bonus 2

As a bowler  
So that I can receive bonus points for a strike  
My current frame score and my first roll in my next frame will be added to my previous frame score as bonus points, if i roll a strike in my current frame

USER STORY 12: Spare Bonus

As a bowler  
So that I can receive bonus points for a spare  
The first roll score of my current frame will be added to my previous frame score as bonus points

USER STORY 13: Frame 10, Roll 1 = Strike

As a bowler  
So that I can receive bonus points for a strike in my last frame (frame 10)  
Allow me to have 2 additional rolls

USER STORY 14: Frame 10 & Frame 9 Strikes

As a bowler  
So that I can receive bonus points for a strike in my last frame (frame 10) and the previous frame (frame 9)  
Allow me to have 2 additional rolls and add to frame 10 and frame 9 accordingly

USER STORY 15: Frame 10 Spare

As a bowler  
So that I can receive bonus points for a spare in my last frame (frame 10)  
Allow me to have 1 additional roll  

### APPROACH
------------

* Focused on understanding the game logic in detail, breaking down examples given to ensure understanding of bonus points and how the final score is calculated
* Researched in detail how to access data in arrays and how to iterate over nested arrays in order to return a total score - sought help from peers which led me to the .flat() function
* Broke all requirements down into simple user stories and tested each one of them
* Attempted to keep each function simple and relative to one task only

### FOLLOW UP
------------

###### POSSIBLE CHANGES TO LOGIC:
* Need to split the BowlingScorecard constructor (class) into 2 in order to keep it simple - possibly BowlingFrame and BowlingScorecard
* Tests are long due to the need to test last frame - possibly reduce number of tests to avoid repetition
* Add in constants for minimum and maximum of knocked down pins to avoid use of magic numbers within functions
* Add in private method syntax   
  e.g. \_isLastFrameStrike
* Add in error messages if the numbers entered for knockedDownPins in the rollScore function and the bonusRolls in the lastFrame functions are not between 1 and 10
* Prevent more than 2 rollScores being added to a frame
* Prevent more than 10 frames being added to total
* cumScore does not include bonus points until the next frame(s) has been played - if a strike or spare has been scored, not sure if this should be blank in the logic or just in the user interface

###### ADDITIONAL FEATURES:
* Use jQuery, html & CSS to add an interactive user interface
* Add in Travis to gain test coverage
* Add in ESLint to check javaScript conventions are met


ORIGINAL README: Bowling Challenge
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
