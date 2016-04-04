function Bowling() {
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.bonusBowl = 0;
  this.totalScore = 0;
  this.strike = false;
  this.spare = false;
  this.finalFrame = false;
}

Bowling.prototype.pinsKnockedDown = function (pins) {
  if(this.finalFrame && this.currentBowl === 2 && (this.strike || this.spare)) {
    this.bonusBowl = pins;
  } else if (this.currentBowl === 1) {
    this.firstBowl = pins;
  } else {
    this.secondBowl = pins;
  }
};

Bowling.prototype.addScore = function (pins) {
  this.pinsKnockedDown(pins);
  if(this.currentBowl === 1) {
    this.totalScore += this.firstBowl;
    if(this.strike) {
      this.totalScore += (this.firstBowl * 2);
    } else if(this.spare) {
      this.totalScore += this.firstBowl;
    }
  } else {
    this.totalScore += this.secondBowl;
    this.isSpare();
  }
  this.isStrike(pins);
  this.changeBowlNum();
  this.frameNumber(pins);
  this.isFinalFrame();
};

Bowling.prototype.tenthFrame = function (pins) {
  this.pinsKnockedDown(pins);
  if(this.currentBowl === 3 && (this.strike || this.spare)) {
    this.totalScore += this.bonusBowl;
    if(this.strike) {this.totalScore += this.bonusBowl;}
  } else if (this.currentBowl === 1) {
    this.totalScore += this.firstBowl;
    this.isStrike(pins);
    if(this.strike) {this.totalScore += (this.firstBowl * 2);}
  } else if (this.currentBowl === 2) {
    this.totalScore += this.secondBowl;
    this.isSpare();
    if(this.strike) {this.totalScore += (this.secondBowl * 2);}
  }
  this.changeBowlNum();
};

Bowling.prototype.frameNumber = function (pins) {
  if(this.currentBowl === 2 || this.strike === true) {
    this.currentFrame ++;
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
  if(this.finalFrame && this.currentBowl === 2 && (this.strike || this.spare)) {
    this.currentBowl = 3;
  } else if(this.currentBowl === 1 && (this.strike !== true || (this.finalFrame && this.strike))) {
    this.currentBowl = 2;
  } else if(this.currentBowl === 2 || this.strike) {
    this.currentBowl = 1;
  }
};

Bowling.prototype.isFinalFrame = function () {
  if(this.currentFrame === 10) {
    this.finalFrame = true;
  }
};
