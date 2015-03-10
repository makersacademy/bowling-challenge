var Bowling = function() {
  this.pins = 10;
  this.player = 1;
  this.rollNumber = 1;
  this.strike = 0;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strike += 1;
    this.rollNumber + 1;
    this.nextFrame();
  }
  else
  {
    this.pins = (this.pins -= number);
    this.nextFrame();
  }
};

Bowling.prototype.nextFrame = function() {
  if(this.rollNumber === 1)
  {
    this.rollNumber += 1;
  }
  else if(this.rollNumber === 2)
  {
    this.rollNumber -= 1
    this.pins = 10
  }
};