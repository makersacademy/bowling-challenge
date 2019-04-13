function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.bonusScore = 0;
  this.totalScore = 0;
  this.spareFlag = false;
  this.strikeFlag = false;
}

Frame.prototype = {
  constructor: Frame,
  enterFirstRollScore: function(pins, scorecard) {
    if (pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
      this.addToScorecard(scorecard)
      this.firstRollScore = pins;
      if (pins === 10) {
        this.strikeFlag = true;
      }
      this.calculateTotalScore();
      if (this.checkForSpare(scorecard)) {
        var i = scorecard.frames.indexOf(this);
        scorecard.frames[i - 1].bonusScore += pins;
        scorecard.frames[i - 1].calculateTotalScore();
      }
      if (this.checkForPreviousFrameStrike(scorecard)) {
        if (this.checkForStrikeTwoFramesPrevious(scorecard)) {
          var i = scorecard.frames.indexOf(this)
          scorecard.frames[i - 2].bonusScore += (pins + 10);
          scorecard.frames[i - 2].calculateTotalScore();
        }
      }
    }
  },

  enterSecondRollScore: function(pins, scorecard) {
    if (this.firstRollScore + pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
      this.secondRollScore = pins;
      this.calculateTotalScore();
      if (this.totalScore === 10) {
        this.spareFlag = true;
      }
      if(this.checkForPreviousFrameStrike(scorecard)) {
        var i = scorecard.frames.indexOf(this);
        scorecard.frames[i - 1].bonusScore += (pins + this.firstRollScore);
        scorecard.frames[i - 1].calculateTotalScore();
      }
    }
  },

  calculateTotalScore: function() {
    this.totalScore = this.firstRollScore + this.secondRollScore + this.bonusScore;
    return this.totalScore;
  },

  addToScorecard: function(scorecard) {
    scorecard.captureFrame(this);
  },

  checkForSpare: function(scorecard) {
    return scorecard.isPreviousFrameSpare(this);
  },

  checkForPreviousFrameStrike: function(scorecard) {
    return scorecard.isPreviousFrameStrike(this);
  },

  checkForStrikeTwoFramesPrevious: function(scorecard) {
    return scorecard.isTwoFramesPreviousStrike(this);
  },

  enter10thFirstBonusRollScore: function(pins, scorecard) {
    if (scorecard.frames.length < 10) {
      throw new Error("This bonus roll is only available in the 10th frame");
    }
    if (scorecard.frames[9].totalScore < 10) {
      throw new Error("This bonus roll is only available after 10th frame strike or spare is scored");
    }
  },

  enter10thSecondBonusRollScore: function(pins, scorecard) {
    if (scorecard.frames.length < 10) {
      throw new Error("This bonus roll is only available in the 10th frame");
    }
    if (scorecard.frames[9].firstRollScore < 10) {
      throw new Error("This bonus roll is only available after 10th frame strike is scored");
    }
  }
}