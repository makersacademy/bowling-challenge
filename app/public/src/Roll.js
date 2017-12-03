function Roll(pins) {
  if(pins>10 || pins<0 || isNaN(pins)) {
    throw "This is not a valid roll."
  };
  this._knockedPins = pins;
};

Roll.prototype.getKnockedPins = function() {
  return this._knockedPins;
};
