function Game() {
  this.allFrames = [];
  this.framesScores = [];
  this.overallScore = 0;
};

// example list_of_scores = [3,5,10,5,5,3,5,6,2,2,3,5,4,7,1,7,1,6,2]

Game.prototype.loadFrames = function(list_of_scores) {
  while (list_of_scores.length != 0) {
    frame = new Frame();
    frame.roll(list_of_scores.shift());
    if (!frame.isComplete()) {
      frame.roll(list_of_scores.shift());
    };
    this.allFrames.push(frame);
  };
  return this.allFrames;
};

Game.prototype.calculateScores = function() {
  for (i = 0; i < 10; i++) {
    let currentFrame = this.allFrames[i];
    let nextFrame = this.allFrames[i+1];
    let nextNextFrame = this.allFrames[i+2];
    let score = 0;
    if (currentFrame.isStrike() && i!=9) {
      if (nextFrame.isStrike()) {
        if (nextNextFrame.isStrike()) {
          score = currentFrame.calculateScore() + nextFrame.calculateScore() + nextNextFrame.calculateScore();
        } else {
          score = currentFrame.calculateScore() + nextFrame.calculateScore() + nextNextFrame.rolls[0];
        };
      } else {
        score = currentFrame.calculateScore() + nextFrame.calculateScore();
      };
    } else if (currentFrame.isSpare() && i!=9) {
      score = currentFrame.calculateScore() + nextFrame.rolls[0];
    } else {
      score = currentFrame.calculateScore();
    };
    this.framesScores.push(score);
  };
  return this.framesScores;
};

Game.prototype.calculateOverallScore = function() {
  for (i=0; i < this.framesScores.length; i++) {
    this.overallScore += this.framesScores[i];
  }
  return (this.overallScore + this.addExtraBonus());
};

Game.prototype.addExtraBonus = function() {
  if (this.allFrames[9].isStrike()) {
    return 20;
  } else if (this.allFrames[9].isSpare()) {
    return 10;
  };
  return 0;
};
