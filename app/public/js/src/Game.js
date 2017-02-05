function Game() {
  this.rolls = []
  this._currentRoll = 0;
}

Game.prototype.roll = function(pins) {
  return this.rolls[this._currentRoll++] = pins;
}

Game.prototype.getScore = function() {
  var score = 0;
  var frameIndex = 0;
  for (frame = 0; frame < 10; frame++)
    if (this.rolls[frameIndex] == 10) {
      score += 10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
      frameIndex++;
    }
    else if (this._isSpare(frameIndex)) {
      score += 10 + this.rolls[frameIndex + 2];
      frameIndex += 2;
    } else {
      score += this._sumOfBallsInFrame(frameIndex);
      frameIndex += 2;
    }
  return score;
}

Game.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
}

Game.prototype._sumOfBallsInFrame = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
}
