function Game() {
  this.frame = [];
  this.frameScores = [];
  this.totalScore = 0;
};

Game.prototype.roll = function(frame) {
  this.frame.push(frame);
};

Game.prototype.score = function() {
  this.frame.forEach((frame, index) => {
    this.frameScores.push(this.calculateFrameScore(frame, index));
  });
  return this.totalScore = this.frameScores.reduce((total, score) => {
    return total + score;
  });
};

Game.prototype.calculateFrameScore = function(frame, index) {
  var rolls = this.frame.slice(index).flat();
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
