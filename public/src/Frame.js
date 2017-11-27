function Frame(roll1, roll2 , roll3 = new Roll(0)) {
  this._rolls = [roll1, roll2, roll3]
};

Frame.prototype.getRolls = function() {
  return this._rolls;
};

Frame.prototype.scoreFrame = function() {
  var baseScore = 0;
  for(i=0; i<2; i++) {
    baseScore += this.getRollKnockedPins(i);
  }
  return baseScore;
};

Frame.prototype.getRollKnockedPins = function(index) {
  return this.getRolls()[index].getKnockedPins();
};
