function ScoreSheet() {
  this._count = 1
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

ScoreSheet.prototype.updateFrames = function(orderedFrame) {
  this._frames.push(orderedFrame)
};

ScoreSheet.prototype.addFrame = function(frame, orderedFrame = new OrderedFrame(this.getCount())) {
  this.checkValidations(frame)
  this.incrementCount();
  orderedFrame.setFrame(frame);
  this.updateFrames(orderedFrame);
};

ScoreSheet.prototype.checkValidations = function(frame) {
  if (this.getCount() > this.getMaxFrames()) {
    throw("This scoresheet already has " + this._MAX_FRAMES + " frames.")
  }
  if ((frame.getRollKnockedPins(0) + (frame.getRollKnockedPins(1)) > 10)) {
    throw("You cannot knock more than 10 pins per frame")
  }
  if (this.getCount() < this.getMaxFrames() && frame.getRollKnockedPins(2) > 0) {
    throw("Cannot have three rolls before round 10")
  }
};
