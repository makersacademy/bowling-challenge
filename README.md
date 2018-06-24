
Bowling Challenge
=================


## The Task

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

## Approach

### Methodology

I started off going through the rules of bowling and listing out all the variables I believed would be needed to build the program and how they would be used during all eventual scenarios.  My next step was to diagram out the domain model.  I believed I should have a Game function, Frame function and Final Frame function.  I then set out to build the program while test driving first.  I began to build this with only a vague idea of how the bonus system would work and how the game would incorporate the frame and final frame.

After the first day I was happy with some of the functionality but decided that I would need to rethink the bonus system and how to manage the frames.  I decided it would be easier to have everything in one function and worked out how to implement the bonuses so started again but using some of the basic functionality I had built previously.  I soon got the system to work roughly how I wanted with some minor tweaks needed to get the functionality to work exactly how I wanted.

I wanted the score for each frame to add all the previous frames and show update the score even if the frame is not complete as I believe this is how a bowling scorecard should work.  I had some bugs while getting this to work and I got a lot of useful experience getting viability using console.log and narrowing down the functionality commenting out lines of code.  This was also helped by my TDD approach.

I had planned to build a front-end interactive page for this however I run out of time.  I would also have liked to extract functions to be more in keeping with good object orientated practices which I have learned on the course.  I found the whole process was a great learning experience, especially in the importance of planning and diagramming everything before building any functionality.

## Technologies

The functionality was built using Javascript and tests was preformed using Jasmine which has 34 tests all passing.  Eslint was used as a linter. The tests can be run by opening the SpecRunner.html file in the browser.

## Functionality

An example of of how the code runs in the console below:

```
game = new Game()

game.bowl(5)
game.bowl(5)
game.bowl(10)
game.bowl(10)
game.bowl(5)

game.score(1)
20

game.score(2)
40

game.score(3)
50

game.score(4)
55

game.score(10)
55
```
