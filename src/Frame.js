function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalScore = 0;
  this.spareFlag = false;
}

Frame.prototype = {
  constructor: Frame,
  enterFirstRollScore: function(pins, scorecard = new Scorecard) {
    if (pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
      this.addToScorecard(scorecard)
      this.checkForSpare(scorecard);
      this.firstRollScore = pins;
      this.totalScore = pins;
    }
  },

  enterSecondRollScore: function(pins) {
    if (this.firstRollScore + pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
      this.secondRollScore = pins;
      this.totalScore = this.firstRollScore + pins;
    }
    if (this.totalScore === 10) {
      this.spareFlag = true;
    }
  },

  calculateTotalScore: function() {
    this.totalScore = this.firstRollScore + this.secondRollScore;
    return this.totalScore;
  },

  addToScorecard: function(scorecard) {
    scorecard.captureFrame(this);
  },

  checkForSpare: function(scorecard) {
    scorecard.isPreviousFrameSpare(this);
  }
}