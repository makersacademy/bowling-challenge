"use strict";

function Game() {
  this.throws = [];
  this.displayThrows = []
  this.throwsRemaining = 21;
  this.frameRunningTotals = [];
  this.totalScore = 0;
  this.displayTotal = 0;
  this.frameNumber = 1;
  this.throwNumber = 1;
}

Game.prototype.throw = function(score) {
  if (this.throwsRemaining === 0) {
    this.resetGame();
  }

  var index = this.throws.length;

  if (this.throwsRemaining === 2) {
    this.frameTenThrowTwo(score, index);
  } else if (this.throwsRemaining === 1) {
    this.frameTenThrowThree(score, index);
  } else {
    this.normalThrow(score, index);
  }
};

Game.prototype.normalThrow = function(score, index) {
  this.addScore(score, index);
  this.addToFrameTotals(score);

  var frameIndex = this.frameRunningTotals.length;

  this.checkForStrikePrevs(score, index);
  this.checkForStrikePrevsPrevs(score, index, frameIndex);
  this.checkForSparePrevs(score, index);

  if (index > 0 && this.throwNumber === 2 &&
    !this.isSpare(score, index)) {
    this.displayTotal += score + this.throws[index - 1];
  }
  if (this.throwNumber === 2 || this.isStrike(score) && this.throwsRemaining > 3) {
    this.frameNumber++;
  }

  this.reduceThrowsRemaining(score);

  if (this.throwsRemaining % 2 === 0) {
    this.throwNumber = 2;
  } else {
    this.throwNumber = 1;
  }

  index += 1;
};

Game.prototype.frameTenThrowTwo = function(score, index) {

  this.frameNumber = 10
  this.totalScore += score;
  this.throws.push(score);
  if (score === 10 && this.throws[index -1] === 10) {
    this.displayThrows.push("X")
  } else if (this.isSpare(score,index)) {
    this.displayThrows.push("/")
  } else {
    this.displayThrows.push(score)
  }
  this.frameRunningTotals[9] += score;

  // If not a strike prevs or a spare remove last bonus throw
  if (this.throws[index - 1] !== 10 && this.throws[index - 1] + score < 10) {
    this.throwsRemaining -= 1;
    this.throwNumber = "END OF GAME"
  } else {
    this.throwNumber = 3
  }

  // check for PrevsPrevsStrikeAlternative
  if (this.throws[index - 2] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[8] += score;
    this.displayTotal += this.frameRunningTotals[8];
  }

  this.throwsRemaining -= 1;
  index += 1;
};

Game.prototype.frameTenThrowThree = function(score, index) {
  this.frameNumber = 10
  this.totalScore += score;
  this.throws.push(score);
  if (score === 10) {
    this.displayThrows.push("X")
  } else {
    this.displayThrows.push(score)
  }
  this.frameRunningTotals[-1] += score;
  this.throwsRemaining -= 1;
  this.displayTotal = this.totalScore
  index += 1;
};

Game.prototype.reduceThrowsRemaining = function(score) {
  if (this.isStrike(score) && this.throwsRemaining > 3) {
    this.throwsRemaining -= 2;
  } else {
    this.throwsRemaining -= 1;
  }
};

Game.prototype.checkForSparePrevs = function(score, index) {
  if (index > 1 && this.throwNumber === 1 &&
    this.throws[index - 2] + this.throws[index - 1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[this.frameNumber - 2] += score;
    this.displayTotal += score + this.throws[index - 1] + this.throws[index - 2];
  }
};

Game.prototype.checkForStrikePrevs = function(score, index) {
  if (this.isStrike(this.throws[index - 1]) && this.displayThrows[index -1] != "/") {
    this.totalScore += score;
    this.frameRunningTotals[this.frameNumber - 2] += score;
  }
};

Game.prototype.checkForStrikePrevsPrevs = function(score, index) {
  if (index > 1 && this.throws[index - 2] === 10 && this.displayThrows[index -2] !== "/") {
    this.totalScore += score;
    this.displayTotal += score + this.throws[index - 1] + 10
    if (this.throwNumber === 1) {
      this.frameRunningTotals[this.frameNumber - 3] += score;
    } else {
      this.frameRunningTotals[this.frameNumber - 2] += score;
    }
  }
};

Game.prototype.addToFrameTotals = function(score) {
  if (this.throwNumber === 1) {
    this.frameRunningTotals.push(score);
  } else {
    this.frameRunningTotals[this.frameNumber -1] += score;
  }
};

Game.prototype.addScore = function(score, index) {
  this.totalScore += score;
  this.throws.push(score);
  if (this.isStrike(score)) {
    this.displayThrows.push("X")
  } else if (this.throwNumber === 2 && this.isSpare(score,index)) {
    this.displayThrows.push("/")
  } else {
    this.displayThrows.push(score)
  }
};

Game.prototype.resetGame = function() {
  this.throws = [];
  this.displayThrows = [];
  this.throwsRemaining = 21;
  this.frameRunningTotals = [];
  this.totalScore = 0;
  this.displayTotal = 0;
  this.frameNumber = 1;
  this.throwNumber = 1;
};


Game.prototype.isStrike = function (score) {
  if (score === 10 && this.throwNumber === 1) {
    return true
  } else {
    return false
  }
};

Game.prototype.isSpare = function (score, index) {
  if (score + this.throws[index - 1] === 10) {
    return true
  } else {
    return false
  }
};
