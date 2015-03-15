var Game = function() {
  this.allFrames = [];
};

Game.prototype.addFrame = function(frame) {
  if (this.allFrames.length > 0) {
    this.checkForSpare(frame);
    this.checkForStrike(frame);
  }
  this.allFrames.push(frame);
};

Game.prototype.totalScore = function() {
  var result = 0;
  var frames = this.allFrames;
  for (var i = 0; i < frames.length; ++i) {
    result += frames[i].score;
    if (i > 9) {
      result -= frames[i].score;
    }
  }
  return result;
};

Game.prototype.checkForSpare = function(currentFrame) {
  var frames = this.allFrames;
  var lastFrame = frames[frames.length - 1];
  var secondLastFrame = frames[frames.length - 2];

  if (lastFrame.isSpare()) {
    lastFrame.addBonus(currentFrame.rollOne);
  }
};

Game.prototype.checkForStrike = function(currentFrame) {
  var frames = this.allFrames;
  var lastFrame = frames[frames.length - 1];
  var secondLastFrame = frames[frames.length - 2];

  if (lastFrame.isStrike()) {
    lastFrame.addBonus(currentFrame.rollOne + currentFrame.rollTwo);
  }

  if (frames.length > 1) {
    if (secondLastFrame.isStrike() && lastFrame.isStrike()) {
      secondLastFrame.addBonus(currentFrame.rollOne);
    }
  }
};

