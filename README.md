# Bowling Challenge

[![Build Status](https://app.travis-ci.com/PKilgarriff/bowling-challenge.svg?branch=main)](https://app.travis-ci.com/PKilgarriff/bowling-challenge)

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript). The brief is the same as the [previous weekend challenge](https://github.com/PKilgarriff/bowling-challenge-ruby), but utilises skills learned during Week 6 (JavaScript Week) to create an implementation in JS.

## Setup

1. Fork, then clone this repository `git clone https://github.com/[your-github-username]/bowling-challenge`
2. `cd bowling-challenge` to change into the project directory
3. Run `npm install` to install the dependencies from the package.json
4. Open a REPL in node with `node`
5. Load the main class (BowlingScore) with `.load bowlingScore.js`

## Using the Program

After following the steps in [setup](#setup), you can now use the program as follows:

- Instances of the BowlingScore class can be created and used like this:

```
const score = new BowlingScore();
score.addScore(6); // Gets put into frame 1
score.addScore(3); // Gets put into frame 1
score.addScore(3); // Gets put into frame 2
score.addScore(7); // Gets put into frame 2
score.addScore(10); // Gets put into frame 3
score.getTotalScore();
 => 39
score.getFrameScore(1);
 => 9
score.getFrameScore(2);
 => 20
score.getFrameScore(3);
 => 10
```

- Unlike my previous implementation, the BowlingScore class does not take a name at initialisation. - You can add scores which will be assigned to the correct frame of the game.
- You can also request the scores of an individual frame
  - this will include the bonuses if these rolls have taken place
    - see frame 2 in the above example, the rolls are 3 and 7 -> so a spare
    - the next roll is a 10 and so this is alos added as bonus points to that frame -> bringing the total to 20

## Testing the Program

- Run `jest --coverage --verbose` in the root of the repo
  - this will demonstrate the code coverage
  - as well as the living documentation for the program

## Approach

- Reviewed previous work on [Bowling Challenge - Ruby](https://github.com/PKilgarriff/bowling-challenge-ruby)
- Set up repository with JavaScript libraries for development and testing:
  - Jest
  - Coveralls (Not currently integrated with online platform)
  - ESLint -> needed to customise config to stop conflicts with Prettier
- Added Travis config file for Continuous Integration
- Test drove creation of Frame class (Based on previous work)
  - getNumber
  - getScore
  - addScore
  - isComplete
    > Blocker - don't know how to assign constants in a similar way to Ruby
    >
    > - currently have left magic numbers in place in isComplete function
    >   - Update: have just assigned the values to properties of the Frame class (e.g. this.totalPins)
  - isStrike
  - isSpare

At this point, the Frame class can store which number frame it is, store an array of pins that have been knocked down, have pins (scores) added to it, return the total score represented by those pins, and whether a spare or strike has occured. It also knows whether it is a complete frame (for situations outside of the final frame).

- Return to BowlingScore class
  - add addScore method
  - add getTotalScore method
  - add #currentFrame method
  - add #addFrame method
  - update addScore to use the two new private methods and add a frame instance if one doesn't exist
    - use the same thing for adding them if it's complete?
  - update conditional block inside addScore to use Frame.isComplete()
- add Feature tests for various example games
  - note to add mocking for Frame in BowlingScore unit tests
    - use a standard object?
    - use jest mocking objects?
- add applyBonus to BowlingScore
- add isBonusComplete to Frame
- update conditional in BowlingScore.addScore
  - does not add new frame if the current frame is the final one

Currently passes all tests including feature tests for two example games and then a perfect game, and a game of all spares (every roll a 5)

## Next Steps

- ~~Tidy-up Readme -> so that it is ready for a PR~~
- Stretch Goal -> Create a nice interactive animated interface with jQuery
