function Round() {
  this.rollOne = null;
  this.rollTwo = null;
  this.result = [];
  this.isInProgress = true;
  this.ROLL_TOTAL = 10;
}

Round.prototype.acceptPins = function(pins) {
  if(!this._isPinsEnteredValid(pins)) {throw "Invalid pin entry";}
  this._logPins(pins);
}

Round.prototype.acceptFinalPins = function(pins) {
  console.log("final pins");
  if(!this._isPinsEnteredValid(pins)) {throw "Invalid pin entry";}
  if(this.rollOne === null) {
    this.rollOne = pins;
    this.result.push(pins);
  } else if(this.rollTwo === null) {
    // QC needed but only if rollOne is NOT 10
    this.rollTwo = pins;
    this.result.push(pins);
    if(this.rollOne + this.rollTwo < this.ROLL_TOTAL) {
      this.isInProgress = false;
    }
  } else {
      this.result.push(pins);
      this.isInProgress = false;
  }
}

Round.prototype.isFull = function() {
  return !(this.isInProgress);
}

Round.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    return true;
  } else {
    return false;
  }
}

Round.prototype._logPins = function(pins) {
  if(this.rollOne === null) {
    this.rollOne = pins;
    this.result.push(pins);
    if(pins === 10) {this.isInProgress = false;}
  } else if(this.rollTwo === null) {
    if(!this._isRoundTotalValid(pins)) {throw "Invalid pin entry";}
    this.rollTwo = pins;
    this.result.push(pins);
    this.isInProgress = false;
  }
}

Round.prototype._isRoundTotalValid = function(pins) {
  if(this.rollOne + pins > this.ROLL_TOTAL) {
    return false;
  } else {
    return true;
  }
}
