function Frame(roll1, roll2 , roll3 = 0) {
  this._rolls = [roll1, roll2, roll3]
};

Frame.prototype.getRolls = function() {
  return this._rolls;
};
