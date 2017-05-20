var Bowling = function() {
  this._pinsLeft = 10;
  this._frames = [];
  this._currentFrame = 0;
};
Bowling.prototype.pinsLeft = function() { return this._pinsLeft; };
Bowling.prototype.throwBall = function(pinsHit) {
  if (this.getCurrentFrame().isOver()) {
    this.newFrame();
    this._currentFrame += 1;
    this._pinsLeft -= pinsHit;
    this.getCurrentFrame().score(pinsHit);
  } else {
    this._pinsLeft -= pinsHit;
    this.getCurrentFrame().score(pinsHit);
  }
 };
Bowling.prototype.newFrame = function() { this._frames.push(new Frame()); };
Bowling.prototype.getFrames = function() { return this._frames; };
Bowling.prototype.getCurrentFrame = function() {
  return this._frames[this._currentFrame];
};
