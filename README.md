# Bowling Scoresheet

This little javscript app calculates the score of a 10 pin bowling game.  It can calculate the score after each frame of bowls is entered.  It requires the player to be honest as it does not check for 'valid' frame results.

## Instructions
* clone this repo
* open SpecRunner.html in your browser
* open the browser console.
* add your results for each frame with the frameBowls(bowl1, bowl2 (optional bowl3 for 10th frame)) function.
* check your current score after each frame with the score() function

```
> game = new Game()
< Game {_score: Array[10], _frame: 1}
> game.frameBowls(10,0)
< undefined
> game.frameBowls(5,5)
< undefined
> game.score()
< 30
```

## User Stories
```
As a bowler,
So I can keep track of my game,
I'd like to enter my result after each frame.

As a bowler,
So that I know how well I did,
I'd like to see my total score for the frame.

As a bowler,
Because I'd rather drink beer than do simple math,
I'd like my score for Spares and Strikes to be automatically calculated.

As a bowler,
So that I know how well I'm doing,
I'd like to see my total score for the game.

```
