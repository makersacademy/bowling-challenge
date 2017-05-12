const PINS = 10;

function Pins() {
  // this.remaining = PINS;
  Pins.prototype.remaining = PINS;
}

Pins.prototype.remaining = PINS;

Pins.prototype.get = function() {
  return this.__proto__.remaining;
}

Pins.prototype.update = function(number) {
  this.__proto__.remaining -= number
}

// Pins.prototype.reset = function() {
//   Pins.prototype.remaining = PINS
// }
