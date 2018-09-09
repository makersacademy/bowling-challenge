# BOWLING SCORECARD CHALLENGE

### The Mission: 
Create a scorecard where the user can input the result of each roll. The scorecard will count and sum the scores for the game. 

### User Stories
```
As a keen bowler
So that I can keep track of my game
I want to input how many pins I knock down on each roll

As a keen bowler
So that I can see how well I am doing
I want to see a running total of my score. 
```

### Domain Model

```
+ --------------------------------- +
| Scorecard Constructor             |
|                                   |
| currentScore                      |
| currentFrame                      |
| currentGame                       |
| frame                             |
| gameOver                          |
| bonusBowl                         |
+ --------------------------------- +

+ --------------------------------- +
| Scorecard Prototype               |
|                                   |
| addRoll                           |
| pushFrameToGame                   |
| pushFrameToGameEnd                |
| sumFrame                          |
| endTheFrame                       |
| currentFrameSum                   |
| wasLastFrameSpare                 |
| wasLastFrameStrike                |
| calcCurrentScore                  |
| checkForSpare                     |
| checkForStrike                    |
| setSpareStatus                    |
| setStrikeStatus                   |
| theTenthFrame                     |
| endGame                           |
+ --------------------------------- +

```

### Tests
Test-Driven using Jasmine.
