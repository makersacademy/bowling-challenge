var Bowling = function() {
  this.pins = 10;
  this.player = 1;
  this.frame = this.player;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strike = true;
    this.pins = 0;
    this.newFrame();
  } else {
    this.pins = (this.pins -= number);
  }
};

Bowling.prototype.newFrame = function() {
  this.pins = 10;
};