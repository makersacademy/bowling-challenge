// var Frame = require('../src/frame')

function Game() {
  this.MAXIMUM_SCORE = 10
  this.frames = [];
  this.frameNumber = 0;
  this.score = 0;

  this.newFrame = function() {
    var frame = new Frame();
    this.frames.splice(0,0,frame);
  }
}


Game.prototype.firstBall = function(pins) {
  this.nextRound();
  this.newFrame();
  this._currentFrame().firstRoll(pins);
}

Game.prototype.secondBall = function(pins) {
  this._currentFrame().secondRoll(pins);
}


Game.prototype.nextRound = function() {
  this.frameNumber++;
};

Game.prototype._currentFrame = function() {
  return this.frames[0];
}

Game.prototype._previousFrame = function() {
  return this.frames[1];
}

Game.prototype._twoPreviousFrame = function() {
  return this.frames[2];
}

Game.prototype.scorer = function() {
  if (this._previousFrame() === undefined && this._twoPreviousFrame() === undefined){
    this.score += this._currentFrame().total();
  }

  else if (this._previousFrame() !== undefined && this._currentFrame()._isSpare()){
    this.score += 0;
  }

  else if (this._currentFrame()._isStrike()){
    this.score += 0;
  }

  else if ( this._twoPreviousFrame() !== undefined && this._previousFrame()._isStrike() && this._twoPreviousFrame()._isStrike()){
    this.score += this.MAXIMUM_SCORE + this._currentFrame().total();
  }

  else if (this._previousFrame()._isSpare()){
    this.score += this.MAXIMUM_SCORE + this._currentFrame().total() + this._currentFrame().roll1;
  }

  else if (this._previousFrame()._isStrike()){
    this.score += this.MAXIMUM_SCORE + this._currentFrame().total() + this._currentFrame().total();
  }

  else {
    this.score += this._currentFrame().total();
  }

}
