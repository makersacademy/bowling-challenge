# Bowling Challenge

Record the score of your game of ten-pin bowling using this scorecard.

Some not-so-great features:
- No interface
- Incorrect scoring :thumbsup:

This was an extremely difficult challenge for me, and I have officially thrown in the towel. There's a few reasons for this:
- This challenge was split across two weekends for previous cohorts. We only get one weekend because the weekend challenge for week 6 has been changed.
- At the time of writing, I've only been using JavaScript for one week. The unfamiliarity with the syntax and conventions compounds the difficulty.
- Scoring a game of bowling is *deceptively complicated*. In my opinion, it leads to awkwardness when trying to write any implementation.

The root cause of my resignation are the scoring rules used in bowling. I have already redesigned my methods for scoring frames multiple times to try and tally up a score correctly, but I can't quite get it to score completely correctly. I'm not a particularly sporty person either (regardless of how sedentary the sport is), so it wasn't as if I was highly motivated to begin with - let alone after two days of a continuous diagram/design/implementation loop.

That being said, there are a few successes. Firstly, I made a point of trying to stick to the SOLID principles as much as possible, even without a good grasp of JavaScript and its quirks. It isn't perfect, but after two class extractions I think my code is in a more readable shape than it was towards the start of the challenge when I had a monolithic `Game` class responsible for everything.

Secondly, my unit tests are in better shape now compared to near the start of the challenge. I was able to stub out the scoring functionality in the unit tests for my `Game` using spies. Again, it's not perfect, but it's much better than it was before.

Maybe someday I'll return to this and make it work. Then again, it's not as if the world has a shortage of working scorecards, so probably not.

This sad excuse for an app was made for the week 5 weekend challenge for [Makers Academy](www.makersacademy.com).

Tech used in this challenge:
- JavaScript
- Jasmine
- ESLint

## Installation
1. Clone this repo by running `git clone git@github.com:tbscanlon/bowling-challenge.git`.
2. Open up `SpecRunner.html` to load the tests. Look at how lovely and green they all are.

## Usage
1. Open up `SpecRunner.html` in Chrome or one of its deriviates.
2. Hit `CTRL + SHIFT + I` (Windows/Linux) to open up the Developer Console.
3. Type in `game = new BowlingGame()`.
4. Type in `game.begin()` to start a game.
5. Type in `game.roll(5)` to knock down 5 pins.

## Code Examples

### Starting a New Game
```JavaScript
// ./src/bowlingGame.js
BowlingGame.prototype.begin = function ( score = new Score() ) {
  this.score = score;
  for (let i = 0; i < 2; i += 1) {
    this.score.newFrame();
  }
};
```

### Determining Scores
```JavaScript
// ./src/score.js
Score.prototype.record = function ( pins ) {
  this._currentFrame().numberOfRolls += 1;
  if (this._currentFrame().numberOfRolls === 2) {
    this._currentFrame().ball2 = pins;
    this._checkSpare();
    this._calculateFrameScore();
  } else {
    this._checkStrike(pins);
    this._currentFrame().ball1 = pins;
  }
};
```

### Using Spies in Unit Tests
```JavaScript
// ./spec/bowlingGameSpec.js
beforeEach(function () {
  bowlingGame = new BowlingGame();
  scoreMock = jasmine.createSpyObj('score', ['record', 'total', 'newFrame'])
});

// ...tests...

describe("#getScore", function () {
  beforeEach(function () {
    bowlingGame.roll(5);
    bowlingGame.roll(2);

    bowlingGame.roll(8);
    bowlingGame.roll(2);
  });

  it("returns the player's current score", function () {
    scoreMock.total.and.returnValue(17);
    expect(bowlingGame.getScore()).toEqual(17);
  });
});
```

## Credits
- Shoutout to Makers Academy - after this challenge, I'll never enjoy a game of bowling **ever again**.
