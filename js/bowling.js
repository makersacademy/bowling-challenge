var Bowling = function() {
  this.pins = 10;
  this.player = 1;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strike = 0;
  this.spare = 0;
  this.currentScore = 0;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strike += 1;
    this.rollNumber + 1;
    this.totalScore();
    this.nextFrame();
  }
  else{this.pins = (this.pins -= number);
    this.rollSpare();
    this.nextFrame();
  }
};

Bowling.prototype.rollSpare = function() {
  if(this.pins === 0) {this.spare += 1;}
};

Bowling.prototype.nextFrame = function() {
  if(this.rollNumber === 1) {this.rollNumber += 1;}
  else if(this.rollNumber === 2)
  {
    this.rollNumber -= 1;
    this.totalScore();
    this.frameTotal();
    this.pins = 10;
  }
};

Bowling.prototype.frameTotal = function() {
  if(this.frameNumber === 10) {this.frameNumber = 1; return console.log("Game over");}
  else{this.frameNumber += 1;}
};

Bowling.prototype.totalScore = function() {
  if(this.spare != 0) {(this.currentScore = (10 * this.spare) + this.currentScore);}
  else if(this.strike != 0) {(this.currentScore = (10 * this.strike) + this.currentScore);}
  else{(this.currentScore = (10 - this.pins) + this.currentScore);}
};