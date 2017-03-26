
Bowling Challenge
=================

Task: 
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## User Stories

```
As a player
So that I can keep score
I want to be able to record my score per roll
```

```
As a player
So that I can be scored accurately
I want my scores to be calculated as I play
```

```
As a player
So that I can prevent cheating
I want the rolls per frame restricted according to the rules
```

```
As a player
So that I can challenge myself
I want bonuses to be calculated accurately
```
## Progress

I found this challenge quite difficult because I couldn't initially get my head around looping through the indexes for some reason. I guess I just got so hung up on the mechonics of the game that I didn't focus enough on the logic of scoring. To understand how it could be done I looked at this repo:

https://github.com/andygout/bowling-scoresheet

and this walkthrough video: 

https://www.youtube.com/watch?v=-qA_MjNmpVU

After this I've been practising creating other basic algorithms that a friend suggested to practice solving problems in this way. Getting used to this way of thinking is definitely a skill I need to build on.
