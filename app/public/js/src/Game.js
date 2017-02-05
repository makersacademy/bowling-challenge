function Game() {
  this.rolls = []
  this._currentRoll = 0;
}

Game.prototype.roll = function(pins) {
  return this.rolls[this._currentRoll++] = pins;
}

Game.prototype.getScore = function() {
  var score = 0;
  var i = 0;
  for (frame = 0; frame < 10; frame++)
    if (this.rolls[i] + this.rolls[i + 1] === 10) {
      score += 10 + this.rolls[i + 2];
      i += 2;
    } else {
      score += this.rolls[i] + this.rolls[i+1];
      i += 2;
    }
  return score;
}
