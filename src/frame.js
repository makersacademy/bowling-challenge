function Frame() {
  this.rolls = []
  this._extras = []
  this._numRolls = 2
  this._extrasRequired = 0
}

Frame.prototype.inputRoll = function(pins) {
  if(!this.canRoll()) throw new Error ("Cannot Roll, frame has ended");
  else {
    this.rolls.push(pins);
    this._numRolls--;
    if(!this._isStrike()) this._isSpare();
  }
}

Frame.prototype.score = function() {
  var rollScore = this.rolls.reduce((a,b) => a + b, 0);
  var extraScore = this._extras.reduce((a,b) => a + b, 0);
  return (rollScore + extraScore);
}

Frame.prototype.canRoll = function() {
  return !!this._numRolls;
};

Frame.prototype.numExtras = function() {
  return this._extrasRequired;
};

Frame.prototype.inputExtra = function(pins) {
  if(this._extrasRequired > 0 && !this.canRoll()) this._extras.push(pins), this._extrasRequired--;
};

Frame.prototype.closed = function() {
  return !this._numRolls && !this._extrasRequired;
};

Frame.prototype.roll1 = function() {
  if(this.rolls[0] === 10) return ""
  return this.rolls[0]
};

Frame.prototype.roll2 = function() {
  if(this.rolls[0] === 10) {
    return 'X';
  } else if(this.rolls.reduce((a,b) => a + b, 0) === 10) {
    return '/';
  };
  return this.rolls[1];
};

Frame.prototype.final1 = function() {
  if(this.rolls[0] === 10) return "X";
  return this.rolls[0];
};

Frame.prototype.final2 = function() {
  join_arr = this.rolls.concat(this._extras);
  if(join_arr[1] === 10) {
    return "X";
  } else if(this.rolls.reduce((a,b) => a + b, 0) === 10 && join_arr != 10) return "/"
  return join_arr[1];
}

Frame.prototype.final3 = function() {
  join_arr = this.rolls.concat(this._extras);
  if(join_arr[2] === 10) return "X";
  return join_arr[2];
};

Frame.prototype.maxRoll = function() {
  maxPins = 10;
  return maxPins - this.rolls.reduce((a,b) => a + b, 0);
};

Frame.prototype.maxRollFinal = function() {
  maxPins = 10;
  if (this.closed()) return -1;
  if(this.rolls[0] === 10 || this.rolls[1] === 10 || this.rolls.reduce((a,b) => a + b, 0) === 10) {
    return 10;
  };
  return maxPins - this.rolls.reduce((a,b) => a + b, 0);
};

// private functions
Frame.prototype._isSpare = function () {
  if(this.rolls.reduce((a,b) => a + b, 0) === 10) {
    this._extrasRequired = 1;
    return true;
  };
};

Frame.prototype._isStrike = function () {
  if(this.rolls[this.rolls.length - 1] === 10) {
    this._numRolls = 0;
    this._extrasRequired = 2;
    return true;
  };
};
