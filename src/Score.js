function Score(frameSet) {
  this.frameSet = frameSet;
  this.scorecard = {
    frame1 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame2 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame3 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame4 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame5 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame6 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame7 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame8 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame9 : { roll1 : 0, roll2 : 0, frameScore : 0 },
    frame10 : { roll1 : 0, roll2 : 0, frameScore : 0 },
  };
}

Score.prototype.currentFrame = function() {
  return this.frameSet.currentFrame;
};

Score.prototype.previousFrame = function() {
  return this.frameSet.previousFrame;
};

Score.prototype.currentRoll1Score = function() {
  return this.scorecard[this.currentFrame()].roll1;
};

Score.prototype.currentRoll2Score = function() {
  return this.scorecard[this.currentFrame()].roll2;
};

Score.prototype.currentFrameScore = function() {
  return this.currentRoll1Score() + this.currentRoll2Score();
};

Score.prototype.calculateFrameScore = function() {
  this.scorecard[this.currentFrame()].frameScore = this.currentFrameScore();
  if(this.currentFrame() === "frame1") { return null; }
  else {
    this.addStrikeBonuses();
    this.addSpareBonuses();
  }
};

Score.prototype.previousRoll1Score = function() {
  return this.scorecard[this.previousFrame()].roll1;
};

Score.prototype.previousRoll2Score = function() {
  return this.scorecard[this.previousFrame()].roll2;
};

Score.prototype.addStrikeBonuses = function() {
  if(this.previousRoll1Score() === 10 || this.previousRoll2Score() === 10) {
    this.scorecard[this.previousFrame()].frameScore += this.currentFrameScore();
  }
};

Score.prototype.addSpareBonuses = function() {
  if(this.noStrike() && (this.previousRoll1Score() + this.previousRoll2Score()) === 10) {
    this.scorecard[this.previousFrame()].frameScore += this.currentRoll1Score();
  }
};

Score.prototype.noStrike = function() {
return (this.previousRoll1Score() !== 10) && (this.previousRoll2Score() !== 10);
};

Score.prototype.frame10Strike = function() {
  return this.currentRoll1Score() === 10 || this.currentRoll2Score() === 10
};

Score.prototype.frame10NoStrike = function() {
  return this.currentRoll1Score() !== 10 && this.currentRoll2Score() !== 10
};

Score.prototype.frame10Spare = function() {
  return this.frame10NoStrike() && (this.currentRoll1Score() + this.currentRoll2Score()) === 10
};
