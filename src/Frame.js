function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.bonusScore = 0;
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
      if (this.checkForSpare(scorecard)) {
        var i = scorecard.frames.indexOf(this);
        // console.log(scorecard.frames);
        scorecard.frames[i - 1].bonusScore += pins;
        scorecard.frames[i - 1].calculateTotalScore();
      }
      this.firstRollScore = pins;
      this.calculateTotalScore();
    }
  },

  enterSecondRollScore: function(pins) {
    if (this.firstRollScore + pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
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
  }
}