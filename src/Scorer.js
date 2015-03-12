var Scorer = function() {
  this.frames = []
  this.totalScore = 0;

};

Scorer.prototype.loadFrame = function(inputFrame) {
  this.frames.push(inputFrame);
};

Scorer.prototype.framesCount = function() {
  return this.frames.length;
};

