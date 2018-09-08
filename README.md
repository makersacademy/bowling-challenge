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

```
Scorecard
  addRoll
    adds a roll to the currentFrame
    when 2 rolls have been added
      adds the sum of the current frame to currentScore
      currentFrame is pushed into currentGame
      clears the currentFrame
      increases the frame count by 1
      if they equal 10
        sets wasLastFrameSpare to true
  when user gets a spare
    adds next roll twice to currentScore
  when user gets a stike
    will move on to next frame
    sets strike to true
    adds the next two rolls to currentScore
  on the last frame
    if the user gets a spare
      will give them a bonus turn
    if the user gets a strike
      will give them a bonus turn
  user bowls the perfect game
    score will equal 300
  user bowls a gutter game
    score will be 0
  when user enters a number higher than 10
    throws an error
```