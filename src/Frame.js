Frame = function(){
  this.pinsHitByFirstRoll = null
  this.pinsHitBySecondRoll = null
  this.pinsLeft = 10
};

Frame.prototype.roll = function(){
  if (this.pinsHitByFirstRoll == null) {
    this.firstRollResult();
  } else if ((this.pinsHitBySecondRoll == null) && !this.isStrike()){
    this.secondRollResult();
  } else {
    return "No more rolls";
  };
};

Frame.prototype.play = function(){
  this.roll();
  this.roll();
};

Frame.prototype.pinsHit = function(){
  return Math.floor(Math.random()*(this.pinsLeft + 1))
};

Frame.prototype.isStrike = function(){
  return (this.pinsHitByFirstRoll == 10)
};

Frame.prototype.isSpare = function(){
  return (this.totalHitInFrame() == 10)
};

Frame.prototype.totalHitInFrame = function(){
return (this.pinsHitByFirstRoll + this.pinsHitBySecondRoll)
};

Frame.prototype.firstRollResult = function(){
  this.pinsHitByFirstRoll = this.pinsHit();
  this.pinsLeft -= this.pinsHitByFirstRoll;
};

Frame.prototype.secondRollResult = function(){
  this.pinsHitBySecondRoll = this.pinsHit();
  this.pinsLeft -= this.pinsHitBySecondRoll;
};
