function ScoreSheet() {
  this._count = 0
  this._MAX_FRAMES = 10
  this._frames = []
};

ScoreSheet.prototype.getCount = function() {
  return this._count;
};

ScoreSheet.prototype.incrementCount = function() {
  this._count ++;
};

ScoreSheet.prototype.getMaxFrames = function() {
  return this._MAX_FRAMES;
};

ScoreSheet.prototype.getFrames = function() {
  return this._frames;
};

ScoreSheet.prototype.updateFrames = function(frame) {
  this._frames.push(frame)
};


ScoreSheet.prototype.addFrame = function(frame, constructor = 0) {
  if (this.getCount() >= this.getMaxFrames()) {
    throw("This scoresheet already has " + this._MAX_FRAMES + " frames.")
  }
  this.updateFrames(frame)
  this.incrementCount();
};
