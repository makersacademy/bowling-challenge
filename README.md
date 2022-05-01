# Bowling Challenge

## Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

I approached this challenge by using a test driven approach. I created the unit and feature tests with Jest.

Create a domain model and diagram from the user story
Create a failing test (red) in Jest
Develop code to result in a passing test (green)
Refactor the code and re-test (orange)

I originally created this challenge in Ruby, then revisited the challenge in JavaScript. However, my Ruby code for this challenge was flawed as it could not pass a perfect game and the design of the code made it difficult to bugfix, therefore I invested time into planning and redesigning the scorecard from scratch to improve the structure of my code and apply better concepts such as Single Responsibilty Principle.

## Getting started

git clone path-to-repo

# Test Code

Run Jest from the root directory to test the code

# Run

1. Type 'node' and press enter from the root directory
2. Command: const {Game, Frame} = require('./game')
3. Command: const game = new Game();
4. Command: game.addPointsScored(**enter number between 1 - 10**)
5. Continue adding scores to the scorecard
6. To view your score:
7. Command: game.totalScore();

# Ten Pin Score Example

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
