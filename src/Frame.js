var Frame = function() {
  this._score = [];
};
Frame.prototype.score = function(pinsHit) { this._score.push(pinsHit); };
Frame.prototype.getFirstScore = function() { return this._score[0]; };
Frame.prototype.getSecondScore = function() { return this._score[1]; };
Frame.prototype.isOver = function() { return this._score.length === 2; };
Frame.prototype.isStrike = function() { return this._score[0] === 10; };
Frame.prototype.isSpare = function() {
  return (this._score[0] + this._score[1]) === 10;
};
