function Game() {
  this.frames = [];
  this.points = 0;
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
  this.points += frame._getPoints();
};

Game.prototype._getFrames = function() {
  return this.frames;
};

Game.prototype._getOverallPoints = function() {
  return this.points;
};
