function Score() {
  // This tracks the overall player score
  this._score = 0
}
Score.prototype.score = function() {
  return this._score;
};
