var Bowling = function() {
  this.pins = 10;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strikes = 0;
  this.spares = 0;
  this.currentScore = 0;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strikes += 1;
    this.rollNumber + 1;
    this.scoreTotal();
    this.nextFrame();
  }
  else{this.pins = (this.pins -= number);
    this.rollSpare();
    this.nextFrame();
  }
};

Bowling.prototype.rollSpare = function() {
  if(this.pins === 0) {this.spares += 1;}
};

Bowling.prototype.nextFrame = function() {
  if(this.rollNumber === 1) {this.rollNumber += 1;}
  else if(this.rollNumber === 2)
  {
    this.rollNumber -= 1;
    this.scoreTotal();
    this.frameTotal();
    this.pins = 10;
  }
};

Bowling.prototype.frameTotal = function() {
  if(this.frameNumber === 10){this.frameNumber = 1;
    return "Game over";}
  else{this.frameNumber += 1;}
};

Bowling.prototype.scoreTotal = function() {
  if(this.spares != 0) {(this.currentScore = (10 * this.spares) + this.currentScore);}
  else if(this.strikes != 0) {(this.currentScore = (10 * this.strikes) + this.currentScore);}
  else{(this.currentScore = (10 - this.pins) + this.currentScore);}
};