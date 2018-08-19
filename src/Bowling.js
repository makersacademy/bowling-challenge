function BowlingGame() {
  this._rolls = [];
  this._currentRoll = 0;
};

BowlingGame.prototype.roll = function (pins) {
  this._rolls.push(pins);
  // this._score += pins;
  // this._rolls[this._currentRoll++] = pins;
};

BowlingGame.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this._rolls[rollIndex] + this._rolls[rollIndex + 1] == 10 ) {
      // for a spare, add the next to rolls as a bonus to the result.
      result += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
    } else {
    // go through each frame and give the result of each of the two rolls in each frame.
    result += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
    }
    rollIndex += 2;
  }
  return result;
  // return this._score;
};
