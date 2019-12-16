function Game() {
  this.currentFrame = 0;
  this.frameSheet = [];
  this.scoreSheet = [];
};

Game.prototype.roll = function(frame) {
  this.frameSheet.push(frame);
  this.calculateScoreSheet();
  this.currentFrame += 1;
};

Game.prototype.calculateTotalScore = function() {
  return this.scoreSheet.reduce((total, score) => {
    return total + score;
  }, 0);
};

Game.prototype.calculateScoreSheet = function() {
  this.scoreSheet = [];
  this.frameSheet.forEach((frame, index) => {
    this.scoreSheet.push(this.calculateFrameScore(frame, index));
  }, 0);
};

Game.prototype.calculateFrameScore = function(frame, index) {
  var rolls = this.frameSheet.slice(index).flat();
  for (var i = 0; i < 2; i++) rolls.push(0);
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
