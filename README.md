
Bowling Challenge
=================

##Installation

```
git clone git@github.com:Andrew47/bowling-challenge.git
cd bowling-challenge
open SpecRunner.html
```
Then open up the console.

##Scoring a Game

First create a new game:

```
var game = new Game();
```

When a player hits `n` pins in a round:

```
game.pinsHit(n);
```

To determine the score:

```
game.getScore();
```
