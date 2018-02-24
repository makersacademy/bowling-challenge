var Game = function() {
  this.allFrames =[];
  this.currentBaseScore = 0;
  this.currentSpareScore = 0;
};

console.log(this.currentScore);


Game.prototype.calculateTotalScore = function() {
  calculateBaseScore();
};

Game.prototype.calculateBaseScore = function() {
  for( var frame of this.allFrames) {
    for( var roll of frame) {
      this.currentBaseScore += roll;
    }
  }
};

Game.prototype.calculateSpareScore = function() {
  for( var frameIndex = 0, len = this.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = this.allFrames[frameIndex];
    var currentFrameScore = this.frameScore(currentFrame);
    var firstRollScore = currentFrame[0];
      if ((firstRollScore < 10) && (currentFrameScore === 10 )) {
        this.currentSpareScore += this.allFrames[frameIndex+1][0];
      }
  }
};

Game.prototype.frameScore = function(frame) {
  return frame[0]+frame[1];
};
