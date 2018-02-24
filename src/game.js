var Game = function() {
  this.allFrames =[];
  this.baseScore = 0;
  this.spareScore = 0;
  this.totalScore = 0;
  this.strikeScore = 0;
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

Game.prototype.calculateSpareScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = this.allFrames[frameIndex];
    var currentFrameScore = this.frameScore(currentFrame);
    var firstRollScore = this.firstRollScore(currentFrame);
      if ((firstRollScore < 10) && (currentFrameScore === 10 )) {
        this.spareScore += this.allFrames[frameIndex+1][0];
      }
  }
};

Game.prototype.calculateStrikeScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = this.allFrames[frameIndex];
    var nextFrame = this.allFrames[frameIndex + 1];
    var firstRollScore = this.firstRollScore(currentFrame);
      if (firstRollScore === 10) {
        var nextRollScore = this.firstRollScore(nextFrame);
        if (nextRollScore === 10) {
          var frameAfterNext = this.allFrames[frameIndex + 2];
          this.strikeScore += (nextRollScore + (this.firstRollScore(frameAfterNext)));
        }
        else {
          this.strikeScore += (this.frameScore(nextFrame));
        }
      }
  }
};

Game.prototype.frameScore = function(frame) {
  return frame[0]+frame[1];
};

Game.prototype.firstRollScore = function(frame) {
  return frame[0];
};
