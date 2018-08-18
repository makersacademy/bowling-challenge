function Frame() {
  this.scores = [];
}

Frame.prototype.addScore = function(score) {
  this.scores.push(score);
}

Frame.prototype.score = function() {
  return this.scores.reduce((a, b) => a + b, 0);
}

Frame.prototype.isSpare = function() {
  return this.scores.length === 2 && this.score() === 10;
}

Frame.prototype.isStrike = function() {
  return this.scores.length === 1 && this.score() === 10;
}
