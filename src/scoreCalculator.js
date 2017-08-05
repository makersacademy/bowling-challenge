function ScoreCalculator(frames, bonuses) {
  this.frames = frames;
  this.bonuses = bonuses;
}

ScoreCalculator.prototype.framesScore = function() {
  var framesTotal = 0;
  this.frames.forEach(function(frame) {
    framesTotal += frame.getScore();
  });
  return framesTotal;
};

ScoreCalculator.prototype.bonusScores = function() {
  var bonusTotal = 0;
  var calculator = this;
  calculator.bonuses.forEach(function(bonus) {
    if (bonus.type() === "strike") {
      bonusTotal += calculator.frames[bonus.getFrameNumber() - 1].getScore();
    }
  });
  return bonusTotal;
};
