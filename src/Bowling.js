function Bowling() {
  this.pins = 10;
  this.fallenPins = 0;
}

Bowling.prototype.roll = function(fallenPins) {
  this.pins = 10 - fallenPins;
  this.fallenPins = fallenPins;
}
