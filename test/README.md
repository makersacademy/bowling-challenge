Bowling Challenge
Challenge time: rest of the day and weekend.
Feel free to use google, your notes, books, etc. but work on your own
If you refer to the solution of another coach or student, please put a link to that in your README
If you have a partial solution, still check in a partial solution
You must submit a pull request to this repo with your code by 9am Monday week
The Task
THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

User stories:

BUSINESS LOGIC

MVP: As a bowler
     In order to count my scores
     I want to have 10 frames that consist of 2 rounds

MVP: As a bowler
     In order to count my scores
     I want my 10 pins to reset after each frame
-----------------
MMP: As a bowler
     In order to count my scores if I score a STRIKE on my first round
     I want to receive 10 points, end the frame and receive the points    from   the following frame

MMP: As a bowler
     In order to count my scores if I score a SPARE on my first round
     I want to receive the points from the first round of the following    frame

MMP: As a bowler
     In order to count my scores, if I score a STRIKE or a spare in my    10th   frame
     I want to receive another roll. (only 3 extra rolls)

MMP: As a bowler
     If I score a perfect game (12 strikes)
     I want to receive 300 points
-----------------
INTERFACE

MMP: As a bowler
     In order to see my scores
     I want to keep track of how many points I received in each frames

-----------------------------

As usual please start by

Forking this repo

Finally submit a pull request before Monday week at 9am with your solution or partial solution. However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am. And since next week is lab week you have a full extra week to work on this.

STRONG HINT, IGNORE AT YOUR PERIL: Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

Optional Extras
In any order you like:

Create a nice interactive animated interface with jQuery.
Set up Travis CI to run your tests.
Add ESLint to your codebase and make your code conform.
You might even want to start with ESLint early on in your work — to help you learn Javascript conventions as you go along.

Bowling — how does it work?
Strikes
The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

Spares
The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

10th frame
If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).
Gutter Game
A Gutter Game is when the player never hits a pin (20 zero scores).

Perfect Game
A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

Ten Pin Score Example

Code Review
In code review we'll be hoping to see:

All tests passing
The code is elegant: every class has a clear responsibility, methods are short etc.
Reviewers will potentially be using this code review rubric. Note that referring to this rubric in advance may make the challenge somewhat easier. You should be the judge of how much challenge you want.
