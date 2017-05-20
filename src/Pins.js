function Pins() {
  this.pinsDownFirstThrow = Math.floor(Math.random() * 11)
}

Pins.prototype.pinsDownSecondThrow = function() {
  return Math.floor(Math.random() * (11 - this.pinsDownFirstThrow))
};
