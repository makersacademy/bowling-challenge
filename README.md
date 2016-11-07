###Bowling Game Score Counter###

Elizabeth Venner

_To use_

Fork and clone this repo.
cd into this repo in the command line.
```
$ open SpecRunner.html
  ```
Run the program in the console, eg:

```JavaScript
game = new BowlingGame();
BowlingGame {LOWESTSCORE: 0, HIGHESTSCORE: 270, MAXFRAMES: 10, score: 0, noOfFrames: Array[0]}
frame = new Frame();
Frame {MAXSCORE: 10, MAXROLLS: 2, rollCounter: 0, rollsTotal: 0, roll1: 0…}
frame.recordRolls(1);
undefined
frame.recordRolls(7);
undefined
game.addFrame(frame);
undefined
console.log(game);
VM286:1 BowlingGame {LOWESTSCORE: 0, HIGHESTSCORE: 270, MAXFRAMES: 10, score: 8, noOfFrames: Array[1]}
undefined
```  
