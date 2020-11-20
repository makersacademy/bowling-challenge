# Domain Model

[README file](../README.md)

[Analysis Discussion](./analysis.md)

[Interface Design](./interface.md)

## User Story 1
```
As a bowler,
So that I can track my score,
I would like to be able to manage a 10Pin bowling _scorecard_.
```
### Objects:
- scorecard (framework)

### Methods:
- build with later user stories
### Properties:
### Interface:
- non at this stage

## User Story 2
```
As a bowler,
so that I can track my score,
I would like to be able to enter my scores in the scorecard
```
### Objects:
### Methods:
- enterScore()
### Properties:
### Interface:
- non at this stage

## User Story 3
```
As a bowler,
So that I can see my frame progress,
I would like to see my current frame score.
```
### Objects:
- frameScore (possible)

### Methods:
- viewFrameScore()

### Properties:
### Interface:
- non at this stage

## User Story 4
```
As a bowler,
So that I can see my game progress,
I would like to see my current game score
```
### Objects:
- gameScore (possible)
### Methods:
- viewGameScore()
### Properties:
### Interface:
- non at this stage

## User Story 5
```
As a bowler,
So that I can better visualise my game,
I would like the scorecard to be available on the web
```
### Objects:
### Methods:
### Properties:
### Interface:
- browser enabled
  - visualisation of the scorecard with score entry and frame/game totals

## User Story 6
```
As a bowler,
so that I can minimise errors,
I would like the score entry point to automatically move to the right place for the next score entry.
```
### Objects:
### Methods:
### Properties:
### Interface:
- manage the cursor movement on entry, to minimise user entry requirements

## User Story 7
```
As a novice bowler,
so that I can understand the game scoring better,
I would like there to be notes against each frame about the scoring process.
```
### Objects:
### Methods:
### Properties:
### Interface:
- add notes column to interface to show score workings

## User Story 8
```
As an expert bowler,
so that I can concentrate on the game,
I would like there to be only comments for strikes and spares (celebrations)
```
### Objects:
### Methods:
### Properties:
### Interface:
- add button to switch 'notes' mode
  - add celebrations for spare / strike
  - possible celebration for high game scoring 
