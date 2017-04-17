var Player = function() {
  this.scorecard = new Scorecard();
  this.points = function() {
    return this.scorecard.currentSum;
  };
};

Player.prototype.notesPinsDown = function(pinsDownNumber) {
  updateScorecardList(pinsDownNumber);
};