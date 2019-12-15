var Frame = require('../src/frame.js');

function Bowling(frames = 10) {
  this._maxFrames = frames;
  this._frames = [new Frame()];
  this.isEnd = false;
  this._isLastFrame = false;
}

// public functions
Bowling.prototype.roll = function(...args) {
  args.forEach( pins => {
    if(this.isEnd) throw new Error("Cannot roll, the game has ended, total Points: " + this.totalScore())
    if(this._islastFrame) return this._lastFrame
   // console.log("here")
    this._addRoll(pins)
  });
}

Bowling.prototype.totalScore = function() {
  return this._frames.reduce((a, b) => a + b.score(), 0);
}

Bowling.prototype.frameNum = function() {
  return (this._frames.length);
}

// private functions

Bowling.prototype._addRoll = function(pins) {
  
  if(this._frames.length > 1) this._extraPoints(pins);
  this._checkEnd();
  if(!this._currentFrame().canRoll() && !this._lastFrame) this._newFrame();
}

Bowling.prototype._lastFrame = function(pins) {
  this._currentFrame().inputExtra(pins);
  console.log("here")
}

Bowling.prototype._newFrame = function() {
  this._frames.push(new Frame());
}

Bowling.prototype._currentFrame = function() {
  return this._frames[this._frames.length - 1];
}

Bowling.prototype._oneFrameBack = function() {
  return this._frames[this.frameNum() - 2];
}

Bowling.prototype._twoFramesBack = function() {
  return this._frames[this.frameNum() - 3];
}

Bowling.prototype._extraPoints = function (pins) {
  if(this.frameNum() > 2 && this._twoFramesBack().numExtras() > 0) {
    this._twoFramesBack().inputExtra(pins);
    this._oneFrameBack().inputExtra(pins);
  } else if(this._oneFrameBack().numExtras() > 0) {
    this._oneFrameBack().inputExtra(pins);
  }
}

Bowling.prototype._checkEnd = function() {
  if(this.frameNum() === this._maxFrames) this._isLastFrame = true
  if(this._isLastFrame && this._currentFrame().closed()) {
    this.isEnd = true;
  } 
}


module.exports = Bowling
