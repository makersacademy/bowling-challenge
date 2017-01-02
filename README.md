
# Bowling Challenge

This is a JavaScript-based [ten-pin bowling](https://en.wikipedia.org/wiki/Ten-pin_bowling) score calculator for a single player.

## Approach
At present, this app consists of only one 'class' of object: the bowling calculator.

### Future Development

This class has too much responsibility at present and a [refactor to separate classes](https://github.com/oscar-barlow/bowling-challenge/issues/6), with the bowling calculator as the manager class, is necessary.

Additionally, while jQuery has started being used to develop an interface, much more needs to be done; there is no practical way for a user to interact with the app.

Finally, no special rules are applied to the 10th turn. To be a MVP, the app should apply these rules.

## How to Install
Clone or download this repo to your computer.

## Getting Started
Open `/jasmine/SpecRunner.html` in your browser.

This runs the test suite for the app shows you the publicly methods available, and describes their expected behaviour. Then open up the Developer Console in your browser and run the following:

`calculator = new BowlingCalculator();`

This will allow you to interact with the app using the command line.
