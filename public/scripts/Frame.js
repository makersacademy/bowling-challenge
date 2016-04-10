function Frame() {
  this._roll = 0;
  this._firstRoll = 0;
  this._secondRoll = 0;
  this.ALL_PINS = 10;
}

Frame.prototype.rollBall = function(numberOfPins) {
  if (this.isFirstRoll()) {
    this.checkPinNumberPerRoll(numberOfPins);
    this.setFirstRoll(numberOfPins);
  } else if (this.isSecondRoll()) {
    this.checkPinNumberPerFrame(numberOfPins);
    this.setSecondRoll(numberOfPins);
  } else {
    return;
  }
  this.nextRoll();
};

Frame.prototype.isFirstRoll = function() {
  return this._roll === 0;
}

Frame.prototype.isSecondRoll = function() {
  return this._roll === 1;
}

Frame.prototype.setFirstRoll = function(numberOfPins) {
  this._firstRoll += numberOfPins;
};

Frame.prototype.getFirstRoll = function() {
  return this._firstRoll;
};

Frame.prototype.setSecondRoll = function(numberOfPins) {
  this._secondRoll += numberOfPins;
}

Frame.prototype.getSecondRoll = function() {
  return this._secondRoll;
}

Frame.prototype.nextRoll = function() {
  this._roll += 1;
}

Frame.prototype.getTotal = function() {
  return this.getFirstRoll() + this.getSecondRoll();
}

Frame.prototype.isSpare = function() {
  if (this.isStrike()) {
    return false;
  }
  return this.getTotal() === this.ALL_PINS;
}

Frame.prototype.isStrike = function() {
  return this.getFirstRoll() === this.ALL_PINS;
}

Frame.prototype.checkPinNumberPerRoll = function(numberOfPins) {
  if (this.isTooManyPinsPerRoll(numberOfPins)) {
    throw 'Has ' + numberOfPins + ' pins in this roll. ' +
    'getFirstRoll: ' + this.getFirstRoll();
  }
}

Frame.prototype.checkPinNumberPerFrame = function(numberOfPins) {
  if (this.isTooManyPinsPerFrame(numberOfPins)) {
    throw 'Has ' + numberOfPins + ' pins in this frame.\n' + 'Pins knocked down in first roll: ' + this.getFirstRoll() + '.\nPins knocked down in second roll: ' + this.getSecondRoll() + '\n';
  }
}

Frame.prototype.isTooManyPinsPerRoll = function(numberOfPins) {
  return numberOfPins > this.ALL_PINS;
}
Frame.prototype.isTooManyPinsPerFrame = function(numberOfPins) {
  return this.getFirstRoll() + numberOfPins > this.ALL_PINS;
}
