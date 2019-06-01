function Frame(rolls) {
  this.rolls = rolls;
}

Frame.prototype.total = function () {
  score = this._rollScore();
  return score;
};

Frame.prototype._rollScore = function() {
  return (this.rolls[0] + this.rolls[1]);
};
