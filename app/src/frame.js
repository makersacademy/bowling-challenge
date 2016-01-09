function Frame() {
  this._frameRolls = [];
  this._frameScore = 0;
  this._remainingPins = 10;
  this._frameBonus = 0;
}

Frame.prototype.getFrameData = function() {
  return {rolls: this._frameRolls,
          total: this._frameScore,
          bonus: this._frameBonus
  };
};

Frame.prototype.addRoll = function(roll) {
  if (this._remainingPins - roll < 0) {
    throw 'Cannot knock down more than 10 pins';
  }
  this._frameRolls.push(roll);
  this._remainingPins -= roll;
  if (this.isComplete()) {
    this._finaliseFrame();
  }
};

Frame.prototype.isComplete = function() {
  return this._frameRolls.length === 2 || this._remainingPins === 0;
};

Frame.prototype._finaliseFrame = function() {
  this._frameScore = this._frameRolls.reduce(function(a, b) {
    return a + b;
  });
  if (this._remainingPins === 0) {
    if (this._frameRolls.length === 1) {
      this._frameBonus = 2;
    } else {
      this._frameBonus = 1;
    }
  }
};
