Makers Weekend challenge: Bowling Challenge
===============================================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


User stories:
-----

```
As a scorekeeper,
I want to be able to store the points from each throw in a scorecard,
so I don't have to remember each throw.

As a scorekeeper,
I want the score to be calculated automatically,
so that it is more convenient and I don't make any mistakes.

As a scorekeeper,
I want to be able to see what my total score is as I progress,
so that I can know how the player is doing.

As a scorekeeper,
I want to be informed when the game is over,
so that I know when to announce the total score.


As a scorekeeper,
I want to be able to see the scorecard in a clear and easily read manner,
so that I am not confused by reading it.
```

Classes and roles:
-----

* Game: A game holds the frame until the tenth frame, when it is reset
* Frame: A frame ensures that the rules are applied on a frame level. It is either a normal or a special frame(10th frame), and stores the rolls
* Score calculator: The score calculator is responsible for calculating the score based on the rules logic


Installation:
-----
```
*Clone this repo
*Open up index.html
*Play
```

Screenshots:
-----
Overview
![Overview](/docs/screenshot/Overview.png)

Second roll
![Second_roll](/docs/screenshot/Second-roll.png)

Example of game result
![Result](/docs/screenshot/result1.png)

Perfect game
![Perfect_game](/docs/screenshot/perfectgame.png)
