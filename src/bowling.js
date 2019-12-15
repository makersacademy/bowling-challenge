var Frame = require('../src/frame.js');

function Bowling(frames = 10) {
  this._maxFrames = frames
  this._frames = [new Frame()]
  this._frame = 0
  this._endOfGame = false
}

Bowling.prototype.totalScore = function() {
  return this._frames.reduce((a, b) => a + b.score(), 0) 
}

module.exports = Bowling