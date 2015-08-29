var BowlingScore = function(){
  this.score = 0;
  this.currentFrame = [];
  this.framePinCount = 10;
  this.bowlingFrames = [];
  this.currentBall = 1;
};

BowlingScore.prototype.roll = function(pinsHit) {
  this.currentBall++;
  this.checkValidRoll(pinsHit);
  this.framePinCount = this.framePinCount - pinsHit;
  this.currentFrame.push(pinsHit);
  if (this.currentBall == 2) {
    this.bowlingFrames.push(this.currentFrame);
  };
};

BowlingScore.prototype.checkValidRoll = function(pinsHit) {
  if (pinsHit > this.framePinCount) {
    throw new Error("only 10 pins per frame");
  }
};


