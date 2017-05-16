var Bowling = function() {
  this._pinsLeft = 10;
};
Bowling.prototype.pinsLeft = function() {return this._pinsLeft;};
Bowling.prototype.throwBall = function(pinsHit) { this._pinsLeft -= pinsHit;};
