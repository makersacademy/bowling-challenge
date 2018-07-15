function Frame(frameNumber) {
  this.number = frameNumber;
  this.rolls = [];
  this.scores = [];
}

Frame.prototype.addScore = function(score) {
  this.scores.push(score);
}

Frame.prototype.recordRoll = function(roll) {
  this.rolls.push(roll);
}

Frame.prototype.totalScore = function() {
  return this.scores.reduce((a, b) => a + b, 0)
};
