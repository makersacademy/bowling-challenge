
Bowling Challenge
=================
![Build Status](https://travis-ci.org/DaveLawes/bowling-challenge.svg?branch=master)

Technologies: JavaScript, Jasmine, HTML, CSS, Ruby, RSpec, Sinatra, Capybara

## Model

The app is hosted on the Sinatra web framework with a single view (index.html). This architecture was chosen to make it extensible (e.g. a database could be added to the backend). 

The front end uses JavaScript to manage the scoring logic and dynamic display.


### JavaScript Objects

To manage the front end logic there are a number of JavaScript classes:

1. The view Controller: it controls the view and passes information to the model. The Controller utilises the jQuery library to wait for a button click event (the user submitting the number of pins knocked down).
2. The model: it controls two further classes: 
	1. The score calculator: it updates an array of scores (each integer in the array represents the total score for a frame).
	2. The turn incrementer: it determines the next frame and roll, based on the current turn and the pins knocked down.


### Flow of Information

A user enters their score and clicks button 'enter':

```
╔════════════╗  
║            ║ Controller listens for button click event
║ Controller ║ Controller extracts number entered      
║            ║ Controller passes number to model
╚════════════╝
      |
      |
      |
╔════════════╗
║            ║ Tells ScoreCalculator to add current score, then
║    Model   ║ Tells ScoreCalculator to add strikes score, then
║            ║ Tells ScoreCalculator to add spares score
╚════════════╝
      |
      |
      |                
      |                    ╔════════════╗       
      |------------------->║            ║ .calculateTotal      
      |                    ║  ScoreCalc ║ .updateArray 
      |                    ║            ║       
      |                    ╚════════════╝ 
      |
╔════════════╗
║            ║ Tells TurnIncrementer to:
║    Model   ║   - increment turn if no strike, or
║            ║   - increment frame if strike
╚════════════╝                                
      |                    ╔════════════╗
      |                    ║            ║ .incrementTurn            
      |------------------->║  TurnIncr  ║ .incrementFrame
                           ║            ║
                           ╚════════════╝
                                                 
```


## The Task



### User Stories

```
As an avid bowler
So I can keep track of my rolls
I'd like to be able to enter my roll on a web interface

As an avid bowler
So I can keep track of my score
I'd like my web interface to update my current score as I input my rolls

As an avid bowler
So I can be sure my score is correct
I'd like my web interface to follow standard bowling rules when generating the score

As an avid bowler
So that I follow the game correctly
I'd like my web interface to indicate my progress through the game

-- IF I HAVE TIME --

As an avid bowler
So that I can keep track of my progress
I'd like my game to be saved in a database

As an avid bowler
So that I can keep track of my progress
I'd like my past games to be viewable through the web interface
```


## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

