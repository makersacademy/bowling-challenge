Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.


### Optional Extra

Create a nice interactive animated interface with jQuery.

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
I want to see what the total score is after each throw,
so that I can know how the player is doing.

As a scorekeeper,
I want to be informed when the set is over,
so that I know when to announce the total score.

As a scorekeeper,
I want to know if a set was either a perfect game or a gutter game,
so that I can inform the player.

As a scorekeeper,
I want to be able to see the scorecard in a clear and easily read manner,
so that I am not confused by reading it.
```

Classes and roles:
-----

* A game holds 10 frames, and announces the results
<!-- * A set consists of ten frames of throws -->
* A frame holds each of the throws
* A throw knows whether it is a normal throw or a special throws
* A scorecard keeps the scoring of each throw and the total
* The score-calculator calculates the total score
