# Bowling Challenge

## Tasks

### General

This task is quite intensive and a lot of thought went into it. Many questions were asked? Such as:
```
1. How to calculate the scores?
2. How to store each roll of the ball?
3. How to score each frame?
4. How to take into account strikes and spares?
5. How to account for the 10th frame problem?
```
This meant I had to plan how I intended to store all of this information before attempting to start coding.

#### General Solutions

1. This required logic to be able to calculate what score would be produced from each frame. You need to know: if a strike was scored, if a spare was scored or if it was just a regular frame? You then needed to total these to keep track of the current score.
2. I thought long and hard about this one and the obvious solution appeared to be an array. This led to more problems though. What kind of array? How would you obtain information from the array to calculate the scores properly? This would require some value to be able to select key rolls from the array and use them to calculate scores. This was the basis for my ```frameIndex```.
3. This came in the form of the above solution to just track the score. Use the frame to index the position in the array of rolls.
4. See below for spare and strike response.
5. See below for more in-depth response about 10th frame.

### Gutter Game
```
A Gutter Game is when the player never hits a pin (20 zero scores).
```
#### Solution
* Have a method in which you can dictate how many pins were knocked down (or not knocked down on this occasion)
* ```game.roll(0)```
* Repeat 0 pins being knocked down 20 times and check the score is still 0

### Spares
```
The player has a spare if the knocks down all 10 pins with the two
rolls of a frame. The bonus for that frame is the number of pins
knocked down by the next roll (first roll of next frame).
```
#### Solution
* Spares would require a bonus of the next ball. It was concluded that a ```spareBonus``` would need to be applied in order to calculate the value of the spare frame
* Using the aforementioned ```roll(pin)```, get a spare and roll a 3rd ball
* The score for that frame should equal the 3 rolls

### Strikes
```
The player has a strike if he knocks down all 10 pins with the first
roll in a frame. The frame ends immediately (since there are no pins
left for a second roll). The bonus for that frame is the number of
pins knocked down by the next two rolls. That would be the next
frame, unless the player rolls another strike.
```
#### Solution
* Similarly to the spare only this time score 10 with the first ball
* This would also require a ```strikeBonus``` in order to calculate the total points from a strike frame
* Roll 2 more balls and the score from the strike frame should equal the 3 balls total

### 10th frame
```
If the player rolls a strike or spare in the 10th frame they can roll
the additional balls for the bonus. But they can never roll more than
3 balls in the 10th frame. The additional rolls only count for the
bonus not for the regular frame count.
```
#### Solution
* Due to how the spare and strikes are calculated (using an additional 3rd roll) this will work automatically

### Perfect Game
```
A Perfect Game is when the player rolls 12 strikes (10 regular strikes
and 2 strikes for the bonus in the 10th frame). The Perfect Game
scores 300 points.
```
#### Solution
* Similarly to the gutter game, only this time using ```game.roll(10)``` to simulate the strikes
* Repeat this 12 times and you should get a score of 300
