function Frame {
  this.rollCount = 0;
  this.currentPinsAvailable = 10;
  this.frameScores = [];
  this.currentFrameNumber =
}

Frame.prototype.firstRoll = function (rollScore) {
  this.currentFrameNumber += 1;
  this.updateScoresheet(rollScore);
  if (this.currentFrameNumber > 1) {
    this.spareRollOwed(rollScore);
  }
  this.wipePins(rollScore);
};


Frame.prototype.wipePins = function (rollScore) {
  this.currentPinsAvailable -= rollScore;
};

Frame.prototype.isFrameOver = function () {
  return this.rollCount === 2 || this.currentPinsAvailable === 0;
};

Frame.prototype.finishFrame = function (rollScore) {
    this.updateScoresheet(rollScore);
    this.currentPinsAvailable = 10;
};

Frame.prototype.resetRollCount = function () {
  if (this.isFrameOver()){
    this.rollCount = 0
  } else {
    this.rollCount = 1
  }
};


Frame.prototype.isSpare = function (rollScore) {
  return (this.currentPinsAvailable - rollScore === 0) &&
  this.scoreSheet[this.currentFrameNumber].length === 1
};

Frame.prototype.isStrike = function (rollScore) {
  return rollScore === 10
};
