function Frame() {
  this.pinsRemaining = 10;
  this.rollsTaken = 0;
  this.totalScore = 0;
};

Frame.prototype.firstRoll = function() {
  this.checkRollAllowed(1);
  this.firstRollScore = this.rollRandom();
  this.postRollUpdate(this.firstRollScore);
  if (this.firstRollScore === 10) {
    this.isStrike = true;
    return "Strike!";
  };

  return this.firstRollScore;
};

Frame.prototype.secondRoll = function() {
  this.checkRollAllowed(2);
  this.secondRollScore = this.rollRandom();
  this.postRollUpdate(this.secondRollScore);
  if (this.isLastFrame && this.isStrike && this.secondRollScore === 10) {
    return "Strike!";
  } else if (this.totalScore === 10) {
    this.isSpare = true;
    return "Spare!";
  };

  return this.secondRollScore;
};

Frame.prototype.thirdRoll = function() {
  this.checkRollAllowed(3);
};

Frame.prototype.rollRandom = function() {
  n = this.pinsRemaining + 1;
  return Math.floor( Math.random() * n );
};

Frame.prototype.postRollUpdate = function(rollScore) {
  this.totalScore += rollScore;
  this.pinsRemaining -= rollScore;
  this.rollsTaken++;
  if (this.isLastFrame) {
    this.lastFrameUpdate();
  };

};

Frame.prototype.checkRollAllowed = function(rollNumber){
  if (this.isLastFrame && this.rollsTaken === rollNumber - 1) {
    return true;
  } else if (this.rollsTaken != rollNumber - 1 || this.isStrike) {
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

Frame.prototype.setLastFrame = function() {
  this.isLastFrame = true;
};

Frame.prototype.lastFrameUpdate = function() {
  if (this.pinsRemaining === 0) {
    this.pinsRemaining = 10;
  };

};
