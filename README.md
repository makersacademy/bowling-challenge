![Bowling](https://github.com/Mornevanzyl/bowling-challenge/blob/master/images/bowling_score.png?raw=true)

# Bowling Challenge - JS

Bowling Challenge is a collection of Javascript classes and unit tests developed to satisfy the end-of-unit requirements of a challenge set during week 6 of the Makers Academy bootcamp.

## Running Tests

```bash
git clone git@github.com:Mornevanzyl/bowling-challenge.git

open SpecRunner.html
```

## Usage

```JS
open index.html # in your browser

# Use the web interface or,
# Use the console in Chrome Developer Tools

game = new Game # returns instance of Game class

game.roll(3) # registers a roll of 3 pins
game.roll(7) # completes frame, registers a spare
game.roll(10) # registers a strike
```

## Approach
I followed a [TDD](https://bit.ly/3q65B8q) approach to satisfying the requirements of this challenge. A systematic and iterative cycle of interpreting a series of user stories and developing feature tests/unit tests/feature implmentation/refactoring.

A review of the user specification revealed that at this stage, the application is simply a [ten-pin bowling](https://en.wikipedia.org/wiki/Ten-pin_bowling) scoring app.

The ```Frame``` class handles most of the ```rolls``` and associated controls, wilst the ```Game``` class manages the frames and scoring.

## Suggested Improvements
This section outlines known/identified areas of improvement/optimisation that serve as input to future development of this project.

- Extend to multi-player functionality.

- Add responsiveness to web-interface.

##  Acknowledgements/Appreciations
- I'd like to thank the academy...
