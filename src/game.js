function BowlingGame() {
  this._rolls = []
}

BowlingGame.prototype = {
  roll: function(pins) {
    this._rolls.push(pins);
  },
  score: function() {
    var result = 0;
    var rollIndex = 0;
    for (var i = 0; i < 10; i++) {
      if (this._rolls[rollIndex] === 10) {
        result += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
        rollIndex++;
      } else if (this._rolls[rollIndex] + this._rolls[rollIndex + 1] === 10) {
        result += this._rolls[rollIndex] + this._rolls[rollIndex + 1] + this._rolls[rollIndex + 2];
        rollIndex += 2;
      } else {
        result += this._rolls[rollIndex] + this._rolls[rollIndex + 1];
        rollIndex += 2;
      }
    }
  return result;
  }
};
