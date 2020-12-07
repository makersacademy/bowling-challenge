
Bowling Challenge
=================

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Overview:
This was an exercise in object orientated programming in Javascript, which tested our ability to translate code between languages. This code is written in Javascript and test-driven using the Jasmine framework. The user interface is written using jQuery and HTML. 

### Improvements:

If I were to continue working on this project, I would like to implement the following improvements:

-  I would like to get my two Game tests working fully using Jasmine spies. For some reason I could not get them to cooperate so they have been left as pending. 
- Despite using dependency injection to inject the frame class into new Game objects, my two classes are still tightly coupled. I would like to think of a way to rewrite my logic so that the classes are less reliant on each other. 
- I want to improve the overall stying of the scorecard interface. I couldn't quite get everything to align nicely and my scorecard columns change size when the score is being populated.
-   I would like to add a jQuery effect to hide invalid rolls during each frame.
-   I would add functionality to keep track of previous game scores.

### Diagrams and Screenshots:

![](images/Frame 1-9 logic.png)
![](images/bowling frame 10.png)
![](images/Complete Game.png)


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

