Frame = function(frameNumber, roller) {
  this.frameNumber = frameNumber;
  this.startingBallIndex = null
  this.roll = roller
  this.rollOne = null; this.rollTwo = null;
  this.rollOneLogged = false; this.rollTwoLogged = false;
  this.isStrike = false; this.isSpare = false
  this.isFinished = false;
  this.finalFrameScore = 0
};

Frame.prototype.takeTurn = function(startingBallIndex) {

  if(this.rollOne === null) {
    this.startingBallIndex = startingBallIndex;
    this.rollOne = this.roll(10);

    if(this.rollOne === 10) {
      this.isStrike = true; this.isFinished = true;
    }
  } else if(this.rollOne < 10 && this.rollTwo === null) {
    this.rollTwo = this.roll(10 - this.rollOne);
    this.isFinished = true;

    if(this.rollOne + this.rollTwo === 10) {
      this.isSpare = true;
    } else if(this.rollOne + this.rollTwo < 10) {
      this.finalFrameScore = this.rollOne + this.rollTwo
    }
  };
};
