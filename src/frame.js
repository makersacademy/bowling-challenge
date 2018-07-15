function Frame() {
  this.scores = [];
}

Frame.prototype.addScore = function(score) {
  this.scores.push(score);
}

Frame.prototype.totalScore = function() {
  return this.scores.reduce((a, b) => a + b, 0);
}
