function Frame() {
  this._score = 0
}

Frame.prototype.rollOne = function(score) {
  this._score = score
}

Frame.prototype.rollTwo = function(score) {
  this._score += score
};

Frame.prototype.score = function() {
  return this._score
}