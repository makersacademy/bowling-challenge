function Bowling() {
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.totalScore = 0;
  this.strike = false;
  this.spare = false;
}

Bowling.prototype.pinsKnockedDown = function (pins) {
  if(this.currentBowl === 1) {
    this.firstBowl = pins;
  } else {
    this.secondBowl = pins;
  }
};

Bowling.prototype.addScore = function (pins) {
  this.pinsKnockedDown(pins);
  if(this.currentBowl === 1) {
    this.totalScore += this.firstBowl;
    if(this.spare || this.strike) {
      this.totalScore += this.firstBowl;
    }
  } else {
    this.totalScore += this.secondBowl;
    if(this.strike) {
      this.totalScore += this.secondBowl;
    }
  }
  this.isSpare();
  this.isStrike(pins);
  this.frameNumber(pins);
  this.changeBowlNum();
};

Bowling.prototype.frameNumber = function (pins) {
  if(this.currentBowl === 2 || this.strike === true) {
    this.currentFrame ++;
    this.resetBowlScores();
  }
};

Bowling.prototype.isStrike = function (pins) {
  if(pins === 10) {
    this.strike = true;
  } else {
    this.strike = false;
  }
};

Bowling.prototype.isSpare = function () {
  var frameTotal = this.firstBowl + this.secondBowl;
  if(frameTotal === 10) {
    this.spare = true;
  } else {
    this.spare = false;
  }
};

Bowling.prototype.changeBowlNum = function () {
  if(this.strike !== true) {
    if(this.currentBowl === 1) {
      this.currentBowl = 2;
    } else {
      this.currentBowl = 1;
    }
  }
};

Bowling.prototype.resetBowlScores = function () {
  this.firstBowl = 0;
  this.secondBowl = 0;
};
