var Frame = require('../src/frame.js');

function Bowling(frames = 10) {
  this._maxFrames = frames
  this._frames = [new Frame()]
  this._frame = 0
  this._end = false
  this._lastFrame
}

// public functions
Bowling.prototype.roll = function(...args) {
  args.forEach( pins => {
    this._currentFrame().inputRoll(pins)
    if(this._frames.length > 1) this._extraPoints(pins)
    if(!this._currentFrame().canRoll()) this._newFrame()
    // this.checkEnd()  
  });
}

Bowling.prototype.totalScore = function() {
  console.log(this._frames[0].score())
  return this._frames.reduce((a, b) => a + b.score(), 0) 
}

Bowling.prototype.frameNum = function() {
  return (this._frames.length)
}

// private functions

Bowling.prototype._currentFrame = function() {
  return this._frames[this._frames.length - 1]
}

Bowling.prototype._newFrame = function() {
  this._frames.push(new Frame())
}

Bowling.prototype._oneFrameBack = function() {
  return this._frames[this.frameNum() - 2]
}

Bowling.prototype._twoFramesBack = function() {
  return this._frames[this.frameNum() - 3]
}

Bowling.prototype._extraPoints = function (pins) {
  if(this.frameNum() > 2 && this._twoFramesBack().numExtras() > 0) {
    this._twoFramesBack().inputExtra(pins)
    this._oneFrameBack().inputExtra(pins)
  } else if(this._oneFrameBack().numExtras() > 0) {
    this._oneFrameBack().inputExtra(pins)
  }
}


module.exports = Bowling
