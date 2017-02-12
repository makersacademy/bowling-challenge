Bowling scorekeeper
===
this is the week 5 weekend challengne at makers academy. Unfortunatly due to time constraints i've not managed to finish as much as i'd have liked to.

Installation
---
type
`git clone https://github.com/JamesTurnerGit/bowling-challenge` into bash

finished components
---
- scores strikes and spares
- adds balls to the correct frame

unfinished components
---
- logic for 10th frame
- front end


Usage
---
for now there is no front end, but it may be interacted with via the console
to do so :-
- open [this](bowling-challenge.html).
- open up the console in web dev tools.
- type `game = new Game`
- to add balls use `game.addBall(4)`
- you can get the score in 3 different ways
 - `score.scoreBoard(game)` returns an array of the points per frame
 - `score.runningTotal(game)` returns an array that adds together all the points as it goes
 - `score.scoreGameTotal(game)` returns the final score of the game
- to get each ball or frame you can use:-
 - `game.getFrames()`
 - `game.getFrames()[0].getBalls()`
