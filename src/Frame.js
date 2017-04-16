function Frame () {
  this.pins = 10;
  this.rolls = [];
};

Frame.prototype.logRollResult = function(pinsKnocked) {
  this.rolls.push(pinsKnocked);
};

Frame.prototype.total = function() {
  var runningTotal = 0;
  for(var i = 0; i < this.rolls.length; i++) {
    runningTotal += this.rolls[i];
  }
  return runningTotal;
};