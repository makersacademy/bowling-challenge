## Bowling Challenge - weekend 5

### Instructions:
Build an app that keeps the score of a bowling match considering:
- strikes
- spares
- 10th frame rules

### My approach

| Game | Turn | Scorecard |
|------|------|-----------|
| score | firstBowl | scorecard = [] |
| game() | secondBowl |  |
| countScore() | thirdBowl = null | |
| checkIfTenthFrame() | isStrike() | |
| enterTurn --> new Turn() | isSpare() | |

My main personal challenge was understanding bowling score rules. The program is therefore most likely not accurate for this reason.
The program keeps the score for 2 bowls at a time, looking back for spares or strikes at the 2 previous turns to calculate the bonus.
The tenth frame allows a third bowl.

The `scorecard object` is momentarily empty, as it is still confusing the way the points are printed out while calculating strikes and spares.
My `score` calculates bowls and bonus at each turn (from `Game class`).
