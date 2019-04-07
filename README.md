# Bowling Challenge

This is the Week 5 Weekend Challenge from Makers Academy.

See [here](https://github.com/makersacademy/bowling-challenge) for the original Makers repo.

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

[Getting started](#getting-started) | [Usage](#Usage) | [Running tests](#running-tests)

[Rules for bowling](#rules-for-bowling) | [Approach](#Approach)

## Getting started

```
git clone https://github.com/amyj0rdan/bowling-challenge
```

## Usage


## Running tests

Open `SpecRunner.html` in your browser.

## Rules for bowling

- There are 10 frames in a game of bowling.
- There are 10 pins available to be knocked down.
- Each frame consists of 2 throws, unless the 1st throw is a strike (ie, all pins are knocked down).
- Score = number of pins knocked down + strike/spare bonus.
- On the 10th frame, there can be a 3rd throw if the player scores a strike or spare on the first or second throw.

### Bonus scoring

#### Strike
Bonus for that frame is number of pins knocked down by the next two rolls.

#### Spare
Bonus for that frame is the number of pins knocked down by the next roll.

#### 10th frame

Maximum of 3 balls can be rolled in the 10th frame. Player gets a bonus throw if they roll a strike or spare.

#### Gutter Game

Player never hits a pin (20 zero scores).

#### Perfect Game

Player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

## Approach

- BDD and TDD in new language, JavaScript, using Jasmine test framework
