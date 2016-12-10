function Pins() {
  var this.pins = [0,1,2,3,4,5,6,7,8,9,10]
}

Pins.prototype.roll = function() {
  this.first_score = this.pins[Math.floor(Math.random() * this.pins.length)];
  return this.first_score;

};
