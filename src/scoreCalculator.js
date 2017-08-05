function ScoreCalculator(frames, bonuses) {
  this.frames = frames;
  this.bonuses = bonuses;
}

ScoreCalculator.prototype.totalScore = function() {
  return this.framesScore() + this.bonusScores();
};

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
      bonusTotal += calculator._strikeHandler(bonus);
    } else if (bonus.type() === "spare") {
      bonusTotal += calculator._getFrameForBonus(bonus).getFirstRoll();
    }
  });
  return bonusTotal;
};

ScoreCalculator.prototype._strikeHandler = function(bonus) {
  var frame = this._getFrameForBonus(bonus);
  var strikeBonus = 0;
  if (frame.isStrike()) {
    strikeBonus += this._getDoubleStrikeBonus(bonus.getFrameIndex());
  } else {
    strikeBonus += frame.getScore();
  }
  return strikeBonus;
};

ScoreCalculator.prototype._getFrameForBonus = function(bonus) {
  return this.frames[bonus.getFrameIndex()];
};

ScoreCalculator.prototype._getDoubleStrikeBonus = function(frameIndex) {
  return this.frames[frameIndex].getFirstRoll() + this.frames[frameIndex - 1].getFirstRoll();
};
