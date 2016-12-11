
Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

User Story:
-----------

As a player
So I can begin my game of 10-pin bowling
I would like to start on the first frame

As a player
So I can have a target for the ball
I would like to play against 10-pins

As a player
So I can compete properly
I would like to have two attempts to knock down the ten pins

As a player
So I can play again in the next frame
I would like the pins to be refreshed back to 10pins.

As a player
So I am rewarded for hitting 10 pins at once
I would like to have a bonus for a strike

As a player
So I am rewarded for hitting 10 pins in two attempts
I would like to have a bonus for a spare.

As a player
So I can have a Challenge
I would like there to be a maximum of 10 frames.

As a player
So I can know how well I am doing
I would like to see my score.

As a player
So I can make the final frame more interesting
I would like to have three chances to knock down the pins.

Game Rules:
-----------
## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll).

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame.

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

Scoring:
--------

One point is scored for each pin knocked over, in the event of a **strike** or **spare** the following bonuses are awarded.

A player achieving a spare is awarded ten points, plus a bonus of whatever is scored with the next ball.

A player achieving a strike is awarded ten points, plus a bonus of whatever is scored with the next two balls.

e.g

Frame 1, ball 1: 10 points (strike)
Frame 2, ball 1: 3 points
Frame 3, ball 2: 6 points (strike)

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)


Further Features to Implement:
------------------------------

Create a nice interactive animated interface with jQuery.
