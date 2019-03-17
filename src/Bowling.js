/* eslint-disable no-underscore-dangle */
function Bowling() {
  this._rolls = [];
}

Bowling.prototype.rollMany = function (pins, rolls) {
  for (let i = 0; i < rolls; i++) {
    this.roll(pins);
  }
};

Bowling.prototype.roll = function (pinsDown) {
  this._rolls.push(pinsDown);
  console.log(`These are the rolls ${this._rolls}`);
};

Bowling.prototype.score = function () {
  let result = 0;
  let rollIndex = 0;
  const game = this;

for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
  if (isStrike()) {
    result += strikeScoring();
    rollIndex++;
  } else if (isSpare()) {
    result += spareScoring();
    rollIndex += 2;
  } else {
    result += basicScoring();
    rollIndex += 2;
    }
  }
  console.log(`This is the result ${result}`);
  return result;

  function isSpare() {
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] === 10;
    }

  function spareScoring() {
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
    }

  function basicScoring() {
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1];
  }

  function isStrike() {
    return game._rolls[rollIndex] === 10;
  }

  function strikeScoring() {
    return game._rolls[rollIndex] + game._rolls[rollIndex + 1] + game._rolls[rollIndex + 2];
  }
    };
