var Game = function() {
  this.allFrames =[];
  this.frameScores =[];
  this.totalScore = 0;
};

Game.prototype.calculateTotalScore = function() {
  this.prepareFrameScoring();
  this.calculateBaseScore();
  this.calculateSpareScore();
  this.calculateSingleStrikeScore();
  this.calculateDoubleStrikeScore();
  this.calculateTotalScoreFromFrames();
  // this.totalScore = this.baseScore + this.spareScore + this.singleStrikeScore + this.doubleStrikeScore;
};

//Adds to current frame
Game.prototype.calculateBaseScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    var frame = this.allFrames[frameIndex];
    for( var roll of frame) {
      this.frameScores[frameIndex] += roll;
    }
  }
};

//Adds to previous frame
Game.prototype.calculateSpareScore = function() {
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
Game.prototype.calculateSingleStrikeScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
      var currentFrame = this.allFrames[frameIndex];
      var firstRollScore = this.firstRollScore(currentFrame);
      var previousFrame = this.allFrames[frameIndex - 1];
      var previousFirstRollScore = this.firstRollScore(previousFrame);
        if (previousFirstRollScore === 10 && firstRollScore != 10) {
            this.frameScores[frameIndex - 1] += (this.frameScore(currentFrame));
        }
        else if (previousFirstRollScore === 10 && frameIndex === 9) {
            this.frameScores[frameIndex - 1] += (this.frameScore(currentFrame));
        }
    }
};

//Adds to previous 2 frame
Game.prototype.calculateDoubleStrikeScore = function() {
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

Game.prototype.frameScore = function(frame) {
  return frame[0]+frame[1];
};

Game.prototype.firstRollScore = function(frame) {
  return frame[0];
};

Game.prototype.prepareFrameScoring = function() {
  for( var frame of this.allFrames) {
    this.frameScores.push(0)
  }
};

Game.prototype.calculateTotalScoreFromFrames = function() {
  this.totalScore = this.frameScores.reduce(add, 0);
  function add(a, b) {
      return a + b;
  }
};
