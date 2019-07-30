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
    * frameRunningTotals = e.g. [20, 35, 45, etc]
    * totalScore
  * Methods:
    * .throw(score)

  * Differences for Frame 10
    * bonus throws, if applicable only get added to the total once, as bonus scores.
```

### Process
  * start game (sets throw counter to 20)
  * throw(user_input)
  * add score to score
  * check for previous throw a strike or spare
  * if so add this score on to the total twice and add to previous frame's running total
  * check if previous, previous throw was a strike
  * if so add this score to the total twice and add to previous previous frame's running total
  * if it was a 10, then decrease rolls remaining by 2, if not reduce by 1.

### Process example for 3 frames in pseudo-JavaScript code):
  * .throw(10)
  * throws.push(10)
  * check if previous frame strike or spare (false)
  * check if previous previous strike (false)
  * totalScore += 10
  * throw == 10, therefore reduce throwsRemaining by 2.

  * SECOND THROW
  * .throw(7)
  * throws.push(7)
  * check if previous throw strike or spare (true)
  * therefore, framesRunningTotals[i-1] += 7 (framesRunningTotals = [[17]])
  * check if previous previous strike (false)
  * totalScore += 7
  * throw != 10, therefore reduce throwsRemaining by 1

  * THIRD THROW
  * throw_two(3)
  * throws.push(3)
  * Check if previous throw a strike (no)
  * Check if previous previous throw a strike (yes)
  * therefore, framesRunningTotals[i-1] += 3 - frames = [20]
  * totalScorescore
  * throw != 10 threfore reduce throwsRemaining by 1
