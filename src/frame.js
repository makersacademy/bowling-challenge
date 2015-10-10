function Frame() {
  this.rollIndex = 0;
  this.firstRollScore = 0;
  this.secondRollScore = 0;
}

Frame.prototype.firstRoll = function(pinsKnocked) {
  this.firstRollScore = pinsKnocked;
};

Frame.prototype.secondRoll = function(pinsKnocked) {
  this.secondRollScore = pinsKnocked;
};
