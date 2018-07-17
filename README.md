# Bowling Challenge

___

## Summary

Week 5/6 Makers Academy weekend project to develop a bowling scorecard.</br>
[Full instructions here.](https://github.com/makersacademy/bowling-challenge)
___

## Credits

Developed solo by Elishka Flint.
___

## User Stories

```
As a player
So that I can keep track of my bowling score,
I want to be able to record what happens each time I roll
```

```
As a player,
So that I know how well each frame went,
I want to be able to see the total score for the each frame
```

```
As a player,
So that I understand my complete performance.
I want to be able to see the running total for the whole game
```

___

## State of Completion

### Implemented Functionality

#### Front-end
* None yet

#### Back-end
* Tbc


### To Do List

* Extract a controller / scorer class to reduce responsibility on Scorecard
* Create clear user interface (web page)
* Ensure tests are fully isolated

___

## Technical

### Tech/Frameworks Used

Javascript, Jasmine

### Launching the Application

```
$ git clone https://github.com/elishkaflint/bowling-challenge.git
$ cd bowling-challenge
$ open index.html
```

Create a scorecard (in the console):

```
> var scorecard = new Scorecard()
```

Record a score (in the console):

```
> scorecard.recordScore(frame, roll)
```

Print frame scores and current running total:

```
> scorecard.printScores()

```

**NOTE: a complete game of ten frames has been set up under a variable called `exampleScorecard` - run `exampleScorecard.printScores()` in the console to see the final output**
___

## Learning Outcomes

### Topics Covered

Tbc

### Personal Reflection

Tbc
___
