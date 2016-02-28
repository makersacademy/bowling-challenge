
Bowling Challenge
=================

Repo Badges:
-----------

:construction:


Implementation:
-------------

Several unsuccessful attempts were made during this challenge to implement the
logic of the game whilst keeping to SOLID and DRY coding principles. This
challenge was particularly difficult, specifically keeping track of bonus scores
for strikes and spares, as well as coding the final frame.

Initial implementation of this working version has been built upon the code
kata by David Donahue in his TDD video:
[https://www.youtube.com/watch?v=-qA_MjNmpVU](https://www.youtube.com/watch?v=-qA_MjNmpVU)

All code was written in JavaScript with Jasmine as the TDD framework. My
application consists of two objects - a BowlingGame.js and a Score.js. Included
are unit tests for both, with SpyOn being used to mock out the random behaviour
in BowlingGame. A Feature test was written to implement and drive the design
from the user stories mentioned below.


Instructions:
-----------

:construction:


User Stories: 
-----------

```
User Story 1:
As a bowler,
So that I can lose a game really badly,
I can roll a gutter game.

User Story 2:
As a bowler,
So that I can play really poorly,
I can knock down 1 pin every roll.

User Story 3:
As a bowler,
So that I can knock down all pins in one frame,
I can roll a spare.

User Story 4:
As a bowler,
So I can show off my awesome skills,
I can roll a strike.

User Story 5:
As a bowler,
So that everyone knows I'm perfect,
I can roll a perfect game with a score of 300.

User Story 6:
As a bowler,
So that I can see my score,
I can see my points after 1 strike and 2 normal rolls.

User Story 7:
As a bowler,
So that I can show my accuracy,
I can roll 3 strikes in a row.

User Story 8:
As a bowler,
So that I can see my score ingame,
I can see my score after 1 strike, 1 spare and 2 normal rolls. 
```
