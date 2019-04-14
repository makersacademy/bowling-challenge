function BowlingGame() {
  this.scoreCard = [];
  this.frames = [];
};


BowlingGame.prototype.addFrame = function(frame) {
  this.frames.push(frame);
};

BowlingGame.prototype.score = function() {
  var scores = this.frames
  .map(arr => arr.reduce((sum, item) => sum += item, 0));
  return scores.reduce((a, b) => a + b); 
};





















