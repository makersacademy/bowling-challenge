function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.totalScore = 0;
}

Frame.prototype = {
  constructor: Frame,
  enterFirstRollScore: function(pins) {
    if (pins > 10) {
      throw new Error("A maximum of 10 can be scored per frame.")
    } else {
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
  },

  calculateTotalScore: function() {
    this.totalScore = this.firstRollScore + this.secondRollScore;
    return this.totalScore;
  },
}