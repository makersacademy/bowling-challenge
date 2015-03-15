var Bowling = function() {
  this.pins = 10;
  this.roll1 = 0;
  this.roll2 = 0;
  this.player = 1;
  this.frameNumber = 1;
  this.rollNumber = 1;
  this.strike = 0;
  this.spare = 0;
  this.currentScore = 0;
  this.bonusStrike = 0;
  this.bonusSpare = 0;
};

Bowling.prototype.pinsHit = function(number) {
  if(number === 10)
  {
    this.strike += 1;
    this.rollNumber + 1;
    this.nextFrame();
  }
  else{this.pins = (this.pins -= number);
    this.rollSpare();
    this.nextFrame();
  }
};

Bowling.prototype.rollSpare = function() {

  if(this.pins === 0)
  {
    this.spare += 1
  }
  else if (this.rollNumber === 1)
  {
    this.roll1 = (10 - this.pins)
  }
  else (this.rollNumber === 2)
    this.roll2 = ((10 - this.pins) - this.roll1)
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
  if(this.strike != 0)
  {
    (this.bonusStrike = (10 * this.strike) + this.bonusSrike)
    this.strike = 0;
  }
  else if(this.spare != 0)
  {
    (this.bonusSpare = (10 * this.spare) + this.bonusSpare)
    this.spare = 0
  }
  else
  {
    if(this.bonusSpare > 0)
    {
      (this.currentScore = (10 - this.pins + (this.bonusSpare)) + (this.roll1) + this.currentScore)
    }
    else if(this.bonusStrike > 0)
    {
      (this.currentScore = (10 - this.pins + (this.bonusStrike)) + (this.roll1 + this.roll2) + this.currentScore)
    };
  };
};