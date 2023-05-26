# Bowling Challenge

- A bowling scorecard program made as part of the Makers Academy Software Development course

## The task

To count and sum the scores of a bowling game for one player (in JavaScript).

## Learning objectives

- Class design in JavaScript
- TDD with Jest

## Setup

```zsh
# Install packages
npm install

# To get details on test coverage:
jest
```

## Built with

#### Languages used:

- JavaScript

#### Testing environment:

- Jest
  - Testing tool for JavaScript, created for Test Driven Development

## Design documents

Class design plan
![plan document](images/BowlingChallengePlan.png)

## Example

```javaScript
// node
const BowlingScoreSheet = require('./lib/bowlingScoreSheet');

let scorecard = new BowlingScoreSheet();
scorecard.addRoll(2);
scorecard.addRoll(5);
scorecard.addRoll(3);
scorecard.addRoll(5);
scorecard.calculateScore(); // returns 15
scorecard.complete(); // false
```

## Future developments

- User interface to get the number of pins from the user and print the current scorecard
- Catch erroneous inputs and ask for correct input
- Dual-player functionality

## Further information: Bowling — how does it work?

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
