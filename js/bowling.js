var Bowling = function() {
  this.pins = 10;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strike = true
    this.pins = 0
  } else {
    this.pins = (this.pins -= number);
  }
};