var BowlingGame = function () {
  this.frames = [];
  this.totalScore = 0;
  this._gameSetup();
};

BowlingGame.prototype._gameSetup = function () {
  this._createFrames();
  this._frameNumber();
  this._setupLastFrame();
};

BowlingGame.prototype._createFrames = function () {
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame(this))
  };
};

BowlingGame.prototype._frameNumber = function () {
  for (var n = 0; n < 10; n++) {
    this.frames[n].number = n + 1
  };
};

BowlingGame.prototype._setupLastFrame = function () {
  this.frames[9].thirdRoll = 0
};

BowlingGame.prototype.frameScoreBonuses = function () {
  for (var i = 0; i < this.frames.length; i++) {
    var currentFrame = this.frames[i];
    currentFrame.bonusScoreCalculation();
  };
};

BowlingGame.prototype.totalScoreBonuses = function () {
  this.frameScoreBonuses();
  var allBonuses = this.frames.reduce(function(totalBonus, frameBonus) {
    return totalBonus + frameBonus.bonusScore;
  }, 0);
  return allBonuses;
};

BowlingGame.prototype.framesBaseScores = function () {
  for (var i = 0; i < this.frames.length; i++) {
    var currentFrame = this.frames[i];
    currentFrame._setFrameScore();
  };
};

BowlingGame.prototype.totalBaseScore = function () {
  this.framesBaseScores();
  var allScores = this.frames.reduce(function(totalScore, frameScore) {
    return totalScore + frameScore.score;
  }, 0);
  return allScores;
};

BowlingGame.prototype.finalScore = function () {
  return this.totalScoreBonuses() + this.totalBaseScore();
};
