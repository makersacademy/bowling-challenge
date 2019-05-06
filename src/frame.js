var Frame = function() {
  this._pinsHit = 0;
};

Frame.prototype.pinsHit = function(number) {
  this._pinsHit += number;
};

Frame.prototype.score = function() {
  return this._pinsHit;
};
