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
      if (this.checkForSpare(scorecard)) {
        var i = scorecard.frames.indexOf(this);
        scorecard.frames[i - 1].bonusScore += pins;
        scorecard.frames[i - 1].calculateTotalScore();
      }
      this.firstRollScore = pins;
      this.calculateTotalScore();
    }
    if (pins === 10) {
      this.strikeFlag = true;
    }
  },

  enterSecondRollScore: function(pins, scorecard) {
    if (this.firstRollScore + pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
      if(this.checkForPreviousFrameStrike(scorecard)) {
        var i = scorecard.frames.indexOf(this);
        scorecard.frames[i - 1].bonusScore += (pins + this.firstRollScore);
        scorecard.frames[i - 1].calculateTotalScore();
      }
      
      this.secondRollScore = pins;
      this.calculateTotalScore();
    }
    if (this.totalScore === 10) {
      this.spareFlag = true;
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
  }
}