function Frame() {
  this.rolls = [];
  this.score = 0;
  this.lastFrame = false;
  this.strike = false;
  this.spare = false;
};

Frame.prototype.addRoll = function(roll) {
  this._validateThrow();
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
  this._setBonusFlags();
};

Frame.prototype._validateThrow = function() {
  if (this.rolls.length == 2 && this.lastFrame == false){
    throw 'Frame already complete';
  }else if (this.rolls.length == 2 && this.lastFrame == true && this.strike == false && this.spare == false) {
    throw 'Frame already complete';
  };

};

Frame.prototype._setBonusFlags = function() {
  if (this.rolls.length == 1 && this.score == 10) { this.strike = true };
  if (this.rolls.length == 2 && this.score == 10) { this.spare = true};
};

Frame.prototype._addRollToFrame = function(role) {
  this.rolls.push(roll.pinsDown)
  this.score += roll.pinsDown
};
