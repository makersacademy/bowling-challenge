function Frame(index) {
  this._status = 'inactive';
  this._rolls = [];
  this._score;
  this.index = index;
};

Frame.prototype.status = function() {
  return this._status;
};
Frame.prototype.rolls = function() {
  return this._rolls;
};
Frame.prototype.score = function() {
  return this._score;
};

Frame.prototype.add_roll = function(pins_knocked_down) {
  this._rolls.push(pins_knocked_down);
  this.manageStatus();
  if(this._status === 'complete') { this.calculateScore() };
};

Frame.prototype.changeStatus = function(newStatus) {
  this._status = newStatus;
};

Frame.prototype.isInPlay = function() {
  if(this._rolls.length > 1 || this._rolls[0] === 10) {
    return false
  } else {
    return true;
  };
};

Frame.prototype.calculateScore = function() {
  this._score = this._rolls.reduce(function(a, b) { return a + b; }, 0);
};

Frame.prototype.manageStatus = function() {
  if(this._rolls.length === 3) {
    this._status = 'complete'
  } else if(this._rolls.length === 2 && this._rolls[0] + this._rolls[1] < 10) {
    this._status = 'complete'
  }
};
