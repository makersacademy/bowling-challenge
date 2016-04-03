// var Frame = require('../src/frame')

function Game() {
  this.frames = [];
  this.frameNumber = 0;
}

Game.prototype.nextRound = function() {
  this.frameNumber++;
};

Game.prototype.firstBall = function(pins) {
  this.nextRound()
  this.newFrame();
  this._currentFrame().firstRoll(pins);
}

Game.prototype.secondBall = function(pins) {
  this._currentFrame().secondRoll(pins);
}

Game.prototype.newFrame = function() {
  var frame = new Frame();
  this.frames.splice(-1,0, frame);
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frameNumber -1] ;
}

Game.prototype._previousFrame = function() {
  return this.frames[this.frameNumber -2]
}

// Game.prototype._previousFrame = function() {
//   return this.frames[this.frameNumber -2]
// }


Game.prototype._twoPreviousFrame = function() {
  return this.frames[this.frameNumber -3]
}

Game.prototype.scorer = function() {
  if (this._currentFrame().bonus === "open"){
    var score = this._currentFrame().roll1 + this._currentFrame().roll2;
    this._currentFrame().setScore(score);
  }

}
