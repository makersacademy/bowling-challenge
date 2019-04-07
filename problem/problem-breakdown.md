## Requirements

1. A `game` consists of **10** `frames`

2. A `frame` has **10** `pins`

3. A `frame` allows a maximum of **2** `rolls`, except the 10th frame which may allow a maximum of **3** `rolls`

4. Scoring... (to follow)





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

**Then next, look at capturing a bonus score for a frame**



## Logic models

## Data flow models



### Ed's Tips for the bowling scorecard challenge.

1. Ignore interface, focus on TDDing the logic.

2. The first test you write: a simple feature test that completes a score card with gutter balls.
```
# pseudocode

scorecard = new Scorecard()

20.times do
  scorecard.roll(0)
end

assertEquals(scorecard.total(), 0)
assertEquals(scorecard.isComplete(), true)
```