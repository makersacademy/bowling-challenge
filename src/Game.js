var Game = function() {
  this.allFrames = [];
  this.score = 0;
};


Game.prototype.totalScore = function() {
  var totalScore = 0;
  var frames = this.scoreFrames;

  for (var i = 0; i < frames.length; ++i) {
    totalScore += frames[i].score;
    if (i > 9) {
      totalScore -= frames[i].score;
    }
  }
  return totalScore;
};

Game.prototype.rollSpare = function(currentFrame) {
  var frames = this.turn;

  if (frames[frames.length - 1].isSpare()) {
    this.turn(roll1, roll2, currentFrame.rollBonus);
  }
};

Game.prototype.rollStrike = function(currentFrame) {
  var frames = this.turn;

  if (frames[frames.length - 2].isStrike()) {
    this.turn(roll1, roll2, currentFrame.roll1, currentFrame.roll2);
  }
};