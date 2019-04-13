## Requirements

1. A `game` consists of **10** `frames`

2. A `frame` has **10** `pins`

3. A `frame` allows a maximum of **2** `rolls`, except the 10th frame which may allow a maximum of **3** `rolls`

4. [Scoring rules](https://github.com/mattTea/bowling-challenge/blob/master/README.md#rules), including `strikes`, `spares` and the 10th frame


## User stories

```
User story: Enter roll score
------------------------------

As a player,
so that I don't have to remember my score,
I want to enter the number of pins I knock down with a single roll into a scorecard.
```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore

------

```
User story: Calculate simple frame score
------------------------------------------

As a player,
so that I don't have to calculate my score,
I want to see my total score for a frame (when I have not knocked all pins down).
```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore
Frame | enterSecondRollScore
Frame | calculateFrameScore

------

```
User story: Prevent invalid scores
------------------------------------

As a player,
so that scores are accurate,
I want to be prevented from entering invalid scores per roll and frame.
```

------

```
User story: Add frames to scorecard
-----------------------------------

As a player,
so that I can see the current progress of the game,
I want each frame to be added to the scorecard as it is started.
```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore
Frame | enterSecondRollScore
Frame | calculateFrameScore
Frame | addToScorecard
Scorecard | captureFrame

1. Adds a new frame to a scorecard
2. Prevents more than 10 frames in a scorecard
3. Completes scorecard when 10th frame added

------

```
User story: Calculate running total for game
--------------------------------------------

As a player,
so that I don't have to calculate a running total,
I want to see my running total score for the game.

```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore
Frame | enterSecondRollScore
Frame | calculateFrameScore
Frame | addToScorecard
Scorecard | captureFrame
Scorecard | calculateTotalScore

1. Sum frame totals at any point in game

------

```
User story: Capture bonus score for spare frame
-----------------------------------------------

As a player,
so that I see the accurate score after a spare,
I want my bonus added to my spare frame.
```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore
Frame | enterSecondRollScore
Frame | calculateFrameScore
Frame | addToScorecard
Frame | calculateSpareBonus
Scorecard | captureFrame
Scorecard | calculateTotalScore

1. Check to see if previous frame scored a spare
2. If previous frame scored a spare add first roll of current frame to bonusScore of previous frame.

------

```
User story: Capture bonus score for strike frame
------------------------------------------------

As a player,
so that I see the accurate score after a strike,
I want my bonus added to my strike frame.
```

Objects | Messages
--------------- | --------------------
Player | 
Frame | enterFirstRollScore
Frame | enterSecondRollScore
Frame | calculateFrameScore
Frame | addToScorecard
Frame | calculateSpareBonus
Frame | calculateStrikeBonus
Scorecard | captureFrame
Scorecard | calculateTotalScore

1. Check to see if previous frame scored a strike (after second frame roll)
  - If yes, add both roll scores of current frame to bonus of previous frame

2. Check to see if previous frame scored a strike (after first frame roll)
  - If yes, was the frame before that one a strike?
  - If yes, add current frame (1st roll) score and prev frame strike score (10) to bonus of prev.prev[index-2] frame

------

_(TODO...)_
```
User story: Capture bonuses in 10th frame
-----------------------------------------

As a player,
so that my final score is correctly captured,
I want to be able to play and record bonus rolls in the 10th frame. 
```

1. Determine if player is in the 10th frame
2. If strike in 10th frame 2 extra rolls are given and scores added only to 10th frame bonusScore
3. If spare in 10th frame 1 extra roll is given and score added only to 10th frame bonusScore
4. Perfect game = 300
5. In case of 9th frame strike and 10th frame strike only 10 bonus points are added to 9th frame bonus (usually next 2 rolls would be added to 9th frame strike bonus)