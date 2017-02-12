function Frame(){
  this._rolls = [];
  this._total = 0;
};

Frame.prototype.getRolls = function () {
  return this._rolls
};

Frame.prototype.getTotal = function() {
  return this._total;
};

Frame.prototype.addRolls = function(roll) {
  this._rolls.push(roll);
};

Frame.prototype.sumRolls = function() {
  return this._rolls.reduce(function(score, nextRoll) { return score + nextRoll; }, this._total);
};
