function Frame() {
  this._pins = 10;
  this._maxRolls = 2;
  this.firstBowl = null;
  this.secondBowl = null;
  this.lastBowl = null;
  this._currentRoll = 0;
  this._bonusPoints = 0;
};

Frame.prototype.pinsLeft = function () {
  return this._pins;
};

Frame.prototype.maxRolls = function () {
  return this._maxRolls;
};

Frame.prototype.bowl = function (pinsKnockedDown) {
  this._currentRoll++
  if (this._currentRoll == 1) {
    return this.nextRoll(pinsKnockedDown);
  } else if (this._currentRoll == 2) {
    if (pinsKnockedDown > this._pins) throw new Error(`Error! There are only ${this._pins} pin(s) left.`);
    this._pins -= pinsKnockedDown
    return this.secondBowl = pinsKnockedDown;
  } else {
    throw new Error('You only get two rolls!');
  }
};

Frame.prototype.lastFrameBowl = function (pinsKnockedDown) {
  this._currentRoll++
  if (this._currentRoll == 1) {
    this._pins -= pinsKnockedDown
    this.firstBowl = pinsKnockedDown
  } else if (this._currentRoll == 2) {
    if (pinsKnockedDown > this._pins) throw new Error(`Error! There are only ${this._pins} pin(s) left.`);
    this._pins -= pinsKnockedDown
    this.secondBowl = pinsKnockedDown
  } else if (this._currentRoll == 3) {
    if (pinsKnockedDown > this._pins) throw new Error(`Error! There are only ${this._pins} pin(s) left.`);
    this._pins -= pinsKnockedDown
    this.lastBowl = pinsKnockedDown
  } else {
    throw new Error('No rolls left!');
  }
};


Frame.prototype.isStrike = function () {
  if (this.firstBowl == 10) {
  return true;
  };
  return false
};

Frame.prototype.isSpare = function () {
  if (this.firstBowl < 10 && this.pinsLeft() == 0) {
    return true;
  };
  return false;
};

Frame.prototype.nextRoll = function (pinsKnockedDown) {
  if (pinsKnockedDown > this._pins) throw new Error(`Error! There are only ${this._pins} pin(s).`);
  this._pins -= pinsKnockedDown
  return this.firstBowl = pinsKnockedDown;
};

Frame.prototype.bonusPoints = function () {
  return this._bonusPoints;
};

Frame.prototype.addBonusPoints = function (points) {
  this._bonusPoints += points;
};

Frame.prototype.isFinished = function () {
  if (this.isStrike()) {
    return true;
  } else if (this.isSpare()) {
    return true;
  } else if (this.secondBowl != null) {
    return true;
  }
  return false;
};

Frame.prototype.lastFrameIsFinished = function () {
  if (this.firstBowl == 10 && this.lastBowl != null) {
    return true;
  } else if (this.firstBowl < 10 && this.secondBowl == (10 - this.firstBowl) && this.lastBowl != null) {
    return true;
  } else if (this.firstBowl < 10 && this.secondBowl != null && (this.firstBowl + this.secondBowl != 10)) {
    return true
  }
  return false
};

Frame.prototype.score = function () {
  if (this.isFinished() && (this.isSpare() || this.isStrike())) {
    return 10;
  } else if (this.isFinished()) {
    return (this.firstBowl + this.secondBowl);
  } else {
    throw new Error('The frame is not finished yet.');
  }
};
