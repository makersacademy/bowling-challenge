function FrameLog(scorecard = new Scorecard(), frame = new Frame()) {
  this.scorecard = scorecard;
  this.frames = [];
  this.currentFrame = frame;
}

FrameLog.prototype.getCurrentFrame = function() {
  return this.currentFrame;
}

FrameLog.prototype.addScore = function(score) {
  this.getCurrentFrame().saveScore(score)
  if (this.getCurrentFrame().isComplete()) this._resetFrame();
}

FrameLog.prototype._createFrame = function() {
  this.currentFrame = new Frame();
}

FrameLog.prototype._addFrame = function(frame) {
  this.frames.push(frame);
}

FrameLog.prototype._resetFrame = function() {
  this._addFrame(this.currentFrame);
  this.scorecard.evaluate(this.currentFrame);
  this._createFrame();
}
