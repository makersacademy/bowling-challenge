Bowling Challenge
=================

![Image 1](https://github.com/Djura22/bowling-challenge/blob/master/scorecard.png?raw=true)


## The Task

### The rules of bowling

```
* Each game consists of 10 frames of 2 rolls a frame

* In each frame, the bowler tries to knock down all 10 pins

* A spare is when the bowler knocks down all 10 pins in 2 rolls
    The score for that frame is 10 plus the number of pins knocked down on the next roll

* A strike is when the bowler knows down all 10 pins in the first roll of a frame
    The score for that frame is 10 plus the number of pins knocked down the the next two rolls

* If there is a spare or a strike in the last frame, the bowler gets one or two extra rolls respectively.
```

### Implementation
```
A class called bowlingGame.
```
```
A '.roll' function.
```
* I ended up extracting this method into two, '.firstRoll' and '.secondRoll' after running into issues
when implementing the bonuses for spares and strikes.
```
A simple 2-dimensional array in the constructor - this.rolls = [[], [], [], [], [], [], [], [], [], []].
```
```
A .runningTotal.
```
```
A .bonusCalc function to feed the bonus into the .runningTotal.
```
* I extracted this into an individual function for each spares and strikes.
```
A function to identify both spares and strikes and return a boolean result.
```
```
Another function for each to calculate the exact bonus by reading the 2-dimensional array.
```
```
An index for both the frame number and roll number.
```

### Examples

```
-/- -/- -/- -/- -/- -/- -/- -/- -/- -/- = 0

1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 1/1 = 20

5/5 3/- -/- -/- -/- -/- -/- -/- -/- -/- = 16

10 1/1 -/- -/- -/- -/- -/- -/- -/- -/- = 14

10 10 10 10 10 10 10 10 10 10 10 10 = 300
```

### Results

Whilst a deceivingly complicated problem to solve, I am happy with my results.

