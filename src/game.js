'use strict';

function Game(){
  this.frames = [];
}

Game.prototype.addFrame = function (frame) {
  if (this.frames.length < 10 ) {
    this.frames.push(frame);
  } else {
    throw new Error('This game already has ten frames')
  };
};

Game.prototype.currentGameScore = function () {
  var total = 0
  this.frames.forEach(function(thisFrame) {
    total += thisFrame.totalFrameScore();
  });
  return total
};

Game.prototype.frameBonus = function (frame) {
  if (frame.isASpare()) {
    return this._nextFrame(frame).pinsFirstRoll();
  } else if (frame.isAStrike()) {
    return this._nextFrame(frame).totalFrameScore();
  } else {
    return 0
  }
};

Game.prototype._nextFrame = function(frame) {
   var nextIndex = this.frames.indexOf(frame) + 1
   return this.frames[nextIndex]
};
