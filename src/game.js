function BowlingGame() {
  this._rolls = []
  this.result = 0;
  this.rollIndex = 0;
}

BowlingGame.prototype = {
  roll: function(pins) {
    this._rolls.push(pins);
  },
  score: function() {
    for (var i = 0; i < 10; i++) {
      if (this.isStrike()) {
        this.result += this.getStrikeorSpareScore();
        this.rollIndex++;
      } else if (this.isSpare()) {
        this.result += this.getStrikeorSpareScore();
        this.rollIndex += 2;
      } else {
        this.result += this.getStandardScore();
        this.rollIndex += 2;
      }
    }
  return this.result;
  },
  isStrike: function() {
  return this._rolls[this.rollIndex] === 10
  },
  isSpare: function() {
  return this._rolls[this.rollIndex] + this._rolls[this.rollIndex + 1] === 10
  },
  getStrikeorSpareScore: function() {
    return this._rolls[this.rollIndex] + this._rolls[this.rollIndex + 1] + this._rolls[this.rollIndex + 2];
  },
  getStandardScore: function () {
    return this._rolls[this.rollIndex] + this._rolls[this.rollIndex + 1];
  }
};
