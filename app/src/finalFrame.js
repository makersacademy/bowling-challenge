function FinalFrame() {
  Frame.call(this);
}

FinalFrame.prototype = Object.create(Frame.prototype);
FinalFrame.prototype.constructor = FinalFrame;

FinalFrame.prototype.addRoll = function(roll) {
  if (this._remainingPins - roll < 0) {
    throw 'Cannot knock down more than 10 pins';
  }
  this._frameRolls.push(roll);
  this._remainingPins -= roll;
  if (this._isBonusBalls()) {
    this._remainingPins = 10;
  }
  if (this.isComplete()) {
    this._finaliseFrame();
  }
};

FinalFrame.prototype.isComplete = function() {
  return this._frameRolls.length === 2 &&
         this._remainingPins !== 10 ||
         this._frameRolls.length === 3;
};

FinalFrame.prototype._finaliseFrame = function() {
  this._frameScore = this._frameRolls.reduce(function(a, b) {
    return a + b;
  });
};

FinalFrame.prototype._isBonusBalls = function() {
  return this._remainingPins === 0 &&
         this._frameRolls.length < 3;
};
