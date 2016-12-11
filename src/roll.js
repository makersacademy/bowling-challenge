var Roll = function() {
  this._rolls = [];
};

Roll.prototype.firstRoll = function(a) {
  this._rolls.push(a);
};

Roll.prototype.secondRoll = function(b) {
  this._rolls.push(b);
};

Roll.prototype.summedRolls = function() {
  var sumRolls = this._rolls.reduce(function(a, b) {
    return a + b;
  }, 0);
  return sumRolls;
};
