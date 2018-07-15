function Scorecard() {
  this.frames = [];
}

Scorecard.prototype.getFrames = function() {
  return this.frames;
}

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame);
}

Scorecard.prototype.addFrame = function(frame) {
  this.frames.push(frame);
}

Scorecard.prototype.totalScore = function() {
  var scores = this.frames.map( frame => frame.totalScore() )
  return scores.reduce(function(a,b) {
    return (a + b)
  });
};
