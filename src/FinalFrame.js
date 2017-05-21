FinalFrame = function(Roll) {
  this.startingBallIndex = null
  this.roll = Roll
  this.rollOne = null; this.rollTwo = null; this.rollThree = null;
  this.rollOneLogged = false; this.rollTwoLogged = false;
  this.isStrike = false; this.isSpare = false;
  this.finalFrameScore = 0
  this.gameFinished = false
};

FinalFrame.prototype.takeTurn = function(startingBallIndex) {

  if(this.rollOne === null) {
    this.startingBallIndex = startingBallIndex;
    this.rollOne = this.roll(10);

    if(this.rollOne === 10) {
      this.isStrike = true;
    }
  } else if(this.rollOne < 10 && this.rollTwo === null) {
    this.rollTwo = this.roll(10 - this.rollOne);

    if(this.rollOne + this.rollTwo === 10) {
      this.isSpare = true;
    } else if(this.rollOne + this.rollTwo < 10) {
      this.finalFrameScore = this.rollOne + this.rollTwo;
      this.gameFinished = true;
    }
  } else if(this.rollOne === 10 && this.rollTwo === null) {
    this.rollTwo = this.roll(10);
  };

  if(this.isStrike || this.isSpare) {
    this.rollThree = this.roll(10);
    this.gameFinished = true;
  }
}
