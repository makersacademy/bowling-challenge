function Bowl() {
  this.pinsBowled = 0;
}

Bowl.prototype.roll = function(pins) {
  this.pinsBowled = pins;
}
