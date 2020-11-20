# Domain Model

[README file](../README.md)

[Analysis Discussion](./analysis.md)

[Interface Design](./interface.md)

## Final Design Intent
- treat frames, game and scorecard as separate objects (classes)
- use extension and inheritance
  - scorecard <- gameScore <- frameScore
- this structure should enable each frame to be managed as an object
  - be contained in a game
    - to enable a scorecard to be produced.

- opportunity to prefabricate the whole card, or build 'on the fly'
  - each frame can be identical, but managed differently
    - strike / spare scoring
    - 10th frame bonus
  - the GameScore can then have an array of frames to generate the total, as this is lagging due to strikes / spares.
    - yet the framescore is always retained / updated as the game progresses.

- Development decision to be made if frame will contain the 'frameScore', or just the 'pinScore'
  - default is 'pinscore', as the complexities are a feature of the game, not frame

- Development decision about strike / spare representation ... should this be retained in the frameScore (pinscore) object as an 'X' or '/'
  - this might make processing easier / enable easier triggers
  - might make interface management easier (no conversion needed)
  - might make computation harder ... unless managed (as it should be) at gameScore level.
  - initial decision - include symbols.



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
