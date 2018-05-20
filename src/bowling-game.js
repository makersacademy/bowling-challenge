function BowlingGame() {
  this.rolls = [];
  this.currentRoll = 0;
}

BowlingGame.prototype.roll = function(pins) {
  this.rolls[this.currentRoll] = pins;
  this.currentRoll += 1;
};

BowlingGame.prototype.getScore = function() {
  var score = 0;
  var frameIndex = 0;
  for (var frame = 0; frame < 10; frame++) {
    if (this._isSpare(frameIndex)) {
      score += 10 + this.rolls[frameIndex + 2];
      frameIndex += 2;
    } else {
      score += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
      frameIndex += 2;
    }
  }
  return score;
};

BowlingGame.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
};
