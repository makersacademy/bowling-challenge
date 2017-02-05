function Roll(pins) {
  this._value = pins;

  this.MAX = 10;
}

Roll.prototype.getValue = function() {
  return this._value;
};

Roll.prototype.isValid = function() {
  return (this.getValue() <= this.MAX);
}
