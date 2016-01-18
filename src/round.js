function Round() {
  this.rollOne = null;
  this.rollTwo = null;
  this.result = [];
  this.isInProgress = true;
  this.ROLL_TOTAL = 10;
}

Round.prototype.acceptPins = function(pins) {
  this._checkPinValidity(pins);
  if(this.rollOne === null) {
    this._logRollOne(pins);
    if(pins === this.ROLL_TOTAL) {this.isInProgress = false;}
  } else if(this.rollTwo === null) {
    this._checkRoundTotals(pins);
    this._logRollTwo(pins);
    this.isInProgress = false;
  }
}

Round.prototype.acceptFinalPins = function(pins) {
  this._checkPinValidity(pins);
  if(this.rollOne === null) {
    this._logRollOne(pins);
  } else if(this.rollTwo === null) {
    this._handleFinalRoundRollTwo(pins);
  } else {
    this.result.push(pins);
    this.isInProgress = false;
  }
}

Round.prototype.isFull = function() {
  return !(this.isInProgress);
}

Round.prototype._logRollOne = function(pins) {
  this.rollOne = pins;
  this.result.push(pins);
}

Round.prototype._logRollTwo = function(pins) {
  this.rollTwo = pins;
  this.result.push(pins);
}

Round.prototype._checkPinValidity = function(pins) {
  if(!(typeof(pins) === 'number' && pins >= 0 && pins < 11)) {
    throw "Invalid pin entry";
  }
}

Round.prototype._checkRoundTotals = function(pins) {
  if(this.rollOne + pins > this.ROLL_TOTAL) {
    throw "Invalid pin entry";
  }
}

Round.prototype._handleFinalRoundRollTwo = function(pins) {
  if(this.rollOne !== this.ROLL_TOTAL) {
    this._checkRoundTotals(pins);
  }
  this._logRollTwo(pins);
  if(this.rollOne + this.rollTwo < this.ROLL_TOTAL) {
    this.isInProgress = false;
  }
}
