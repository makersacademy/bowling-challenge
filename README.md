Bowling Challenge
=================
Makers Active week 6 weekend challenge: test drive a bowling scorecard.

## The Task
----------
Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Features build
-----------------
### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Further work
--------------
Incorporate the following features:
### Strikes
### Spares
### 10th frame
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
in the project repo. Replace `Google Chrome` with your preferred browser.
Currently all tests passing for a gutter game, with some edge cases also
covered.

## Technologies Used
--------------------
- Javascript:             https://www.javascript.com/
- Jasmine standalone:     https://github.com/jasmine/jasmine
- ESLint:                 https://eslint.org/
