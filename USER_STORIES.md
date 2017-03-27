# User/Player/Interface

As a player,
So that I can play bowling,
I want to be able to see and count my score.

As a player,
So that I can keep track of my score,
I want to be able to enter how many pins I've knocked down.

(extra feature)
As a player,
so that I can be happy with my score,
I want to be able to see my name.

As a player,
so that I can understand my scoring,
I want to see a X if I've scored a strike.

As a player,
so that I can understand my scoring,
I want to see a / if I've scored a spare.

As a player,
so that I can understand my scoring,
I want to see a - if I've not hit any pins during the frame.

# Game

1. As a game,
so that the game is played properly,
A game has a current score set as 0 initially.

2. As a game,
so that the game can do calculations,
I want have an empty array for accepting messages from frames.

3. As a game,
So that the player can see the scores calculated,
I want to add the number of pins knocked down in each frame and keep a current score.

4. As a game,
So that the scores are calculated properly,
If the player scores a strike, the score in the following frame is doubled.

5. As a game,
so that the scores are calculated properly,
If a roll is a spare, the value of the next first roll is added.

As a game,
so that I can play another game of bowling,
I want to be able to reset the game

(Edge Casing)
As a game,
So that the player can play the game properly,
The max number of rolls in the game is 21.

# Frame

As a frame,
so that the game is played properly,
I want to know if the player gets one rolls or two rolls depending if they get a strike or not.


(Edge Casing)
As a frame
so that the game is played properly,
I want to have a maximum of two throws per frame.

# Last frame

As a last frame,
so that the game is played properly,
An extra throw is given if you score a strike or spare in that frame.

As a last frame,
so that the game is played properly,
No extra throw is given if the player fails to roll a spare or a strike.
