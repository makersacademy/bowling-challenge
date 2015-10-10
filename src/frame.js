function Frame() {
  this.rollIndex = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalFrameScore = 0;
  this.strike = false;
  this.spare = false;
}

Frame.prototype.firstRoll = function(pinsKnocked) {
  this.firstRollScore = pinsKnocked; //updates first roll score
  this.totalFrameScore += pinsKnocked;
  this.strike = (pinsKnocked == 10 ? true : false); // strike
  this.rollIndex = 1;
};

Frame.prototype.secondRoll = function(pinsKnocked) {
  this.secondRollScore = pinsKnocked; //updates second roll score
  this.totalFrameScore += pinsKnocked;
  this.spare = ((this.firstRollScore + this.secondRollScore) == 10 ? true : false); // spare?
};

// second roll which adds pins to score so this will remain at 0 which is fine as its a strike as will spare
// pushes scoreSheet
// checks game over
// resets current frame object to null
