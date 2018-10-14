'use strict';

function Scorecard() {
  this.currentRoll = 0;
  this.pointsTracker = [];
}

Scorecard.prototype.roll = function (knockedPins) {
  this.pointsTracker[this.currentRoll++] = knockedPins;
};

Scorecard.prototype.totalScore = function () {
  var score = 0;
  var frameIndex = 0;

  for (var frame = 0; frame < 10; frame++) {
    if (this.isStrike(frameIndex)) {
      score += 10 + this._strikeBonus(frameIndex);
      frameIndex++;
    } else if (this.isSpare(frameIndex)) {
      score += 10 + this._spareBonus(frameIndex);
      frameIndex += 2;
    } else {
      score += this.sumOfFrameScore(frameIndex);
      frameIndex += 2;
    }
  }
  return score;
};

Scorecard.prototype.sumOfFrameScore = function (frameIndex) {
  return this.pointsTracker[frameIndex] + this.pointsTracker[frameIndex + 1];
};

Scorecard.prototype.getPointsTracker = function () {
  return this.pointsTracker;
};

Scorecard.prototype.getCurrentRoll = function () {
  return this.currentRoll;
};

Scorecard.prototype.isStrike = function (frameIndex) {
  return this.pointsTracker[frameIndex] === 10;
};

Scorecard.prototype.isSpare = function (frameIndex) {
  return this.pointsTracker[frameIndex] + this.pointsTracker[frameIndex + 1] === 10;
};

Scorecard.prototype._strikeBonus = function (frameIndex) {
  return this.pointsTracker[frameIndex + 1] + this.pointsTracker[frameIndex + 2];
};

Scorecard.prototype._spareBonus = function (frameIndex) {
  return this.pointsTracker[frameIndex + 2];
};
