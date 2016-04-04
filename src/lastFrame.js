function LastFrame(number) {
  this.pins =  this._default.pins;
  this.maxRolls =  this._default.rolls;
  this.rolls = [];
  this.number = typeof number !== 'undefined' ? number : 0;
  this.bonus = 0;
}

LastFrame.prototype.roll = function (numberOfPins) {
  if(this.isFinished()) { throw new Error(this._GAME_OVER_ERROR); }
  this.rolls.push(numberOfPins);
};

LastFrame.prototype.numberOfRolls = function () {
  return this.rolls.length;
};

LastFrame.prototype.pinsKnocked = function () {
  sum = this.rolls.reduce(function(a, b) { return a + b; }, 0);
  return sum;
};

LastFrame.prototype.isStrike = function () {
  return this.rolls[0] === this._default.pins;
};

LastFrame.prototype.isSpare = function () {
  if(this.isStrike()) return false;
  return this.pinsKnocked() === this._default.pins;
};


LastFrame.prototype.totalScore = function () {
  if(!this.bonus) { return this.pinsKnocked(); }
  return this.pinsKnocked() + this.bonus;
};

LastFrame.prototype.isFinished = function () {
  if(this.numberOfRolls() === 2 && this.isStrike()) return false;
  if(this.numberOfRolls() === 2 && !this.isSpare()) return true;
  if(this.numberOfRolls() === this.maxRolls) return true;
  return false;
};

LastFrame.prototype._MAX_ROLLS_ERR = 'Passed the total number of rolls';
LastFrame.prototype._GAME_OVER_ERROR = 'The Game is over';
LastFrame.prototype._default = { pins: 10, rolls: 3 };
