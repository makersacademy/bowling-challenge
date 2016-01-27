
Bowling Challenge
=================

This is a solution to Makers Academy's [Bowling Challenge](https://github.com/makersacademy/bowling-challenge).

This solution uses a test-driven approach, with feature and unit tests
implemented using [jasmine](http://jasmine.github.io).

##Installation

```
$ git clone git@github.com:Andrew47/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
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

##Author
* [Andrew Burnie](https://github.com/Andrew47)
