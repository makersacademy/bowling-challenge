function Frame() {
  this.rollIndex = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.strike = false;
  this.spare = false;
}

Frame.prototype.firstRoll = function(pinsKnocked) {
  this.firstRollScore = pinsKnocked; //updates first roll score
  this.strike = (pinsKnocked == 10 ? true : false); // strike?
  this.rollIndex = 1;
};

Frame.prototype.secondRoll = function(pinsKnocked) {
  this.secondRollScore = pinsKnocked; //updates second roll score
  this.spare = ((this.firstRollScore + this.secondRollScore) == 10 ? true : false); // spare?
};
