Frame = function() {
  this._score = 0;
}

Frame.prototype.bowlBall = function(pins) {
  this._score += pins;
}