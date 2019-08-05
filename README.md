# Bowling Challenge

This is my attempt at the [Makers Academy Week 5 Bowling Challenge](https://github.com/makersacademy/bowling-challenge)

## Approach
I built the bowling scorer in Javascript using TDD with Jasmine.

## Notes to a code reviewer
* If you clone the repo and open the ```index.html``` page then the program should run in your browser. Failing which, drop me a message and I can show you it in action!

* I have not put in guard clauses for a user entering an invalid throw (e.g. anything above ten for a a single throw or for a spare) as only valid throw buttons will be shown.

* Things I would have like to have done but ran out of time:

1. Refactor the code with some extraction of responsibility of the ```Game``` object which  which is very long. My original approach was to have two main objects: ```Game``` and ```Frame``` but this only seemed to over-complicate matters.

2. Make the presentation of the throws and frame total more like an actual bowling scorecard. [Example](https://www.bowlinggenius.com/)


## Domain Model/Plan

### Objects

Game:
  * Attributes:
    * throws = []
    * displayThrows (required as Strike should show as "X" and a Spare as "/")
    * throwsRemaining = 20
    * index = 0
    * frameRunningTotals = e.g. [20, 35, 45, etc]
    * totalScore
    * displayTotal (required because you should not display the score of a Strike or Spare frame which has not had the bonus rolls added yet)
    * frameNumber
  * Methods:
    * .throw(score)

```
### Algorithm in pseudo-code
  * if throwsRemaining === 0:
  - Reset all the attributes to start a new game
  * if throwsRemaining === 2:
  - Go to frame 10-throw-two procedure (see below)
  * if throwsRemaining === 1:
  - Go to frame 10-throw-three procedure (see below)
  * User makes a throw - throw(score)
  * Add score to throws array
  * Add score to Total Score
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
  -- displayTotal = total
  * add throw score to totalScore
  * unless throwsRemaining is even num OR score + throws[index -1] == 10:  (SPARE)
  - displayTotal = total
  - frameRunningTotals[index -1] += score
  * index + 1
  * if throw == 10: decrease throwsRemaining by 2, else reduce by 1.

  * Differences for Frame 10, throw 2 procedure:
    - bonus throws, if applicable, only get added to the total once, as bonus scores.
    - If this throw is not a strike or spare, end the game

  * Differences for Frame 10, throw 3 procedure:
    - this is just a bonus throw and only gets added to the total once
    - End game after this throw.
```
