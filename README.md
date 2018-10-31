# Bowling Challenge #

## Specification ##
* A game consists of 10 frames.
* The player tries to knock down 10 pins in each frame. The score of each frame is the number of knocked down pins.
* In each frame the player can bowl 1 or 2 times.
* After each frame, the 10 pins are reset.
* Bonus points can be awarded for strikes and spares.
* A strike occurs if the player knocks down all 10 pins within the first roll in a frame.
* The bonus for a strike is the number of pins knocked down in the next two rolls, unless the player rolls another strike.
* A spare occurs if the player knocks down all 10 pins within the two rolls of a frame.
* The bonus for a spare is the number of pins knocked down in the next roll (first roll of the next frame).
* The 10th frame allows the player an extra roll if they get a strike or spare in the first two rolls.
* If the player rolls a strike or spare on the 10th frame, they can roll the additional balls for a bonus.
* A gutter game occurs when the player never hits a pin (20 zero scores).
* A perfect game occurs when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame).
* A perfect game scores 300 points.

## User Stories ##
```
As a player
So I can play a full game of bowling
I'd like the game to consist of 10 frames

As a player
So I can keep track of my score
I'd like to record a number of knocked down pins for each roll

As a player
So I don't record my score incorrectly
I'd like for the number of knocked down pins to be limited to 10

As a player
So I can keep track of my score across rolls of a frame
I'd like each frame to be limited to 2 rolls

As a player
So I can continue playing
I'd like for the number of available pins to be reset on each frame

As a player
So I can earn extra points
I'd like a strike to occur if all 10 pins are knocked down in the first roll

As a player
So I can earn extra points
I'd like bonus points to be awarded for a strike

As a player
So I can earn extra points
I'd like a spare to occur if all 10 pins are knocked down within the two rolls of a frame

As a player
So I can earn extra points
I'd like bonus points to be awarded for a spare
