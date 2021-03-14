# Theory of Operation

to add a score:
```terminal
Score.addScore(frame, score);
```
addScore will return the maximum value of the next score. This is meant to advise the UI class on how much to limit the next number to input.
```
score.addscore(1, 10) // returns 0, because it's a strike

score.addscore(2, 3)  // returns 7
score.addscore(2, 4)  // returns 0, because frame is complete


```