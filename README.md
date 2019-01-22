Bowling Challenge
=================
Makers Active week 6 weekend challenge: test drive a bowling scorecard.

## The Task
----------
Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Features built
-----------------
### Gutter Game

The scoredcard records a total of zero when a player throws 20 gutter balls

### Scoring Rules Implemented

- Only record scores of 0-10
- Non numbers and numbers not in the range 0-10 are not accepted
- Only 0 can be recorded following a strike
- Only 2 rolls can be recorded per frame

### Calculate bonus points from after Strikes & Spares

The scorecard keeps track off bonus points due to Strikes & Spares

### Calculate total

The scorecard can calculate the total score of a player's game

### Game complete

A player cannot record more than 10 frames per scorecard

## Further work
--------------
Incorporate the following features:
### 10th frame bonus rolls
### Perfect Game

## More info
-----------
In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling


![Ten Pin Score Example](images/example_ten_pin_scoring.png)

## Requirements and Setup
-------------------------
1. Your chosen browser, two reccommendations are Google Chrome/Mozella Firefox

2. Clone the repo:

```
git clone git@github.com:CKKH/bowling-challenge.git
cd bowling-challenge
```

## Testing
----------
To view the test results run `open -a "Google Chrome" SpecRunner.html` whilst
in the project repo. Replace `Google Chrome` with your preferred browser. All tests 
passing.

## Technologies Used
--------------------
- Javascript:             https://www.javascript.com/
- Jasmine standalone:     https://github.com/jasmine/jasmine
- ESLint:                 https://eslint.org/
- Google Chrome:          https://www.google.com/chrome/
