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

### How to use

```
git clone https://github.com/EsamAl-Dabagh/bowling-challenge.git
cd bowling-challenge
```
Then open `SpecRunner.html` in your browser and open up the console. 

Create a new instance of Scorecard:

```
var scorecard = new Scorecard();
```

Add roll: 
```
scorecard.addRoll(5);
scorecard.addRoll(3);
```

View current score:
```
scorecard.currentScore;
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
| rollNumber                        |
| spare                             |
| strike                            |
| gameOver                          |
| bonusBowl                         |
+ --------------------------------- +

+ --------------------------------- +
| Scorecard Prototype               |
|                                   |
| addRoll                           |
| pushToFrame                       |
| pushFrameToGame                   |
| pushTenthFrameToGame              |
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
| rollTooHighError                  |
| frameTooHighError                 |
| checkForIllegalInputs             |
+ --------------------------------- +

```

### Tests
Test-Driven using Jasmine. To run tests:
* Open `SpecRunner.html` in your browser. 

### To-Do
* Extract functionality into separate classes:
    * Frame
    * Game
    * CalculateScore
* Fix issues with UI. 
