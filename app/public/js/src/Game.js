function Game () {
  this.rolls = []
  this._currentRoll = 0;
  this._score = 0;
}

Game.prototype.roll = function(pins) {
    return this.rolls[this._currentRoll++] = pins;
}

Game.prototype.getScore = function() {
  // var score = 0;
  var frameIndex = 0;
  for (frame = 0; frame < 10; frame++)
    if (this._isStrike(frameIndex)) {
      this._score += 10 + this._strikeBonus(frameIndex);
      frameIndex++;
    }
    else if (this._isSpare(frameIndex)) {
      this._score += 10 + this._spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      this._score += this._sumOfBallsInFrame(frameIndex);
      frameIndex += 2;
    }
  return this._score;
}

Game.prototype._isNotNegativeNumber = function(number) {
  if (number < 0) {
    throw("Invalid input: negative number.");
  }
}

Game.prototype._isNotANumber = function(number) {
  if (isNaN(number)) {
    throw("Invalid input. Please enter a number.");
  }
}

Game.prototype._isStrike = function(frameIndex) {
  return this.rolls[frameIndex] === 10;
}

Game.prototype._isSpare = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
}

Game.prototype._sumOfBallsInFrame = function(frameIndex) {
  return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
}

Game.prototype._spareBonus = function(frameIndex) {
  return this.rolls[frameIndex + 2];
}

Game.prototype._strikeBonus = function(frameIndex) {
  return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
}
