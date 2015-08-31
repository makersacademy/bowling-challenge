Bowling = function() {
  this.scorecard = []
  this.currentFrame = []
  this.frameNumber = 1
  this.pinCount = 10
  this.score = 0
  this.gameInPlay = true
  this.bonusScore = 0
  this.framesIncurringStrikes = []
  this.framesIncurringSpares = []
};

Bowling.prototype.roll = function(num) {
  if(num > this.pinCount) {
    num = this.pinCount;
  }
  this.currentFrame.push(num);
  this.pinCount -= num;
  if (this.currentFrame.length === 2 || this.currentFrame[0] === 10) {
    this.reset();
  };
}

Bowling.prototype.reset = function() {
  this.scorecard.push(this.currentFrame);
  this.updateFramesIncurringBonus();
  this.bonusCalculator();
  this.currentFrame = [];
  this.frameNumber++;
  this.pinCount = 10;
  this.calculateScore();
};


Bowling.prototype.updateFramesIncurringBonus = function() {
  if(this.frameNumber <= 10) {
    if(this.currentFrame[0] === 10) {
      this.framesIncurringStrikes.push(this.frameNumber);
    } else if(this.currentFrame[0] + this.currentFrame[1] === 10) {
      this.framesIncurringSpares.push(this.frameNumber)
    };
  };
};

Bowling.prototype.bonusCalculator = function() {
  if(this.framesIncurringSpares.indexOf(this.frameNumber - 1) !== -1) {
    this.bonusScore += this.currentFrame[0];
    this.framesIncurringSpares.splice(0, 1);
  };
  if(this.scorecard.length > 0 && this.framesIncurringStrikes.indexOf(this.frameNumber - 2) !== -1) {
    this.bonusScore += this.scorecard[this.frameNumber - 2][0];
    this.bonusScore += this.currentFrame[0];
    this.framesIncurringStrikes.splice(0, 1);
  };
  if(this.framesIncurringStrikes.indexOf(this.frameNumber - 1) !== -1 && this.currentFrame.length === 2) {
    this.bonusScore += this.currentFrame[0];
    this.bonusScore += this.currentFrame[1];
    this.framesIncurringStrikes.splice(0, 1);
  };
};
Bowling.prototype.calculateScore = function() {
  if(this.scorecard.length > 10) {
    this.scorecard.splice(10,2)
  };
  var combinedStrikes = this.framesIncurringStrikes.concat(this.framesIncurringSpares)
  combinedStrikes.sort
  this.completedFrames = this.scorecard.slice();
  for (var i =(combinedStrikes.length - 1); i >= 0; i--) {
    this.completedFrames.splice((combinedStrikes[i] - 1), 1);
  };
  var scoreArray = []
  scoreArray = scoreArray.concat.apply(scoreArray, this.completedFrames);
  if(scoreArray.length > 0) {
    this.score = (scoreArray.reduce(function(a,b) {
        return a + b;
      })) + this.bonusScore;
  }
};