Bowling Challenge
=================

## Description

In this bowling challenge, the goal was to create a Javascript program which could count and sum the scores of a single player bowling game.

## Set Up Instructions

```
$ git clone https://github.com/bermalh/bowling-challenge.git
$ cd bowling-challenge
$ cd jasmine-standalone-2-3
$ open SpecRunner.html
```

In the console, begin by creating a new game.

```
> game = new Game();
< Game {frames: Array[0], max_frames: 10}
> game.bowl([6,3]);
< undefined
> game.bowl([10,0]);
< undefined
> game.bowl([10,0]);
< undefined
> game.bowl([5,5]);
< undefined
> game.score();
< 64
```

Add frames to the game to begin scoring, by calling `game.bowl([roll_1, roll_2])`
Score the game by calling `game.score()`
