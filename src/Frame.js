function Frame() {
  this.pinsRemaining = 10;
  this.rollsTaken = 0;
  this.totalScore = 0;
};

Frame.prototype.firstRoll = function() {
  this.checkRollAllowed(1);
  this.firstRollScore = this.roll();
  this.afterRollUpdate(this.firstRollScore);
  if (this.pinsRemaining === 0) {
    this.isStrike = true;
    return "Strike!";
  };

  return this.firstRollScore;
};

Frame.prototype.secondRoll = function() {
  this.checkRollAllowed(2);
  this.secondRollScore = this.roll();
  this.afterRollUpdate(this.secondRollScore);
  if (this.pinsRemaining === 0) {
    this.isSpare = true;
    return "Spare!";
  };

  return this.secondRollScore;
};

Frame.prototype.roll = function() {
  n = this.pinsRemaining + 1;
  return Math.floor( Math.random() * n );
};

Frame.prototype.afterRollUpdate = function(rollScore) {
  this.totalScore += rollScore;
  this.pinsRemaining -= rollScore;
  this.rollsTaken++
};

Frame.prototype.checkRollAllowed = function(rollNumber){
  if (this.rollsTaken != rollNumber - 1) {
    throw new Error("Already rolled or rolling out of turn")
  };

};

Frame.prototype.spareUpdate = function(rollScore) {
  if (this.isSpare) {
    this.totalScore += rollScore;
    this.isSpare = false;
  };

};

Frame.prototype.strikeUpdate = function(frameScore) {
  if (this.isStrike) {
    this.totalScore += frameScore;
    this.isStrike = false;
  };

};
