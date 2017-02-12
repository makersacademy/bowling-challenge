
Bowling Challenge
=================

Task:
-----
The scope is to write a score keeper library for a ten pin bowling game.
It has to account for all the bonuses and extrUSER STORY
As a player can get when scoring spares or strikes.
Optionally, it has to provide an interface with jQuery

Installation:
-----
JUST RUN IT!

User stories:
-----
The game of ten pin bowling can be (roughly) described with these user stories:

EPIC:
USER STORY 1
As a player
So that I can track the game progress
I want to keep the game scoring

USER STORY 2
As a player
So I can play my game
I want my scoreboard to be created with 10 frames

USER STORY 3
As a player
In order to play a new frame
I want ten new pins to be created on each frame

USER STORY 4
As a player
So I can play every frame
I want to roll 2 times for each frame

USER STORY 5
As a player
So I can score points
I want to count how many pins I knocked down on each roll in one frame
CRITERIA: cannot knock down more than standing pins

USER STORY 6
As a player
In order to perform a strike
I want my frame to end when all 10 pins are knocked down

USER STORY 7
As a player,
In order to get the strike bonus,
I want my bonus to be calculated as the number of pins knocked down by the next two rolls.

USER STORY 8
As a player,
In order to get the spare bonus,
I want my bonus to be calculated as the number of pins knocked down by the next roll

USER STORY 9
As a player,
In order to get the bonus rolls,
when a strike or a spare occured in the 10th frame.
I want to be able to roll up to a max of 3 times total in the frame.

USER STORY 10
As a player,
In order to get my bonus roll points calculated correctly,
I want my bonus roll to add points only to the bonus (not to the regular count).

USER STORY 11
As a player,
In order to enjoy my game,
I want a nice interface for the scoreboard.
It will passess if take particoular care of displaying strike, spare, gutter game (no scores), perfect game (all strikes, 300 points).
EPIC: 4h

Domain Model:
-----
These user stories can be (roughly) translated in the following model:

Domain | Actions
--- | ---
scoreboard | createFrames
frame | createPins
frame | createRolls
roll | knockedDownPins
frame | strike
bonus | calculate
strike |  
spare |  
frame | addBonusRoll
