function Frame(number, firstRoll) {
  this._number = number;
  this._firstRoll = firstRoll;
  this._secondRoll = null;
  this._bonus = 0;
}

Frame.prototype.number = function() {
  return this._number;
}

Frame.prototype.total = function() {
  return this._firstRoll + this._secondRoll + this._bonus;
}

Frame.prototype.addRoll = function(second_roll) {
  this._secondRoll = second_roll;
}

Frame.prototype.addBonus = function(bonus) {
  this._bonus = bonus;
}

Frame.prototype.isOngoing = function() {
  return this._secondRoll === null && this._firstRoll !== 10;
}

Frame.prototype.isStrike = function() {
  return this._firstRoll === 10;
}

Frame.prototype.isSpare = function() {
  return !this.isStrike() && this._firstRoll + this._secondRoll === 10;
}
