function Bowling() {
  this.scoreSheet = {1: [], 2: [],
                     3: [], 4: [],
                     5: [], 6: [],
                     7: [], 8: [],
                     9: [], 10: []
                    };
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.totalScore = 0;
  this.strike = false;
  this.spare = false;
  this.firstTurn = true;
}

// Bowling.prototype.calculateScore = function (pins) {
//   if(this.strike) {
//     this.totalScore += pins * 2;
//   } else {
//     this.totalScore += pins;
//   }
//     this.isStrike(pins);
//     this.addScore(pins);
//     this.frameNumber(pins);
// };

Bowling.prototype.pinsKnockedDown = function (pins) {
  if(this.currentBowl === 1) {
    this.firstBowl = pins;
  } else {
    this.secondBowl = pins;
  }
  // this.isStrike(pins);
  // this.isSpare();
  // if(this.currentBowl === 2 || this.strike === true) {
  //   this.addScore();
  //   this.resetBowlScores();
  // }
  // this.frameNumber(pins);
  // this.changeBowlNum();
};

Bowling.prototype.addScore = function (pins) {
  // this.scoreSheet[this.currentFrame].push(pins);
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
  // if(this.strike !== true) {
  //   this.totalScore += this.firstBowl + this.secondBowl;
  // } else {
  //   var totalFrame = this.firstBowl + this.secondBowl;
  //   this.totalScore += totalFrame * 2
  // }
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
