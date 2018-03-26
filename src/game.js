'use strict';

function Game (frameConstructor) {
  this._frameConstructor = frameConstructor;
  this._frames = [new this._frameConstructor];
  this._nFrames = 1;
  this._frames[0].nSet(1);
};

//getters
Game.prototype.frames = function(){ return this._frames };
Game.prototype.score = function() {
  return this._frames.reduce(function(sum, frame) {
    return sum + frame.score()
  }, 0);
}

//setters
Game.prototype.roll = function(score) {
  if (typeof this._frames.slice(-1)[0].roll(score) === "string") {
    this.updateSpecials(this._frames.slice(-1)[0].rolls);
    this.nextFrame()
  }
};
Game.prototype.nextFrame = function() {
  this._frames.push(new this._frameConstructor);
  this._nFrames++;
  this._frames.slice(-1)[0].nSet(this._nFrames);
};
Game.prototype.updateSpecials = function(scores) {
  var spareI = this._frames.findIndex( function(x) { return x.isSpare() });
  var strikeIs = []
  for (var i = 0; i < this._frames.length; i++) {
    if (this._frames[i].isStrike()) { strikeIs.push(i) }
  };
};
NOTES - broadcast all scores to whole array of frames
- spares only accept one bonus roll then cancel spareness
- all strikes cancel on new frame unless current frame is a strike


// checkers
Game.prototype.isOver = function() { return this.frames().length >= 10 }
