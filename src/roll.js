function Roll(score, rollNumber) {
  this._score = score;
  this._rollNumber = rollNumber;
};

Roll.prototype.score = function() {
  return this._score;
};

Roll.prototype.number = function() {
  return this._rollNumber;
};
