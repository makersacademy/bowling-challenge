var checker = new Checker();

function Scorecard() {
  this._score = [0];
  this._allFrames = [];
}

// Record Scores
Scorecard.prototype.firstThrow = function(score) {
  this._firstThrow = score;
};

Scorecard.prototype.secondThrow = function(score) {
  let pinsRemaining = 10 - this._firstThrow;
  if (this._firstThrow + score > 10) {
    throw new Error(`There are only ${pinsRemaining} pins Pins remaining`);
  } else {
    this._secondThrow = score;
  }
};

Scorecard.prototype.resetThrows = function() {
  this._firstThrow = 0;
  this._secondThrow = 0;
};

Scorecard.prototype.addToFrames = function() {
  this._allFrames.push([this._firstThrow, this._secondThrow]);
  this.resetThrows();
};

Scorecard.prototype.recordStrike = function() {
  this._allFrames.push([10, 0]);
};

Scorecard.prototype.setScore = function(index, number) {
  this._score[index] = number;
};

Scorecard.prototype.updateScores = function() {
  for (var i = 0; i < this._allFrames.length; i++) {
    var firstScore = this._allFrames[i][0];
    var secondScore = this._allFrames[i][1];
    if (i === 0) {
      if (checker.currentRollStrikeOrSpare(firstScore, secondScore)) {
        this.setScore(i, 0);
      } else {
        this.setScore(i, firstScore + secondScore);
      }
    }
    if (i > 0) {
      let lastFirstScore = this._allFrames[i - 1][0];
      let lastSecondScore = this._allFrames[i - 1][1];
      // If last score was a stike and current is not
      if (checker.lastRollStrikeThisRollNot(lastFirstScore, firstScore)) {
        this.setScore(i - 1, lastFirstScore + firstScore + secondScore);
      }
      // Last score was spare
      else if (checker.spareCheck(lastFirstScore, lastSecondScore)) {
        this.setScore(i - 1, lastFirstScore + lastSecondScore + firstScore);
      }
      // Current score is a Strike or Spare
      if (checker.currentRollStrikeOrSpare(firstScore, secondScore)) {
        this.setScore(i, 0);
      } else {
        this.setScore(i, firstScore + secondScore);
      }
    }
    if (i > 1) {
      // Checks that only apply after third frame
      let lastLastFirstScore = this._allFrames[i - 2][0];
      let lastFirstScore = this._allFrames[i - 1][0];
      // Double Strike
      if (
        checker.lastTwoStrikesThisRollNot(
          lastLastFirstScore,
          lastFirstScore,
          firstScore
        )
      ) {
        this.setScore(i - 2, 20 + firstScore);
      }
      // Triple Strike
      if (
        checker.tripleStrike(lastLastFirstScore, lastFirstScore, firstScore)
      ) {
        this.setScore(i - 2, 30);
      }
    }
    if (i === 9) {
      let lastFirstScore = this._allFrames[i - 1][0];
      // Triple Strike
      if (checker.tripleStrike(lastFirstScore, firstScore, secondScore)) {
        this.setScore(i - 1, 30);
      }
      // Frame 9 checks
      if (checker.currentRollStrikeOrSpare(firstScore, secondScore)) {
        var thirdScore = this._allFrames[i][2];
        this.setScore(i, firstScore + secondScore + thirdScore);
      } else {
        this.setScore(i, firstScore + secondScore);
      }
    }
  }
};

Scorecard.prototype.calculateTotal = function(turn) {
  let allScores = this._score;
  let total = allScores.reduce((total, amount) => total + amount);
  return total;
};
