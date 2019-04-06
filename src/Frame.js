function Frame() {
  this.firstRollScore = 0;
  this.secondRollScore = 0;
  this.basicScore = 0;
  this.totalScore = 0;
}

Frame.prototype = {
  constructor: Frame,
  enterFirstRollScore: function(pins) {
    this.firstRollScore = pins;
    this.basicScore = pins;
    this.totalScore = pins;
  },
  enterSecondRollScore: function(pins) {
    this.secondRollScore = pins;
    this.basicScore = this.firstRollScore + pins;
    this.totalScore = this.firstRollScore + pins;
  },
}