# Bowling Challenge in Ruby
[![Test](https://github.com/ruiined/bowling-challenge/actions/workflows/test.yml/badge.svg)](https://github.com/ruiined/bowling-challenge/actions/workflows/test.yml)
[![codecov](https://codecov.io/gh/ruiined/bowling-challenge/branch/main/graph/badge.svg?token=4OLK0WM7T4)](https://codecov.io/gh/ruiined/bowling-challenge)

## Overview
Bowling challenge provided by [Makers](https://github.com/makersacademy/bowling-challenge). This challenge was attempted in Ruby before [here](https://github.com/ruiined/bowling-challenge-ruby).

Intending to make the web app for the scorecard. However, at this point, only the express skeleton is there.

## How to Install
1. Clone the git repository to your machine
2. `cd bowling-challenge`
3. Run `npm install`

## How to Run
`cd src` & `node game.js`
  - `const game = new Game;`
  - `game.rollPins(4)` etc, as many times as you like
  - `game.getScore()` to get frame scores in an array form
  - `game.totalScore()` to get the total sum of the score

## How to Test
1. To get the test & coverage results: `npm test -- --coverage`
2. To analyze the code: `cd src` & run: `npx eslint game.js`, `npx eslint frame.js`

## Diagram
![Bowling Scorecard Diagram](https://github.com/ruiined/bowling-challenge-ruby/blob/main/images/bowling_score_diagram.png)
