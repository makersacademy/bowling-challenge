function Frame() {
  this.bowls = [];
  this.strike = false;
  this.spare = false;
  this.score = 0;
}

Frame.prototype.firstBowl = function(firstScore) {
  this.bowls.push(firstScore)
}

Frame.prototype.secondBowl = function(secondScore) {
  this.bowls.push(secondScore);
  this._totalScore();
  this._isStrike();
  this._isSpare();
}

Frame.prototype._totalScore = function() {
  this.score = (this.bowls.reduce((a, b) => a + b, 0));
}

Frame.prototype._isSpare = function() {
  if (this.bowls[0] != 10 && this.score == 10) {
    this.spare = true
  }
}

Frame.prototype._isStrike = function() {
  if (this.bowls[0] == 10) {
    this.strike = true
    this.bowls[1] = 0
  }
}
