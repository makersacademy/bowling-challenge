var ScoreCalculator = function() {
  this.allFrames =[];
  this.frameScores =[];
  this.totalScore = 0;
};

ScoreCalculator.prototype.calculateTotalScore = function(allFrames) {
  this.prepareFrameScoring(allFrames);
  this.calculateBaseScore();
  this.calculateSpareScore();
  this.calculateSingleStrikeScore();
  this.calculateDoubleStrikeScore();
  this.calculateTotalScoreFromFrames();
};

//Adds to current frame
ScoreCalculator.prototype.calculateBaseScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    this.declareVariablesCurrentFrame(frameIndex);
    for( var roll of this.currentFrame) {
      this.frameScores[frameIndex] += roll;
    }
  }
};

//Adds to previous frame
ScoreCalculator.prototype.calculateSpareScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    this.declareVariablesPreviousFrame(frameIndex);
    if ((this.previousFirstRollScore < 10) && (this.previousFrameScore === 10 )) {
      this.frameScores[frameIndex - 1] += this.allFrames[frameIndex][0];
    }
  }
};

//Adds to previous frame
ScoreCalculator.prototype.calculateSingleStrikeScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    this.declareVariablesPreviousFrame(frameIndex);
    if (this.previousFirstRollScore === 10 && this.currentFirstRollScore !== 10) {
        this.frameScores[frameIndex - 1] += (this.frameScore(this.currentFrame));
    }
    else if (this.previousFirstRollScore === 10 && frameIndex === 9) {
        this.frameScores[frameIndex - 1] += (this.frameScore(this.currentFrame));
    }
  }
};

//Adds to previous 2 frame
ScoreCalculator.prototype.calculateDoubleStrikeScore = function() {
  for( var frameIndex = 2, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    this.declareVariablesPrevious2Frame(frameIndex);
    if (this.previousFirstRollScore === 10 && this.previous2FirstRollScore === 10) {
          this.frameScores[frameIndex - 2] +=(this.previousFirstRollScore + this.currentFirstRollScore);
    }
    }
};

ScoreCalculator.prototype.frameScore = function(frame) {
  return frame[0]+frame[1];
};

ScoreCalculator.prototype.firstRollScore = function(frame) {
  return frame[0];
};

ScoreCalculator.prototype.prepareFrameScoring = function(allFrames) {
  this.frameScores =[];
  this.allFrames = allFrames;
  for( var frame of this.allFrames) {
    this.frameScores.push(0);
  }
};

ScoreCalculator.prototype.calculateTotalScoreFromFrames = function() {
  this.totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
};

ScoreCalculator.prototype.declareVariablesPrevious2Frame = function(frameIndex) {
  this.previous2Frame = this.allFrames[frameIndex - 2];
  this.previous2FirstRollScore = this.firstRollScore(this.previous2Frame);
  this.declareVariablesPreviousFrame(frameIndex);
};

ScoreCalculator.prototype.declareVariablesPreviousFrame = function(frameIndex) {
  this.previousFrame = this.allFrames[frameIndex - 1];
  this.previousFrameScore = this.frameScore(this.previousFrame);
  this.previousFirstRollScore = this.firstRollScore(this.previousFrame);
  this.declareVariablesCurrentFrame(frameIndex);
};

ScoreCalculator.prototype.declareVariablesCurrentFrame = function(frameIndex) {
  this.currentFrame = this.allFrames[frameIndex];
  this.currentFirstRollScore = this.firstRollScore(this.currentFrame);
};
