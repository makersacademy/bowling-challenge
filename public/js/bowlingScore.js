'use strict';

function BowlingScorecard() {
  this.score = 0;
  this.frameCounter = 0;
  this.scoreArray = []
  };

  BowlingScorecard.prototype.getCurrentScore = function() {
    return this.score;
  };

  BowlingScorecard.prototype.getFrameCounter = function() {
    return this.frameCounter;
  };

  BowlingScorecard.prototype.setNewFrame = function(userInput1, userInput2, userInput3) {
    if (this.frameCounter === 9) {
      this.frame = new FinalFrame(userInput1, userInput2, userInput3)
    } else {
      this.frame = new Frame(userInput1, userInput2);
    }
    this.frameCounter += 1;
  };

  BowlingScorecard.prototype.updateGameScore = function () {
    this.score = 0;
    this.updateScoreArray();
    for (var i = 0; i < this.scoreArray.length; i++) {
      if (this.scoreArray[i] === 'X') {
        this.addStrike(i)
      } else if (this.scoreArray[i] === '/') {
        this.addSpare(i)
      } else {
        this.score += this.scoreArray[i]
      }
    };
  };

  BowlingScorecard.prototype.updateScoreArray = function () {
    this.scoreArray.push(this.frame.setBowl1Score());
    if (this.frame.bowl1 < 10 || this.frameCounter === 10) {
    this.scoreArray.push(this.frame.setBowl2Score());
    }
    if (this.frameCounter === 10 && this.frame.bowl1 + this.frame.bowl2 > 9) {
      this.scoreArray.push(this.frame.setBowl3Score());
    }
    if (this.frameCounter === 10) {
      this.FinalFrameBonusCorrection()
    }
  };

  BowlingScorecard.prototype.FinalFrameBonusCorrection = function() {
    if (this.frame.bowl1 === 10 && this.frame.bowl2 === 10) {
      this.score -= this.frame.bowl2
      this.score -= this.frame.bowl3
      this.score -= this.frame.bowl3
    }
    if (this.frame.bowl1 === 10 && this.frame.bowl2 < 10) {
      this.score -= this.frame.bowl2
      this.score -= this.frame.bowl3
    }
    if (this.frame.bowl1 + this.frame.bowl2 === 10) {
      this.score -= this.frame.bowl3
    }
  };

  BowlingScorecard.prototype.addStrike = function (i) {
    this.score += 10;
    if (this.scoreArray[i+1] === 'X') {
      this.score += 10;
    } else if (this.scoreArray[i+1] >= 0) {
      this.score += this.scoreArray[i+1];
    }
    if (this.scoreArray[i+2] === 'X') {
    this.score += 10;
    } else if (this.scoreArray[i+2] === '/') {
    this.score += 10
    this.score -= this.scoreArray[i+1]
    } else if (this.scoreArray[i+2] >= 0) {
    this.score += this.scoreArray[i+2];
    }
  };

  BowlingScorecard.prototype.addSpare = function (i) {
    this.score += 10;
    this.score -= this.scoreArray[i-1]
    if (this.scoreArray[i+1] === 'X') {
      this.score += 10;
    } else if (this.scoreArray[i+1] >= 0) {
      this.score += this.scoreArray[i+1];
    }
  };

function Frame(userInput1 = 1, userInput2 = 1) {
  this.bowl1 = userInput1;
  this.bowl2 = userInput2;
};

Frame.prototype.setBowl1Score = function() {
  if (this.bowl1 === 10) {
    return 'X';
  } else {
  return this.bowl1;
  }
};

Frame.prototype.setBowl2Score = function() {
  if (this.bowl1 < 10 && this.bowl1 + this.bowl2 === 10) {
    return '/';
  } 
  if (this.bowl1 < 10) {
    return this.bowl2;
  }
};

function FinalFrame(userInput1 = 1, userInput2 = 1, userInput3 = 1) {
  this.bowl1 = userInput1;
  this.bowl2 = userInput2;
  this.bowl3 = userInput3;
};

FinalFrame.prototype.setBowl1Score = function() {
  if (this.bowl1 === 10) {
    return 'X';
  } else {
  return this.bowl1;
  }
};

FinalFrame.prototype.setBowl2Score = function() {
  if (this.bowl1 < 10 && this.bowl1 + this.bowl2 === 10) {
    return '/';
  } 
  if (this.bowl1 < 10 && this.bowl1 + this.bowl2 < 10) {
    return this.bowl2;
  }
  if (this.bowl1 === 10 && this.bowl2 === 10) {
    return 'X'
  }
  if (this.bowl1 === 10 && this.bowl2 < 10) {
    return this.bowl2
  }
};

FinalFrame.prototype.setBowl3Score = function() {
  if (this.bowl1 === 10 && this.bowl2 === 10 && this.bowl3 === 10) {
    return 'X'
  }
  if (this.bowl1 === 10 && this.bowl2 === 10 && this.bowl3 < 10) {
    return this.bowl3
  }
  if (this.bowl1 === 10 && this.bowl2 < 10 && this.bowl3 < 10) {
    return this.bowl3
  }
  if (this.bowl1 < 10 && this.bowl3 === 10) {
    return 'X';
  }
  if (this.bowl1 + this.bowl2 === 10 && this.bowl3 < 10) {
    return this.bowl3;
  }
};