var Bowling = function() {
  this._pinsLeft = 10;
  this._frames = [];
};
Bowling.prototype.pinsLeft = function() { return this._pinsLeft; };
Bowling.prototype.throwBall = function(pinsHit) { this._pinsLeft -= pinsHit; };
Bowling.prototype.newFrame = function() { this._frames.push(new Frame()); };
Bowling.prototype.getFrames = function() { return this._frames; };
