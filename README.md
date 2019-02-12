Bowling Challenge
=================

My approach to the challenge:

* Use a board to list all the ideas, draft diagrams - brain storming session
* Break the problem down to basic, advanced and bonus user stories
* Test drive the basic functionality (basic user stories)
* Create basic UI (basic user stories)
* Ask for feedback
* Test drive the advanced functionality (advanced user stories)
* Create advanced UI (advanced user stories)
* Use custom CSS and JQuery to enhance UX
* Ask for feedback
* If there is time left, test drive additional / bonus stories.
* Update README file

**My basic stories:**

```
As a user,
So I can keep a track of the game
I would like to record a number of pins I've knocked on scorecard
```
```
As a user,
So I know how many points I've scored
I would like to see the score at the end of each frame
```
```
As a user,
So I know how good or bad I did this time
I would like to see the total score at the end of the game
```
```
As a user,
So I can enjoy the experience and play again
I would like to be able to use scorecard for new game
```

**My advanced stories:**

```
As a user,
When I play the whole game but never hit any pin
I want to see a 'Gutter Game'
```
```
As a user,
When I knock down all 10 pins with the first roll in a frame
Frame ends and strike bonus will be added to my score
```
```
As a user,
When I knock down 10 pins within one frame
Spare bonus will be added to my score
```

**My bonus stories:**

```
As a user,
When I roll a strike or spare in the 10th frame
I can roll up to 3 additional balls and receive due bonus
```
```
As a user,
When I roll 12 perfect strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame)
The Perfect Game gives me 300 points
```

----
## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

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
