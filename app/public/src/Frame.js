function Frame(roll1, roll2) {
  this._rolls = [roll1, roll2]
  this._MAX_PINS = 10
};

Frame.prototype.getRolls = function() {
  return this._rolls;
};

Frame.prototype.getMaxPins = function() {
  return this._MAX_PINS;
};

Frame.prototype.scoreFrame = function() {
  var baseScore = 0;
  for(i=0; i<2; i++) {
    baseScore += this.getRollKnockedPins(i);
  }
  return baseScore;
};

Frame.prototype.checkStrike = function() {
  return this.getRollKnockedPins(0) == this.getMaxPins();
};

Frame.prototype.checkSpare = function() {
  return this.scoreFrame() == this.getMaxPins() && this.checkStrike() == false
};

Frame.prototype.getRollKnockedPins = function(index) {
  return this.getRolls()[index].getKnockedPins();
};
