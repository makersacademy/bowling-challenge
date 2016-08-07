function Frame(){
  this.rollNumber = 1;
  this.pinsStanding = 10;
  this.firstPinsDown = 0;
  this.secondPinsDown = 0;
}

Frame.prototype.getRollNumber = function(){
  return this.rollNumber;
};

Frame.prototype.getPinsStanding = function(){
  return this.pinsStanding;
};

Frame.prototype.firstRoll = function(){
  this.rollNumber = 2;
  this.firstPinsDown = Math.floor(Math.random()*11);
  this.pinsStanding -= this.firstPinsDown;
};

Frame.prototype.getFirstPinsDown = function(){
  return this.firstPinsDown;
};

Frame.prototype.secondRoll = function(){
  this.secondPinsDown = Math.floor(Math.random()*11);
  this.pinsStanding -= this.secondPinsDown;
};

Frame.prototype.getSecondPinsDown = function(){
  return this.secondPinsDown;
};
