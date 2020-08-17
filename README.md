
Bowling Challenge
=================

## The Task

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins <u>plus bonuses</u> for strikes and spares. After every frame the 10 pins are reset.


## User story

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

1. Each player had 10 frames.
2. Each frame starts with 10 pins
3. Each frame may have 2 rolls, first roll and second roll except the last frame(10th)
which may allow max, 3 rolls
3. Scoring, there is <u>strike</u>, <u>spare</u> and <u>10th</u>

```
Enter each roll.
----------------

As a bowler, 
So I can keep track of my score,
I was a scoreboard that calculates the number of pins I knocked down at each roll.
```

|Noun   |      Verbs   | 
|----------|:-------------:|
|  Bowler  |                | 
| Frame    |    firstRollScore   |  
---

```
Calculate frame score.
----------------

As a bowler, 
So I can calculate my score for each frame,
I want to see the total score for each frame for pins I have knocked out (not strike/10 down)
```

|Noun   |      Verbs   | 
|----------|:-------------:|
|  Bowler  |              | 
| Frame  |   firstRollScore|  
| Frame  | secondRollScore| 


```
Error messages.
----------------

As a bowler, 
So my score is accurate,
I want to be prevented from entering an invalid score per roll and frame
```

*_Error: A maximum of 10 points per frame_


<br>

```
Adding both total in Frame to scorecard
---------------------------------------
As a bowler,
So I can see my score for each round,
I want to see my total for each round on the scarecard

```

|Noun   |      Verbs   | 
|----------|:-------------:|
|  Bowler  |              | 
| Frame  |   firstRollScore|  
| Frame  | secondRollScore| 
| Frame | calculateFrameScore|
|Frame | addToScorecard|
|Scorecard| frameScore|

1. Frame has actions to take 
  - calculate, 
  - add to scorecard and for the 
  - scorecard to display the total.
2. The scaorecard will hold one score for each frame, preventing the game going pass 10 frames.

<br>

```
Bonus for a Spare Frame 
-----------------------

As a bowler,
So I can see my score after a spare,
I want the bonus added to the spare frame.

```

|Noun   |      Verbs   | 
|----------|:-------------:|
|  Bowler  |              | 
| Frame  |   firstRollScore|  
| Frame  | secondRollScore| 
| Frame | calculateFrameScore|
|Frame | addToScorecard|
|Frame | calculateSpare|
|Scorecard| frameScore|
|Scorecard| frameTotalScore

<br>

```
Bonus for strike Frame 
-----------------------

As a bowler,
So I can see my score after a strike,
I want the bonus added to the strike frame.

```

|Noun   |      Verbs   | 
|----------|:-------------:|
|  Bowler  |              | 
| Frame  |   firstRollScore|  
| Frame  | secondRollScore| 
| Frame | calculateFrameScore|
|Frame | addToScorecard|
|Frame | calculateSpare|
|Frame | calculateStrike|
|Scorecard| frameScore|
|Scorecard| frameTotalScore|


```
Bonus in the 10th Frame 
-----------------------

As a bowler,
So all my score is accurately calculated,
I want to be able to play all bonus rounds in my 10th frame.

```

## Gems to Install
- [Travis CLI](https://github.com/travis-ci/travis.rb#installation)
