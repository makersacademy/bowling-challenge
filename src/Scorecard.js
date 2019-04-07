function Scorecard() {
  this.frames = [];
  this.score = 0;
};

Scorecard.prototype.takeFrames = function (frame) {
  if (this.frames.length === 10) {
    return;
  }
  this.frames.push(frame)
};

Scorecard.prototype.scoreGame = function() {
  // need to make this process a loop, test for multiple frames
  const scoreArray = this.frames[0];
  return this.sumArray(scoreArray);
};

Scorecard.prototype.sumArray = function (array) {
  return array.reduce(function(a,b) {
    return a + b;
  }, 0);
};
