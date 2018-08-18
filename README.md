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

* Users can add a score and a frame number and the programme will calculate the score for each frame and a running total

### To Do List

* Extract a controller / scorer class to reduce responsibility on Scorecard
* Create clear user interface (web page)
* Ensure tests are fully isolated

___

## Learning Outcomes

### Topics Covered

- Coding in Javascript
- Jasmine testing

### Personal Reflection

This was the most challenging weekend project yet, but very enjoyable. I spent a significant amount of time diagramming my solution before starting to code, which made the coding much more straightforward. Once I reached a working solution, I then did a lot of refactoring to ensure that my code is clear for others.

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
