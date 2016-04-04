function Frame(number) {
  this.pins =  this._default.pins;
  this.maxRolls = this._default.rolls;
  this.rolls = [];
  this.number = typeof number !== 'undefined' ? number : 0;
  this.bonus = 0;
}

Frame.prototype.roll = function (numberOfPins) {
  if(this.isFinished()) { throw new Error(this._MAX_ROLLS_ERR); }
  this.rolls.push(numberOfPins);
};

Frame.prototype.numberOfRolls = function () {
  return this.rolls.length;
};

Frame.prototype.pinsKnocked = function () {
  sum = this.rolls.reduce(function(a, b) { return a + b; }, 0);
  return sum;
};

Frame.prototype.isStrike = function () {
  return this.rolls[0] === this._default.pins;
};

Frame.prototype.isSpare = function () {
  if(this.isStrike()) return false;
  return this.pinsKnocked() === this._default.pins;
};


Frame.prototype.totalScore = function () {
  if(!this.bonus) { return this.pinsKnocked(); }
  return this.pinsKnocked() + this.bonus;
};

Frame.prototype.isFinished = function () {
  if(this.isStrike() && this.maxRolls === 2) return true;
  if(this.numberOfRolls() === this.maxRolls) return true;
  return false;
};

Frame.prototype._MAX_ROLLS_ERR = 'Passed the total number of rolls';
Frame.prototype._default = { pins: 10, rolls: 2 };
