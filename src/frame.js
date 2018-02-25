function Frame(multipliers) {
  this.rolls = [];
  this.multipliers = multipliers;
}

Frame.prototype.extractFirstMultiplier = function() {
  return this.multipliers.shift();
};

Frame.prototype.createRoll = function(pinsKnocked, roll) {
  // var roll = new rollConstructor(pinsKnocked);
  this.rolls.push(roll);
  roll.roll(pinsKnocked);
};

// Game.roll( new Frame(arg1, arg2), new Roll(arg1, arg2))
