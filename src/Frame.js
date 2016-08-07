function Frame(){
  this.ballNumber = 1;
  this.pinsLeft = 10;
}

Frame.prototype.getBallNumber = function(){
  return this.ballNumber;
};

Frame.prototype.getPinsLeft = function(){
  return this.pinsLeft;
};
