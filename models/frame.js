function Frame() {
  this._rolls = [];
  this._status = 'in progress';
  this._bonus = '';
}

Frame.prototype.showStatus = function() {
  return this._status;
}

Frame.prototype.roll = function(pins) {
  this._rolls.push(pins);
  if(this._rolls.length == 2 || pins == 10) { this._status = 'complete'; }
  if(pins == 10) { this._bonus = 'strike'; };
  if(this._rolls.length == 2 && this._rolls[0] + this._rolls[1] == 10) {
    this._bonus = 'spare';
  };
  return this;
};

Frame.prototype.showRolls = function() {
  return this._rolls;
};

Frame.prototype.showBonus = function() {
  return this._bonus;
};


module.exports = Frame;
