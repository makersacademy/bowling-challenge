var Frame = function() {
  this._score = [];
};
Frame.prototype.score = function(pinsHit) { this._score.push(pinsHit); };
Frame.prototype.getFirstScore = function() { return this._score[0]; };
Frame.prototype.getSecondScore = function() { return this._score[1]; };
