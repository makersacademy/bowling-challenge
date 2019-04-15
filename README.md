
# Javascript Bowling Challenge

[Getting started](#getting-started) | [To Use](#to-use) | [Task](#task) | [Approach](#approach) |
[Code Status](#code-status)

This weekend challenge is for submission to Makers Academy. The code creates a
programme which allows the user to keep track of their score for a 10 pin bowling game, and 
calculate any bonus points they may get. 

### Getting Started
1. Clone to your local machine using
  `git@github.com:LaurenQurashi/bowling-challenge.git`
2. Run `gem install bundle`
3. Run `bundle`

### To Use
Run the Bowl.js file in the console. You can use the ones on Google Chrome's Dev Tools. To test this code, use Jasmine. To see what tests it currently passes, run the bowlSpec.js file. 

### Task
-----
**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


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
------

### Approach

To combat this challenge, I used the standard practice of TDD. This involved
writing a very simple failing test, checking the error code, and doing the least
I could to pass my simple test. Repetition of this process allowed me to evolve
my programme into the current product.

To start this process, I read through the criteria and drafted up some user stories
that someone using this score card would need. I then reduced the user stories down,
one by one, to nouns and verbs, and considered how these nouns would interact with each other. Once
completed, I would formulate my objects and their functions from this list of nouns and
verbs. I then completed some in depth planning around the logic of bowling, as it's not as 
simple as it looks.

The next step would be to create the most simple test I could using Jasmine, to
ensure that this function wasn't possible, and thus work on a solution to resolve
this. By repeating this step, I soon built up the code to complete the
requirements for the first user story.

### Code Status

Currently, the code satisfies 8/9 of the tests. Due to time restrictions, I was unable 
to make this test pass before submission. The requirements remain incomplete, however basic functionality
such as the score counter is in tact. To continue solving this task, I would continue adding the 
types of bonuses to the bonus calculator. I would then implement some concluding functionality to end the game.
I invisioned this to show a summary of the game by recording each frame's data in an interface. 
