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

//Adds to current frame
ScoreCalculator.prototype.calculateBaseScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    this.declareVariables(frameIndex);
    // var frame = this.allFrames[frameIndex];
    for( var roll of this.currentFrame) {
      this.frameScores[frameIndex] += roll;
    }
  }
};

//Adds to previous frame
ScoreCalculator.prototype.calculateSpareScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    var previousFrame = this.allFrames[frameIndex - 1];
    var previousFrameScore = this.frameScore(previousFrame);
    var previousFirstRollScore = this.firstRollScore(previousFrame);
      if ((previousFirstRollScore < 10) && (previousFrameScore === 10 )) {
        this.frameScores[frameIndex - 1] += this.allFrames[frameIndex][0];
      }
  }
};

//Adds to previous frame
ScoreCalculator.prototype.calculateSingleStrikeScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
      var currentFrame = this.allFrames[frameIndex];
      var currentFirstRollScore = this.firstRollScore(currentFrame);
      var previousFrame = this.allFrames[frameIndex - 1];
      var previousFirstRollScore = this.firstRollScore(previousFrame);
        if (previousFirstRollScore === 10 && currentFirstRollScore !== 10) {
            this.frameScores[frameIndex - 1] += (this.frameScore(currentFrame));
        }
        else if (previousFirstRollScore === 10 && frameIndex === 9) {
            this.frameScores[frameIndex - 1] += (this.frameScore(currentFrame));
        }
    }
};

//Adds to previous 2 frame
ScoreCalculator.prototype.calculateDoubleStrikeScore = function() {
  for( var frameIndex = 2, len = this.allFrames.length; frameIndex < len; frameIndex++) {
      var currentFrame = this.allFrames[frameIndex];
      var currentFirstRollScore = this.firstRollScore(currentFrame);
      var previousFrame = this.allFrames[frameIndex - 1];
      var previousFirstRollScore = this.firstRollScore(previousFrame);
      var previous2Frame = this.allFrames[frameIndex - 2];
      var previous2FirstRollScore = this.firstRollScore(previous2Frame);
        if (previousFirstRollScore === 10 && previous2FirstRollScore === 10) {
              this.frameScores[frameIndex - 2] +=(previousFirstRollScore + currentFirstRollScore);
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
    this.frameScores.push(0)
  }
};

ScoreCalculator.prototype.calculateTotalScoreFromFrames = function() {
  this.totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
};
