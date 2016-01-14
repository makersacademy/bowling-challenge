function Game() {
  this.frameKlass       = Frame;
  this.lastFrameKlass   = LastFrame;
  this.lane             = new Lane(this.defaults.pins);
  this.gameFrames       = this.defaults.frames;
  this.frames           = [];
  this.currentFrame     = null;
  this.setGame();
}

Game.prototype.setGame = function() {
  while (this.frames.length < (this.gameFrames - 1)) {
    this.frames.push(new this.frameKlass(this.defaults.pins));
  }
  this.frames.push(new this.lastFrameKlass(this.defaults.pins));
  for (var i = 0; i < (this.gameFrames - 1); i++) {
    this.frames[i].setNextFrame(this.frames[i + 1])
  }
  this.currentFrame = this.frames[0];
}

Game.prototype.roll = function(pins) {
  if (this.isOver()) { throw new Error('Game over'); }
  this.currentFrame.recordRoll(this.lane.knockPins(pins));
  if (this.isOver() === false && this.currentFrame.isOver()) {
    this._setNewFrame();
  }
}

Game.prototype.score = function(frame) {
  if(typeof frame === 'undefined') { frame = this.currentFrameNumber(); }
  var score = 0;
  for (var i = 0; i < frame; i++) { score += this.frames[i].totalScore(); }
  return score;
}

Game.prototype.currentFrameNumber = function() {
  return this.frames.indexOf(this.currentFrame) + 1;
}

Game.prototype.isOver = function() {
  return this.currentFrame.isOver() &&
    this.currentFrameNumber() === this.gameFrames;
}

Game.prototype._setNewFrame = function() {
  this.currentFrame = this.currentFrame.nextFrame;
  this.lane.reset();
}

Game.prototype.defaults = {
  frames: 10,
  pins: 10
}
