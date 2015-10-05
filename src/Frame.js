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
  this.thirdRollScore = this.rollRandom();
  if (this.thirdRollScore === 10) {
    return "Strike!";
  };

  return this.thirdRollScore;
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
  this.checkCorrectTurn(rollNumber);
  if (this.isLastFrame) {
    this.checkAllowedLastFrame(rollNumber);
  } else {
    this.checkAllowedNotLast(rollNumber);
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

Frame.prototype.checkCorrectTurn = function(rollNumber) {
  if (this.rollsTaken != rollNumber - 1) {
    throw new Error("Illegal roll");
  };

};

Frame.prototype.checkAllowedLastFrame = function(rollNumber) {
  if (rollNumber === 3 && !(this.isStrike || this.isSpare)) {
    throw new Error("Illegal roll");
  };

};

Frame.prototype.checkAllowedNotLast = function(rollNumber) {
  if (rollNumber === 3) {
    throw new Error("Illegal roll");
  } else if (rollNumber === 2 && this.isStrike) {
    throw new Error("Illegal roll");
  };

};
