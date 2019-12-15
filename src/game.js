function Game() {
  this.frameSheet = [];
  this.scoreSheet = [];
  this.totalScore = 0;
};

Game.prototype.roll = function(frame) {
  this.frameSheet.push(frame);
};

Game.prototype.getTotalScore = function() {
  this.calculateTotalScore();
  return this.totalScore;
};

Game.prototype.calculateTotalScore = function() {
  this.calculateScoreSheet();
  this.totalScore = this.scoreSheet.reduce((total, score) => {
    return total + score;
  }, 0);
};

Game.prototype.calculateScoreSheet = function() {
  this.frameSheet.forEach((frame, index) => {
    this.scoreSheet.push(this.calculateFrameScore(frame, index));
  }, 0);
};

Game.prototype.calculateFrameScore = function(frame, index) {
  var rolls = this.frameSheet.slice(index).flat();
  var frameScore = 0;

  function isStrike() {
    return frame[0] === 10;
  };

  function isSpare() {
    return frame[0] + frame[1] === 10;
  };

  function frameSum() {
    return frame.reduce((total, roll) => total + roll, 0);
  };

  if (isStrike()) { frameScore = 10 + rolls[1] + rolls[2]; }
  else if (isSpare()) { frameScore += 10 + rolls[2]; }
  else { frameScore = frameSum(); }
  return frameScore;
};
