# Analysis Discussions

[README file](../README.md)

[Domain Model](./domain_model.md)

[Interface Design](./interface.md)

## Specification
Produce an application that can manage a scorecard for 10 pin bowling
```
- Count and sum the scores of a bowling game for one player (in JavaScript).
  - A bowling game consists of 10 frames in which the player tries to knock down the 10 pins.
  - In every frame the player can roll one or two times.
    - in the 10th frame there may be bonus rolls
  - The actual number depends on strikes and spares.
  - The score of a frame is the number of knocked down pins plus bonuses for strikes and spares.
  - After every frame the 10 pins are reset.
```

## User Stories
### User Story 1
```
As a bowler,
So that I can track my score,
I would like to be able to manage a 10Pin bowling _scorecard_.
```

### User Story 2
```
As a bowler,
so that I can track my score,
I would like to be able to enter my scores in the scorecard
```

### User Story 3
```
As a bowler,
So that I can see my frame progress,
I would like to see my current frame score.
```

### User Story 4
```
As a bowler,
So that I can see my game progress,
I would like to see my current game score
```

### User Story 5
```
As a bowler,
So that I can better visualise my game,
I would like the scorecard to be available on the web
```

### User Story 6
```
As a bowler,
so that I can minimise errors,
I would like the score entry point to automatically move to the right place for the next score entry.
```

### User Story 7
```
As a novice bowler,
so that I can understand the game scoring better,
I would like there to be notes against each frame about the scoring process.
```

### User Story 8
```
As an expert bowler,
so that I can concentrate on the game,
I would like there to be only comments for strikes and spares (celebrations)
```

## Assumptions
- There is only need to track one player for one whole 10pin bowling game
- There is no need to retain scores / scorecards for historic review
- There is no need to retain scores / scorecards across different browser sessions
  - the session will be opened for the game and maintained until the end.
- There is no interface standards that need to be incorporated.
- There are no mandatory process steps that need to be incorporated, outside the scoring rules for the game (given).
- There is no requirement to manage score checking (outside the rules of the game).
- There is no reason to collect user information
  - There may be value in personalising the experience for the user.
- There is no need to manage the 'export' of the scorecard in any form
- There is no requirement to 'print' the scorecard.
- There is value in a web Interface
  - this can be introduced at any time in the process, as development requires
  - chrome will be the default browser interface.
- there are no game variations, or different scoring rules needed to be accommodated
  - there are no anticipated needs to modify (or manage) the ruleset in the near future.
