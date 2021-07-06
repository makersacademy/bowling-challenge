function Game() {
  this.frameIndex = 0;
  this.points = [];
};

Game.prototype.roll = function(pins) {
  if (pins > 10) {
    throw 'You cannot bowl more than 10!'
  } else {
    this.points.push(pins)
  };
};

Game.prototype.frameTotal = function() {
  var frame = this.points[this.frameIndex] + this.points[this.frameIndex + 1];
  return frame;
};

Game.prototype.finalScore = function(points) {
  return points.reduce(function(a,b) {
    return a + b
  }, 0);
};

Game.prototype.gutterGame = function() {
  if ((this.points.length === 20) && this.finalScore(this.points) === 0) {
    return true;
  };
};
