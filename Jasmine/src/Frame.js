// calculates score for a frame
function Frame(number) {
  this.frameNumber = number;
  this._totalPinsDown = 0;
  this._rollCount = 0;
  this._bonusCount = 0;
  this._framePinsDown = [];
}

Frame.prototype.roll = function(pinsDown) {
  if (!this.isFinished()) {
    this._totalPinsDown += pinsDown;
    this._framePinsDown.push(pinsDown);
    this._rollCount += 1;
  }
};

Frame.prototype.formattedRolls = function() {
  var pin1 = this._framePinsDown[0] || '-';
  var pin2 = this._framePinsDown[1] || '-';
  if (this.isAStrike()) {
    return 'X--';
  } else if (this.isASpare()) {
    return pin1 + '-/';
  } else {
    return pin1 + '-' + pin2;
  }
};

Frame.prototype.isFinished = function() {
  if (this._rollCount === 2) {
    return true;
  } else if (this.isAStrike()) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.bonusRoll = function(pinsDown) {
  if (this.isBonusApplicable()) {
    this._totalPinsDown += pinsDown;
    this._bonusCount += 1;
  }
};

Frame.prototype.isBonusApplicable = function() {
  if (this.isAStrike() && this._bonusCount < 2) {
    return true;
  } else if (this.isASpare() && this._bonusCount < 1) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.bonusCount = function() {
  return this._bonusCount;
};

Frame.prototype.isAStrike = function() {
  if (this._totalPinsDown >= 10 && this._rollCount === 1) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isASpare = function() {
  if (this._totalPinsDown >= 10 && this._rollCount === 2) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.calculateScore = function() {
  return this._totalPinsDown;
};
