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

ScoreSheet.prototype.addFrame = function(frame) {
  this.checkValidations(frame);
  this.updateFrames(frame)
  this.incrementCount();
};

ScoreSheet.prototype.checkValidations = function(frame) {
  if (this.getCount() > this.getMaxFrames()) {
    throw("This scoresheet already has " + this._MAX_FRAMES + " frames.");
  }
  if ((frame.getRollKnockedPins(0) + (frame.getRollKnockedPins(1)) > 10)) {
    throw("You cannot knock more than 10 pins per frame");
  }
};
