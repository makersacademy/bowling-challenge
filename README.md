yes I know I should seperate the totals into a new class, but i'm tired and i don't want to.

# Usage
### Creating the player
The Score class in score.js keeps the score for one player. The imagined implementation is a UI class that holds all the score classes for all the players, that will then cycle through them all for each game.

To create a new player:
```javascript
score = new Score("The Dude");
```
### Adding scores
to add a score:
```javascript
score.addScore(frame, score);
```
addScore will return the maximum value of the next score. This is meant to advise the UI class on how much to limit the next number to input.
```javascript
score.addscore(1, 10) // returns 0, because it's a strike

score.addscore(2, 3)  // returns 7
score.addscore(2, 4)  // returns 0, because frame is complete

...

score.addscore(10, 10) // returns 10, because the player gets two more strikes for their last round
score.addscore(10, 10) // returns 10, because the player has one more roll for their last frame
score.addscore(10, 3) // returns 0, because it's the end of the game
```
### Getting the scores
to add up all the scores:
```javascript
score.total()
```
total will return current total score, and can be run at any time. it will also fill out `score.totalsCard`, a scorecard that shows the running totals for each frame.

In short, I built the backend for [this website.](https://www.bowlinggenius.com/)