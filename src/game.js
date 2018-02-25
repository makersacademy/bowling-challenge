var Game = function() {
  this.allFrames =[];
  this.baseScore = 0;
  this.spareScore = 0;
  this.totalScore = 0;
  this.strikeScore = 0;
  this.singleStrikeScore = 0;
  this.doubleStrikeScore = 0;
};

Game.prototype.calculateTotalScore = function() {
  this.calculateBaseScore();
  this.calculateSpareScore();
  this.calculateStrikeScore();
  this.totalScore = this.baseScore + this.spareScore + this.strikeScore;
};

Game.prototype.calculateBaseScore = function() {
  for( var frame of this.allFrames) {
    for( var roll of frame) {
      this.baseScore += roll;
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
        this.spareScore += this.allFrames[frameIndex][0];
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
            this.singleStrikeScore += (this.frameScore(currentFrame));
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
              this.doubleStrikeScore += (previousFirstRollScore + currentFirstRollScore);
        }
    }
};

Game.prototype.calculateStrikeScore = function() {
  for( var frameIndex = 1, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    // if ((frameIndex + 1) === len) {continue;}
    // if {
      var currentFrame = this.allFrames[frameIndex];
      var previousFrame = this.allFrames[frameIndex - 1];
      var previous2Frame = this.allFrames[frameIndex - 2];
      // var nextFrame = this.allFrames[frameIndex + 1];
      var firstRollScore = this.firstRollScore(previousFrame);
        if (firstRollScore === 10 && frameIndex != 9) {
          // var nextRollScore = this.firstRollScore(nextFrame);
          if (nextRollScore === 10 && frameIndex < 8) {
            // if ((frameIndex + 2) === len) {continue;}
            // else {
              // var frameAfterNext = this.allFrames[frameIndex + 2];
              this.strikeScore += (nextRollScore + (this.firstRollScore(frameAfterNext)));
            // }
          }
          else {
            this.strikeScore += (this.frameScore(previousFrame));
          }
        }
    }
  // }
};

Game.prototype.frameScore = function(frame) {
  return frame[0]+frame[1];
};

Game.prototype.firstRollScore = function(frame) {
  return frame[0];
};
