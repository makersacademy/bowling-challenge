var Frame = require('../src/frame.js');

function Bowling(frames = 10) {
  this._maxFrames = frames
  this._frames = [new Frame()]
  this._frame = 0
  this._endOfGame = false
}

// public functions
Bowling.prototype.roll = function(...args) {

  args.forEach( pins => {
    this._currentFrame().inputRoll(pins)
    if(!this._currentFrame().canRoll()) this._newFrame()
  });
}

Bowling.prototype.totalScore = function() {
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


module.exports = Bowling