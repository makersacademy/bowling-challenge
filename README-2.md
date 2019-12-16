# Bowling Challenge

This project models a bowling game scorecard, tracking and calculating the scores of a one-player bowling game in JavaScript.

## Contents

- [Still to be completed](#still-to-be-completed)
- [Features](#features)
- [Code style](#code-style)
- [Tech used](#tech-used)
- [Getting started](#getting-started)
- [Running the tests](#running-the-tests)
  - [Test coverage](#test-coverage)

## Still to be completed

- **Refactoring - perhaps extracting into multiple classes**  
- **Web interface**  
- **CSS styling**  

## Features
- Add player name
- Input the number of pins you knocked down and the score is automatically tallied

## Code style
- OOD
- TDD
- AJAX

## Tech used

- JavaScript
- Jasmine
- jQuery
- HTML  
- CSS

## Getting started

To open in web browser, run ```open index.html``` in the terminal in the bowling-challenge directory.

## Running the tests  

To run tests in the web browser, run ```open SpecRunner.html``` in the terminal in the bowling-challenge directory.

### Test coverage  

#### Unit tests
- Bowling
  - starts with a total score of 0
  - starts with an empty score sheet
  - adds note of 'Bad luck' if no pins are knocked down
- On the first frame and first roll
  - can add number of pins knocked down to the scoresheet
  - moves on to the next roll after the turn has been taken
- On the first frame and second roll
  - adds the new total score to the score sheet once second roll has been taken
- Strike
  - skips forward to next frame
  - adds a note of 'Strike'
  - adds the bonus score after the next frame is complete
  - adds the new total score after next frame is complete
- Spare
  - adds the bonus score after the next roll is complete
  - adds the new total score after next frame is complete
- 10th frame
  - adds a third roll if a strike is rolled
  - adds a third roll if a spare is rolled
  - does not exceed 3 rolls total when strike
  - does not exceed 3 rolls total when spare

#### Feature tests

- A perfect game
  - ends with a score of 300 when all rolls are strikes  

- A gutter game
  - ends with a score of 0 when all rolls knocked over 0 pins

- A varied game of bowling
  - starts with a total score of 0
  - 1st roll, 1st frame: hits 1 pin
  - 2nd roll, 1st frame: hits 4 pins
  - 1st roll, 2nd frame: hits 4 pins
  - 2nd roll, 2nd frame: hits 5 pins
  - 1st roll, 3rd frame: hits 6 pins
  - 2nd roll, 3rd frame: hits 4 pins and gets a spare
  - 1st roll, 4th frame: hits 5 pins and calculates bonus from previous spare
  - 2nd roll, 4th frame: hits 5 pins and gets another spare
  - 1st roll, 5th frame: hits 10 pins, gets a strike, calculates bonus from previous spare, and skips 2nd roll
  - 2nd roll, 5th frame: has been skipped due to previous strike
  - 1st roll, 6th frame: hits 0 pins
  - 2nd roll, 6th frame: hits 1 pin and calculates bonus from previous strike
  - 1st roll, 7th frame: hits 10 pins, gets a strike and skips to next frame
  - 2nd roll, 7th frame: has been skipped due to previous strike
  - 1st roll, 8th frame: hits 10 pins, gets another strike and calculates bonus to previous strike
  - 2nd roll, 8th frame: has been skipped due to previous strike
  - 1st roll, 9th frame: hits 8 pins
  - 2nd roll, 9th frame: hits 2 pins, gets a spare, and calculates bonus for previous strike
  - 1st roll, 10th frame: hits 3 pins and calculates bonus for previous spare
  - 2nd roll, 10th frame: hits 4 pins and the game ends with a 121 total score
