# Bowling Challenge

This is my attempt at the [Makers Academy Week 5 Bowling Challenge](https://github.com/makersacademy/bowling-challenge)

## Approach

I built the bowling scorer in Javascript using TDD.  

## Domain Model/Plan

### Objects

Game:
  * Attributes:
    * throws = []
    * throwsRemaining = 20
    * index = 0
    * frameRunningTotals = e.g. [20, 35, 45, etc]
    * totalScore
    * showTotal
  * Methods:
    * .throw(score)

```

### Process in psudeo-code
  * if throwsRemaining === 0:
  - Reset all the attributes to start a new game
  * if throwsRemaining === 2:
  - Go to frame 10 procedure (see below)
  * throw(score)
  * throws.push(score)
  * totalScore += score
  * if throwsRemaining is even num:
  - frameRunningTotals.push(score)
  * else:
  - frameRunningTotals[index -1] += score
  * if previous throw == 10: (STRIKE)
  - totalScore += score
  - frameRunningTotals[index - 1] += score
  - if previous, previous throw == 10: (STRIKE)
  -- totalScore += score
  --  frameRunningTotals[index -2] += score
  * else:
  - if throwsRemaining is even num:
  -- if throws[index -2] + throws[index -1] == 10: (SPARE)
  -- totalScore += score
  -- frameRunningTotals[index - 1] += score
  -- showTotal = total
  * add throw score to totalScore
  * unless throwsRemaining is even num OR score + throws[index -1] == 10:  (SPARE)
  - showTotal = total
  - frameRunningTotals[index -1] += score
  * index + 1
  * if throw == 10: decrease throwsRemaining by 2, else reduce by 1.

  * Differences for Frame 10 procedure:
    * bonus throws, if applicable, only get added to the total once, as bonus scores.

### Process example for 3 frames in pseudo-JavaScript code):
```
