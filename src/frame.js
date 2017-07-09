function Frame() {
  this.turn = [];
  this.strike = false;
  this.spare = false;
  this.score = 0;
}

Frame.prototype.firstBowl = function(firstScore) {
  this.turn = []
  this.turn.push(firstScore)
}

Frame.prototype.secondBowl = function(secondScore) {
  this.turn.push(secondScore);
}

Frame.prototype.totalFrameScore = function() {
  this.score = (this.turn.reduce((a, b) => a + b, 0));
}

Frame.prototype._isStrike = function() {
    if (this.turn[0] == 10) {
    this.strike = true
    this.turn[1] = 0
  }
}

Frame.prototype._isSpare = function() {
  if (this.turn[0] + this.turn[1] == 10) {
    this.spare = true
  }
}
